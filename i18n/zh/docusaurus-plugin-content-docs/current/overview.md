---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 概要

Let's discover in less than 5 minutes.

## 开始


### 1、安装依赖

- *** Required ***: Install [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running node -v). 

<Tabs>
  <TabItem value="windows" label="Windows" default>

    https://nodejs.org/dist/v16.17.0/node-v16.17.0-x86.msi

  </TabItem>
  <TabItem value="mocos" label="MacOS">

    https://nodejs.org/dist/v16.17.0/node-v16.17.0.pkg

  </TabItem>
  <TabItem value="sourcecode" label="Source Code">

    https://nodejs.org/dist/v16.17.0/node-v16.17.0.tar.gz

  </TabItem>
</Tabs>

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

build your site to include all the locales at once:

```bash 
npm run build
```
and the contents will be generated within the /build directory.

### checked result


## Special Grammar

### 1、Admonitions
:::note
Some **content** with _Markdown_ `syntax`. 
:::

:::tip
Some **content** with _Markdown_ `syntax`. 
:::

:::info Some Info Title
Some **content** with _Markdown_ `syntax`. 
:::

:::caution
Some **content** with _Markdown_ `syntax`. 
:::

:::danger
Some **content** with _Markdown_ `syntax`. 
:::

``` 
:::note
Some **content** with _Markdown_ `syntax`. 
:::

:::tip
Some **content** with _Markdown_ `syntax`. 
:::

:::info
Some **content** with _Markdown_ `syntax`. 
:::

:::caution
Some **content** with _Markdown_ `syntax`. 
:::

:::danger
Some **content** with _Markdown_ `syntax`. 
:::
```

### 2、Content Wrap

<details>
  <summary>Some details containing headings</summary>
  <h2 id="#heading-id">I'm a heading that will not show up in the TOC</h2>
  Some content...
</details>

``` html
<details>
<summary>Some details containing headings</summary>
<h2 id="#heading-id">I'm a heading that will not show up in the TOC</h2>
Some content...
</details>
```

### 3、Tabs
<Tabs>
  <TabItem value="npm" label="npm" default>

    npm example content.

  </TabItem>
  <TabItem value="yarn" label="yarn">

    yarn example content.
    
  </TabItem>
</Tabs>


``` jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="yarn" default>
    npm install
  </TabItem>
  <TabItem value="orange" label="Orange">
    yarn install
  </TabItem>
</Tabs>
```

### 4、Images


![Logo](./assets/my-image.png)

The img path is relatived to your markdown filepath.
``` markdown
![Logo](../static/img/logo.png)
```

### 5、Links

URL path to another doc...

``` markdown
[Link](./installation)
```


### 6、Custom Style

<span style={{
  backgroundColor: 'red',
  padding: 5,
  color: '#FFF'
}}>Foo</span>

```
<span style={{backgroundColor: 'red', padding: 10}}>Foo</span>
```