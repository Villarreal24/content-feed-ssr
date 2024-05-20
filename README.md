This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install depedencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Objetive of this project

This is a simple project to emulate a feed like Instagram with a responsive UI. For the backend, I'm using SSR provided by Next.js, making an API call and processing the data to normalize it, making it easier to understand and quicker to render.

## Report on the project logic

I decided to use Next.js because it is a very good framework for faster development and integration of the backend using SSR and TypeScript as the main language. On the front end, I use Tailwind CSS to create the components and structure the folders correctly, making it easier to understand, maintain, and add new features quickly.

I also applied testing with Jest to the API call and the function to normalize the data. This was a bit tricky because I installed the dependencies for testing after creating the project, and I had some issues with the libraries to simulate and test the API call.

For the function to normalize the data, I analyzed the data structure received from the API and also analyzed the design and how I would create the components to render the data. After this, I continued by creating the function to send the API response as a parameter and used .map() to iterate over all the objects, returning a new object with the best and easiest structure for the front end.

# Content Feed ssr
