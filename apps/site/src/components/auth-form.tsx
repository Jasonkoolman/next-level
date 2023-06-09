'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { classNames } from '@nxl/site/common';
import { Button } from '@nxl/site/ui/button';
import { Input } from '@nxl/site/ui/input';
import { Label } from '@nxl/site/ui/label';
import { useToast } from '@nxl/site/ui/toast';

export const userAuthSchema = z.object({
  email: z.string().email(),
});

type AuthFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof userAuthSchema>;

export function AuthForm({ className, ...props }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    const response = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/dashboard',
    });

    const isSuccess = Boolean(response?.ok && !response?.error);

    if (!isSuccess) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive',
      });
    }

    toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.',
    });
  }

  const signInWithGitHub = async () => {
    setIsGitHubLoading(true);
    await signIn('github');
    router.push('/dashboard');
  };

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
              disabled={isSubmitting || isGitHubLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button disabled={isSubmitting}>
            {isSubmitting && <div>Spinner</div>}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-slate-600">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={signInWithGitHub}
        disabled={isSubmitting || isGitHubLoading}
      >
        {isGitHubLoading ? <div>spinner</div> : <div>icon</div>} Github
      </Button>
    </div>
  );
}
