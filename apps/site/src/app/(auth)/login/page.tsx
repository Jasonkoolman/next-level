import { Metadata } from 'next';
import Link from 'next/link';

import { classNames } from '@nxl/site/common';
import { buttonVariants } from '@nxl/site/ui/button';
import { AuthForm } from 'site/components/auth-form';
import { Container } from 'site/components/layout/container';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <Container className="flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={classNames(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>Back</>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enter your email to sign in to your account
          </p>
        </div>
        <AuthForm />
        <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </Container>
  );
}
