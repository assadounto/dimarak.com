// app/lib/auth.config.ts
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Apple from 'next-auth/providers/apple';

/** --- Apple client secret (ES256) --- */

/** --- server-side helper: exchange social token for YOUR API token --- */
async function exchangeSocialToken(opts: {
  provider: 'google' | 'github' | 'apple';
  token: string; // google/apple id_token/access_token; github access_token
  name?: string | null;
}) {
  const API = process.env.API_BASE_URL; // e.g. https://api.xonbay.com/v1
  if (!API) throw new Error('Missing API_BASE_URL env');

  const res = await fetch(`${API}/auth/social_login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      token: opts.token,
      provider: opts.provider,
      name: opts.name ?? undefined
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`social_login failed (${res.status}): ${body}`);
  }
  // expected: { user: {...}, token: "..." }
  return res.json();
}

const authConfig = {
  debug: true,

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHub({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    }),

    // Credentials (supports normal email/password and "token mode" for confirm-email)
    Credentials({
      credentials: {
        email: {
          type: 'text',
          label: 'Email',
          placeholder: 'your-email@example.com'
        },
        password: { type: 'password', label: 'Password' },
        // token-mode extras (from confirm-email screen)
        mode: { type: 'text' },
        apiToken: { type: 'text' },
        name: { type: 'text' }
      },
      async authorize(credentials) {
        try {
          const API = process.env.API_BASE_URL;
          if (!API) throw new Error('Missing API_BASE_URL env');

          // --- Token mode (from confirm-email page) ---
          if (
            credentials?.mode === 'token' &&
            credentials?.apiToken &&
            credentials?.email
          ) {
            // (Optional) verify token with /me
            let userFromMe: any = null;
            try {
              const meRes = await fetch(`${API}/me`, {
                headers: {
                  Accept: 'application/json',
                  Authorization: `Bearer ${credentials.apiToken}`
                }
              });
              if (meRes.ok) userFromMe = await meRes.json();
            } catch {
              /* ignore */
            }

            return {
              id: String(userFromMe?.id ?? Date.now()),
              name: userFromMe?.name ?? credentials.name ?? null,
              email: credentials.email,
              token: credentials.apiToken,
              photo_url: userFromMe?.photo_url ?? null
            } as any;
          }

          // --- Normal email/password ---
          const res = await fetch(`${API}/users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              user: {
                email: credentials?.email,
                password: credentials?.password
              }
            })
          });

          if (!res.ok) return null;
          const data = await res.json();

          if (data?.user && data?.token) {
            return {
              id: String(data.user.id),
              name: data.user.name,
              email: data.user.email,
              token: data.token, // ← your API token
              photo_url: data.user.photo_url ?? null
            } as any;
          }
          return null;
        } catch (err: any) {
          console.error('Credentials auth failed:', err?.message || err);
          return null;
        }
      }
    })
  ],

  pages: {
    signIn: '/' // your custom page
    // error: '/auth/error'
  },

  callbacks: {
    /**
     * JWT runs on initial sign-in (has `account`) and on each subsequent request (no `account`).
     * We detect Google/GitHub/Apple sign-in once, exchange the provider token with your API,
     * then store your API token + normalized user on the JWT.
     */
    async jwt({ token, user, account, profile }) {
      // Social sign-in path
      if (
        account?.provider === 'google' ||
        account?.provider === 'github' ||
        account?.provider === 'apple'
      ) {
        try {
          const provider = account.provider as 'google' | 'github' | 'apple';

          // Prefer id_token when available (Google, Apple); GitHub only has access_token.
          const socialToken =
            (account.id_token as string | undefined) ||
            (account.access_token as string | undefined);

          if (socialToken) {
            const data = await exchangeSocialToken({
              provider,
              token: socialToken,
              name: user?.name ?? profile?.name ?? null
            });

            // Persist YOUR API token + user identity into JWT
            (token as any).apiToken = data?.token ?? null;
            token.id = String(data?.user?.id ?? user?.id ?? '');
            token.name = data?.user?.name ?? user?.name ?? null;
            token.email = data?.user?.email ?? user?.email ?? null;
            (token as any).photo_url = data?.user?.photo_url ?? null;
          }
        } catch (e) {
          console.error('Social exchange failed:', e);
          // Optionally: throw e to abort sign-in
        }
      }

      // Credentials sign-in path (previous behavior)
      if (user && !(token as any).apiToken) {
        (token as any).apiToken = (user as any).token ?? null;
        token.id = token.id ?? (user as any).id;
        token.name = token.name ?? user.name;
        token.email = token.email ?? user.email;
        (token as any).photo_url =
          (token as any).photo_url ?? (user as any).photo_url ?? null;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: (token as any).id as string,
        name: token.name as string,
        email: token.email as string,
        photo_url: (token as any).photo_url ?? null
      } as any;

      // Expose your backend token to client (axios interceptor uses this)
      (session as any).apiToken = (token as any).apiToken ?? null;
      return session;
    }
  }
} satisfies NextAuthConfig;

export default authConfig;
