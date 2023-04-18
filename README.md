![Next Level Logo](./apps/site/public/logo-icon.svg)

# Next Level

A production grade, open source web application based on state-of-the-art technologies.

- [Nx.dev](https://nx.dev)
- [React 18](https://react.dev/)
- [Next.js 13](https://nextjs.org/)
- [Next Auth](https://next-auth.js.org/)
- [Node.js](https://nodejs.org/en)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Hook Form](https://react-hook-form.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Zod](https://github.com/colinhacks/zod)

> Be aware: this project is work in progress

## Local development

Make sure to install the dependencies:

`npm install`

### Development server

Run `npm run dev` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Cheatsheet

Common CLI commands that might come in handy:

- Serve website: `npm run site:serve`
- Build website: `npm run site:build`
- Serve database: `npm run db:serve`
- Manage database: `npm run db:studio`
- Generate UI component: `nx g @nrwl/react:component {name} --project=site-ui`
- Create library: `nx g @nrwl/js:lib {name} --directory=site`

## Caveats

**The client, the server, and tree-shaking**

We need to add deep imports for libraries (see [issue](https://github.com/nrwl/nx/issues/3069) and [issue](https://github.com/vercel/next.js/issues/12557#issuecomment-1427088366)) to only load the code when imported.

## FAQ

**Why not keep all logic in the Next.js app itself?**

The Nx team has suggested that most of the code should live in libraries, even if it's application-specific. That way you can test and build it independently of the application. In Next Level, all libraries related to the application `apps/site` live in the `libs` folder (i.e. `libs/site/ui`). This allows for easy scaling when creating more applications (a dedicated API using Nest.js, for example). You could, however, move code or projects as you seem fit using [@nrwl/workspace:move](https://nx.dev/packages/workspace/generators/move).

## Resources & inspiration

- https://beta.nextjs.org/docs
- https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613
- https://ui.shadcn.com/
- https://www.radix-ui.com/docs/primitives
- https://github.com/shadcn/taxonomy
- https://nextjs.org/docs/advanced-features/react-18/server-components
- https://nx.dev/recipes/other/using-tailwind-css-in-react
- https://planetscale.com/blog/building-planetscale-with-planetscale
- https://planetscale.com/docs/tutorials/prisma-quickstart
- https://authjs.dev/reference/adapter/prisma
- https://github.com/joselevelsup/nx-trpc-nextjs-starter/
