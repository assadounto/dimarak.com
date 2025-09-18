import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { StarIcon } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import { Modal } from '@/components/ui/modal';

interface ModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

const SigninModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      className='w-[95%] max-w-[35rem]'
      title=''
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0'>
        <div className='flex h-full w-full items-center p-4 lg:p-8'>
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
    </Modal>
  );
};

export default SigninModal;
