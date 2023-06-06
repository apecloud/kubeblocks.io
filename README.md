# Overview

Let's discover how to build a page on a localhost in less than 5 minutes.

## Getting Started

### 1. Requirements

* *Required*: Install [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`).

* *Optional*: Install vscode plugin 'Markdown Snippets for MDX and Docusaurus'.

```
https://marketplace.visualstudio.com/items?itemName=MisterMunchkin.simple-markdown-snippets
```
  
### 2. Run the development server

``` bash
cd /path/to/website
```

``` bash
npm install
```

``` bash
npm run start
```

By default, a browser window opens at [http://localhost:3000](http://localhost:3000). Browse the site to see what's available. The default locale is en-us;

### 3. Start your localized site

Start your site on the simplified Chinese locale:

``` bash
npm run start -- --locale zh
```

Your localized site is accessible at [http://localhost:3000/zh/](http://localhost:3000/zh/)

In development, you can only use one locale at one time.

### 4. Edit docs

Create a folder or a .md file.

### 5. build

Build your site for a specific locale:

``` bash
npm run build -- --locale zh
```

Or build your site to include all the locales at once:

```bash
npm run build
```

and the contents will be generated within the /build directory.
