# Overview

Let's discover in less than 5 minutes.
This line is added by test.

## Getting Started


### 1、Requirements

- *** Required ***: Install [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running node -v). 

- *** Optional ***: Install vscode plugin 'Markdown Snippets for MDX and Docusaurus'.

```
https://marketplace.visualstudio.com/items?itemName=MisterMunchkin.simple-markdown-snippets
```
  

### 2、Running the development server

``` bash
cd /path/to/docs
```

``` bash
npm install
```

``` bash
npm run start
```



By default, a browser window will open at [http://localhost:3000](http://localhost:3000). Browse around the site to see what's available.

:::tip My tip
The default locale is en-us;
:::

### 3、Start your localized site
Start your site on the simplified chinese locale:

``` bash
npm run start -- --locale zh
```

Your localized site is accessible at [http://localhost:3000/zh/](http://localhost:3000/zh/)

:::danger Take care
In development, you can only use one locale at a same time.
:::

### 4、 Docs Edit
create folder or .md file.

### 5、build

Build your site for a specific locale:

``` bash
npm run build -- --locale zh
```

Or build your site to include all the locales at once:
```bash 
npm run build
```

and the contents will be generated within the /build directory.
