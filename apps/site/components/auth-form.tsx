'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { classNames } from '@nxl/site/common';
import { Button } from '@nxl/site/ui/button';
import { Input } from '@nxl/site/ui/input';
import { Label } from '@nxl/site/ui/label';

export const userAuthSchema = z.object({
  email: z.string().email(),
});

type AuthFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof userAuthSchema>;

const toast = (args: any) => alert(args.title);

export function AuthForm({ className, ...props }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/dashboard',
    });

    setIsLoading(false);

    if (signInResult?.error) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      });
    }

    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    });
  }

  return (
    <div className={classNames('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button disabled={isLoading}>
            {isLoading && <div>Spinner</div>}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-slate-600">Or continue with</span>
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          setIsGitHubLoading(true);
          signIn('github');
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? <div>spinner</div> : <div>icon</div>} Github
      </Button>
    </div>
  );
}