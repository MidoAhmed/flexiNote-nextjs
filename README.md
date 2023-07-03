- FlexiNote is an MVP app built with Next.js for note-taking purposes, inspired by applications like Notion/Wiki.

  NB: This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Stack

- Typescript
- eslint and prettier setup
- Next.js v13
- Node v18.16.0 (LTS)
- MongoDB (can use free hosted one, will cover this later)
- ~~Tailwind CSS~~

## MVP features

- User Registration and Authentication :

  - [next-auth](https://next-auth.js.org/) It handles all of our auth needs and more.
  - We want to allow users to signup with a Github account and then use a JWT to authenticate requests.

- Static routes and content:

  - Landing page that matches the published content from our CMS (Fake CMS content)

- Dynamic routes and content:

  - Blog Posts

- Conntecting to a DB (MongoDB)
- Creating API routes
- ~~previewing content~~
- ~~previewing your entire app~~

## Simple Architecture

![alt text](./public/FlexiNote-arch.png 'Architecture ')

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
