import Link from 'next/link';

import { classNames } from '@nxl/site/common';
import { buttonVariants } from '@nxl/site/ui/button';
import { AuthForm } from 'site/components/auth-form';
import { Container } from 'site/components/layout/container';

export const metadata = {
  title: 'Create an account',
  description: 'Create an account to get started.',
};

export default function RegisterPage() {
  return (
    <Container className="grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={classNames(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="hidden h-full bg-slate-100 lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            Logo
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter your email below to create your account
            </p>
          </div>
          <AuthForm />
          <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
