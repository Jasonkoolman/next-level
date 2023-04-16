import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export enum AuthProvider {
  Email = 'email',
  Github = 'github',
}

/**
 * Supported auth providers
 */
export const authProviders: NextAuthOptions['providers'] = [
  GitHubProvider({
    clientId: process.env['GITHUB_CLIENT_ID'] || '',
    clientSecret: process.env['GITHUB_CLIENT_SECRET'] || '',
  }),
];
