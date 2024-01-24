# Github API Fetch

This project uses Github API v3 to fetch Repositories and their respective details. Please find the demo in the description section.

## Description

This project uses Github API v3 API. Read the Docs: https://docs.github.com/en/rest?apiVersion=2022-11-28
This project repositories based on user's search entry on search bar.
The project is built with Vite in Typescript.
For API fetch, React Query is used.
Testing is Done with Vitest, Storybooks and React Testing Library

# Prerequisite

- Npm Package Manager

# Tools Used in the App

- `React`
- `React Query` - Data Fetching, Caching and State Management
- `React Router` - Route Management
- `Typescript` - make the code Statically Typed
- `React Testing Library` - Test logics and view actions
- `Storybook` - Visual Regression Test
- `Cypress` - Some basic e2e test

# Standarizing the Code

- ESLint
- Prettier
- Husky

# Routes

- `/` - This is the search page. You have to Enter certain value on textbox to start searching and to get the data
- `/details/:id` - This is the details page for [id] of particular repository

# Available Scripts

- `dev`: Run the codebase in dev mode
- `build`: Build project for prod
- `lint`: Lint the project through eslint configurations (.eslintrc)
- `lint:fix`: Link and Fix any solvable errors
- `preview`: Preview built project in your local desktop
- `test`: Run unit tests
- `coverage`: Run unit test coverage using coverage@v8
- `storybook`: Run storybook at port 6006
- `build-storybook`: Build storybook
- `cypress:open`: Run cypress in headed mode
- `cypress:run`: Run cypress in headless mode
- `prepare`: Install husky

## How to run this project?

1. Open terminal in desired drive/folder to clone the project
2. git clone https://github.com/ankitOneNineNineNine/github-search.git
3. Inside the Cloned folder, Open terminal.
4. Write `npm install --legacy-peer-deps`
5. After the completion, write `npm run dev` (dev mode)
6. If you want to preview prod built, <br>Perform `npm run build` & `npm run preview`
   <br>
   <i>Both the dev / prod run will start at PORT 4000</i>
   <br>
   <i>IF you want to change this, visit `vite.config.ts` and change port property of server and/or preview</i>
