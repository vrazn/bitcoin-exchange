## Technologies Used
This project has been set up with the following technologies:
1) [TypeScript](https://www.typescriptlang.org/)
2) [Next.js 13 (Beta)](https://beta.nextjs.org/docs)
3) [Storybook](https://storybook.js.org/) for isolated component development, snapshot and interaction testing
4) [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/) for styling. This is required to be able to render static pages as most current component libraries like Material UI don't support Next.js 13 yet
5) [NPM](https://www.npmjs.com/) as the package manager
6) [Jest](https://jestjs.io/) as a test runner of choice
7) [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/) + [lint-staged](https://www.npmjs.com/package/lint-staged) to keep the code clean
8) [Vercel](https://vercel.com/) for the ease of hosting the website

## Project Structure

The project is using the [Component Driven](https://www.componentdriven.org/) process for bulding UIs, further improved by following Brad Frost's [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)


## Getting Started

First, run the development server:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Known Bugs
1) Radio buttons on `/currencies/XXX/` page are not being selected on click