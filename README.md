# next-amp-template

基于 `next.js` 的amp模板

## 技术栈

* webpack
* react + react-dom
* express
* preach

## 目录结构

```bash
.
├── README.md  
├── amp-script									//	amp 外链 JavaScript 源文件 目录
│   └── test-event.jsx
├── i18n												// 国际化目录
│   └── index.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── static
│   │   ├── amp-js						// amp外接js  （webpack自动生成）
│   │   │   └── test-event.jsx
│   │   ├── font
│   │   │   └── Montserrat-Regular.ttf
│   │   └── locales						// 国际化静态资源目录
│   │       ├── de
│   │       │   ├── common.json
│   │       │   └── test.json
│   │       └── en
│   │           ├── common.json
│   │           └── test.json
│   └── zeit.svg
├── server										// 后台服务目录
│   ├── apis
│   │   └── test
│   │       ├── index.js
│   │       ├── mock-api.js
│   │       └── test-api.js
│   ├── index.js
│   └── router
│       ├── index.js
│       └── router-apis.js
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── common.scss
│   │   │   ├── grid.scss
│   │   │   └── vars.scss
│   │   └── img.png
│   ├── components  					// 功能组件库
│   │   └── header
│   │       ├── cdn-data.json
│   │       ├── header-md.tsx
│   │       ├── header-sm.tsx
│   │       ├── index.module.scss
│   │       ├── index.tsx
│   │       └── title-data.json
│   ├── layout								// 布局组件目录  （header）
│   │   └── index.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── song.tsx
│   │   ├── amp-test.tsx 
│   │   └── test.tsx
│   └── view									// 路由对应组件库目录
│       ├── home
│       │   ├── cdn-data.json
│       │   ├── index.module.scss
│       │   └── services-title.tsx
│       ├── songsong.css
│       └── test.scss
├── tsconfig.json
├── webpack.amp.config.js			//amp-script 打包的webpack配置
└── yarn.lock

```

## 重点目录介绍

* `./amp-script/`

  amp框架中，不会引入项目的脚本文件，利用 `<amp-script>` 进行外部脚本引入

  脚本引入`preact`利用webpack打包，实现组件化快速注入，减少代码维护成本。

  **例：**`

  ```jsx
  //  ./src/pages/amp-test.tsx
  <AmpScript src="/static/amp-js/test-event.jsx" height={300}>
    <div className={'test'}>
      <div id="testScript" />
    </div>
    ...
  </AmpScript>
  ```

  `/static/amp-js/test-event.jsx` 只指向服务的静态文件夹 （`public/static/amp-js/test-event.jsx`),源文件是 `./amp-script/test-event.jsx`

  > 如果需要引入 拓展脚本 （尽量少用，有大小限制）
  >
  > 1. 在`./amp-script`目录下创建`${name}.js`
  > 2. 使用标签	`<AmpScript  src="/static/amp-js/${name}.js"></AmpScript>`, 
  > 3. 从新运行 (`yarn dev` or `yarn build`) 

* `./i18n/`

  国际化配置 具体文档参考`next-i18next`

  存放语言json的静态目录：`./public/static/locales`

* `./server/`

  后台服务目录

  主要技术利用`express`和`next`结合， 开启服务。对后台接口进行半自动化封装。

  `./server/apis` 为接口管理目录

  **例：**

  文件`./server/apis/test/mock-api.js`  对应的就是api接口为 `/server/apis/test/mock-api`

  访问：`http://localhost:8000/server/apis/test/mock-api`  查看结果

  > 如果需要自行开发后台接口
  >
  > 1. 在`./server/apis`目录下，`${api}`文件夹下创建一个`${fileName}.js` 文件
  > 2. 在`${api}/index.js` 中注册接口方法 。 如：router.get(`${fileName}`, require(`${fileName}`)
  > 3. 编写`${fileName}.js` 文件

* `./pages/`和`./view/`

  `./pages/`为 next 默认定义的路由目录，`./view/`是对应路由所需要的样式组件， 在`./pages/`尽量只用来做组件模块的拼接，不做逻辑交互，如果需要组件需要后台数据，可从路由对应的页面请求数据， 传给对应组件。

## 注意事项

* amp规范较为苛刻， 多查文档。
* 页面开发样式处理方式为， `styled-jsx`
* 一个路由页面只能有一个自定义` <style>` 、`amp-script`

## 目前问题

* amp框架中要求`<amp-script>` 的 `src`属性引用地址为cdn地址。 
