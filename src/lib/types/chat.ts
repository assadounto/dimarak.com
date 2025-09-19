// lib/chat.ts
export type UserRef = { id: string; name: string; avatar?: string };
export type Conversation = {
  id: string;
  title: string; // shop or user name
  other: UserRef; // the person you chat with
  lastMessage: string;
  updatedAt: string; // ISO
  unread?: number;
};
export type Message = {
  id: string;
  convId: string;
  from: UserRef["id"];
  text: string;
  at: string; // ISO
};

const ME: UserRef = {
  id: "u_me",
  name: "You",
  avatar: "/images/avatars/me.png",
};

const USERS: Record<string, UserRef> = {
  u1: { id: "u1", name: "Adoma Styles", avatar: "/images/avatars/shop1.png" },
  u2: { id: "u2", name: "Tech World", avatar: "/images/avatars/shop2.png" },
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: "c1",
    title: "Adoma Styles",
    other: USERS.u1,
    lastMessage: "Dress available in M and L.",
    updatedAt: "2025-09-05T14:20:00Z",
    unread: 1,
  },
  {
    id: "c2",
    title: "Tech World",
    other: USERS.u2,
    lastMessage: "We can deliver by Tuesday.",
    updatedAt: "2025-09-04T10:02:00Z",
  },
];

export const MESSAGES: Message[] = [
  {
    id: "m1",
    convId: "c1",
    from: "u1",
    text: "Hi! Need size?",
    at: "2025-09-05T13:58:00Z",
  },
  {
    id: "m2",
    convId: "c1",
    from: "u_me",
    text: "Do you have size M?",
    at: "2025-09-05T14:02:00Z",
  },
  {
    id: "m3",
    convId: "c1",
    from: "u1",
    text: "Dress available in M and L.",
    at: "2025-09-05T14:20:00Z",
  },

  {
    id: "m4",
    convId: "c2",
    from: "u2",
    text: "Delivery by Tuesday works.",
    at: "2025-09-04T10:02:00Z",
  },
];

// pretend-API
export async function listConversations(): Promise<Conversation[]> {
  return CONVERSATIONS.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}
export async function getConversation(
  id: string,
): Promise<Conversation | null> {
  return CONVERSATIONS.find((c) => c.id === id) || null;
}
export async function listMessages(convId: string): Promise<Message[]> {
  return MESSAGES.filter((m) => m.convId === convId).sort((a, b) =>
    a.at > b.at ? 1 : -1,
  );
}
export async function sendMessage(
  convId: string,
  text: string,
): Promise<Message> {
  const msg: Message = {
    id: "m" + (MESSAGES.length + 1),
    convId,
    from: ME.id,
    text,
    at: new Date().toISOString(),
  };
  MESSAGES.push(msg);
  const c = CONVERSATIONS.find((c) => c.id === convId);
  if (c) {
    c.lastMessage = text;
    c.updatedAt = msg.at;
    c.unread = 0;
  }
  return msg;
}
export function me() {
  return ME;
}
