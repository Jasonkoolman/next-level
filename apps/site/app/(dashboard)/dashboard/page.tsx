import { notFound } from 'next/navigation';

import { getCurrentUser } from '@nxl/node/auth';
import { SignOutButton } from '../../../components/sign-out-button';

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
