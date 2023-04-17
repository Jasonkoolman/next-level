import { notFound } from 'next/navigation';
import { SignOutButton } from 'apps/site/components/sign-out-button';

import { getCurrentUser } from '@nxl/node/auth';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div>
      Dashboard {JSON.stringify(user)} <SignOutButton />
    </div>
  );
}
