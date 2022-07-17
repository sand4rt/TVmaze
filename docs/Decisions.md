# Decisions

Unfortunately I don't have enough time to describe the architecture. I hope you can figure it out, if not let me know. I would be happy to describe or explain it further!

Below are some of the decisions I've made:

-   Grouped files by feature rather than by file type. One of the reasons is that the app can be more easily broken down into micro frontends when the need arises.
-   Reusable component folder which could be moved to it's own NPM library.
-   Reusable TV Maze API client library, could be moved to it's own NPM library and helps to keep the backend and frontend types in sync through API tests.
-   Mapping API data to View Data so that the view is easier to test.
-   BEM naming convention for CSS.
-   Playwright for E2E, API, component and unit testing.
-   ESLint and StyleLint for code style enforcement.
-   Vite for it's speed and ease of use.
-   TypesScript for it's type safety.
-   PostCSS because it's closer to native CSS then others.
-   Vue Query instead of Pinia for it's caching and state sharing capabilities.
-   Yarn 2 instead of 1 for it's speed.
-   Layout components for defining the application shell
