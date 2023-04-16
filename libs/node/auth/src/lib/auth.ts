import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { CallbacksOptions, NextAuthOptions } from 'next-auth';

import { db } from '@nxl/node/db';
import { authProviders } from './providers';

/**
 * This callback is called whenever a session is checked.
 */
const session: CallbacksOptions['session'] = async ({ token, session }) => {
  if (token && session.user) {
    (session.user as any).id = token['id'];
    session.user.name = token.name;
    session.user.email = token.email;
    session.user.image = token.picture;
  }

  return session;
};

/**
 * This callback is called whenever a JSON Web Token is created or updated.
 */
const jwt: CallbacksOptions['jwt'] = async ({ token, user }) => {
  const dbUser = await db.user.findFirst({
    where: {
      email: token.email,
    },
  });

  if (!dbUser) {
    if (user) {
      token['id'] = user?.id;
    }
    return token;
  }

  return {
    id: dbUser.id,
    name: dbUser.name,
    email: dbUser.email,
    picture: dbUser.image,
  };
};

/**
 * NextAuth configuration
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: authProviders,
  callbacks: { session, jwt },
};
