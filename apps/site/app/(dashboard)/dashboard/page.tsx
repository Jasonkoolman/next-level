import { notFound } from 'next/navigation';

import { getCurrentUser } from '@nxl/site/common/lib/session';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return <div>Dashboard {JSON.stringify(user)}</div>;
}
