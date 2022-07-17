# Setup and development

### Step 1: Install node

Install [Node](https://nodejs.org/dist/)

### Step 2: Install yarn

```bash
npm install --global yarn
```

### Step 3: Install the packages

```bash
yarn install
```

### Step 4: Install Visual Studio Code extentions

Open Visual Studio Code and press the following key combination: `CTRL+SHIFT+P` and type 'Show Recommended Extensions' and hit `ENTER`. The extension menu opens where all workspace extension recommendations should be installed. When installed make sure to restart Visual Studio Code.

### Step 5: Start the project

```bash
yarn dev
```

---

### Typecheck, Compile and Minify for Production

```sh
yarn run build
```

### Run the unit tests

```bash
yarn test:unit
```

### Run the end to end and API tests

```bash
yarn test:e2e
```

### Lint CSS and JS

```sh
yarn run lint
```
