import NextAuth from 'next-auth';

import { authOptions } from '@nxl/site/common/lib/auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
