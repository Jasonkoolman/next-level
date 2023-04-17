'use client';

import { signOut } from 'next-auth/react';

import { Button } from '@nxl/site/ui/button';

export function SignOutButton() {
  return (
    <div>
      sad
      <Button
        onClick={() => {
          signOut({
            callbackUrl: `${window.location.origin}/login`,
          });
        }}
      >
        Sign out
      </Button>
    </div>
  );
}
