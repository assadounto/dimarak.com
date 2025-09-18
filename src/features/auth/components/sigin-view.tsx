import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { StarIcon } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage({ stars }: { stars: number }) {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/examples/authentication'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div
        className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'
        style={{
          backgroundImage: `url('/ladies-1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='absolute inset-0 bg-zinc-900 bg-opacity-60' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          Xonbay
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;Xonbay redefines the future of ecommerce.&rdquo;
            </p>
            <footer className='text-sm'>Michael Ankomah Idrissu</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          {/* GitHub link */}
          <Link
            className={cn(
              buttonVariants({
                variant: 'ghost'
              }),
              'group inline-flex hover:text-yellow-200'
            )}
            target='_blank'
            href={'https://github.com/'}
          ></Link>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Welcome Back!
            </h1>
            <p className='text-sm text-muted-foreground'>
              Check out the awesome deals we have waiting
            </p>
          </div>
          <UserAuthForm />

          {/* New User Section */}
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center'>
              <span className='bg-background px-4 text-sm text-muted-foreground'>
                New to Xonbay?
              </span>
            </div>
          </div>

          <Link
            href='/signup'
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'group relative overflow-hidden border-primary/20 bg-transparent transition-all duration-300 hover:border-primary hover:bg-primary/10'
            )}
          >
            <span className='relative z-10'>Join the Xonbay Experience</span>
            <span className='absolute inset-0 -z-0 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 opacity-0 transition-all duration-500 group-hover:opacity-100'></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
