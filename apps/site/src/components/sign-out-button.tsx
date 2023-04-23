'use client';

import { signOut } from 'next-auth/react';

import { Button } from '@nxl/site/ui/button';

export function SignOutButton() {
  const onClick = () => {
    signOut({
      callbackUrl: `${window.location.origin}/login`,
    });
  };

  return (
    <div>
      <Button onClick={onClick}>Sign out</Button>
    </div>
  );
}
