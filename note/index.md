# React 高阶知识点



## 代码分割

### import()

使用 `import()` 导入的代码会自动打包成单独的文件，这个需要编译工具的支持。`create-react-app` 默认支持这个功能，但是如果使用自定义的 webpack 配置，要参考 webpack 的关于代码分割的文档，导入 babel 对 `import()` 语法的支持 `babel-plugin-syntax-dynamic-import`。

```jsx
// SplitBundleComponent 在 development 模式下被编译成了 1.chunk.js 
// 但是只有在 window.bundle 为 true 时，1.chunk.js 才会被加载。
if(window.bundle) {
  import('./SplitBundleComponent').then((bundle) => {
      console.log('Split bundle loaded');
  });  
} 
```

### React.lazy

`import()` 可以实现模块的拆分和按需加载，React.lazy 可以实现 React 组件的拆分。

> `React.lazy` 接受一个函数，这个函数需要动态调用 `import()`。它必须返回一个 `Promise`，**该 Promise 需要 resolve 一个 `default` export 的 React 组件**。

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));
```

为了更好的看到延迟加载的效果，让 LazyComponent 五秒后渲染，

```jsx
const LazyComponent = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      import('./LazyComponent').then((module) => {
        resolve(module)
      })
    }, 5000);
  })
});
```

然后在 Suspense 组件中渲染组件。

```jsx
<div>
  <Suspense fallback={<div>Loading...</div>}>
  	<LazyComponent />
  </Suspense>
</div>
```

可以看到浏览器在五秒后发出了请求并加载了 LazyComponent.

### 在路由中使用 React.lazy

```jsx
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```



## Context

### API

- React.createContext

  将 `undefined` 传递给 Provider 的 value 时，消费组件的 `defaultValue` 不会生效。

- Context.Provider

  Provider 及其内部 consumer 组件都不受制于 `shouldComponentUpdate` 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

  Context 变化引起 Consumer 组件渲染时，也不会触发 `shouldComponentUpdate` 。

- Class.contextType

  将 context 对象挂载到组件对象上 this.context。

- Context.Consumer

  ```jsx
  <MyContext.Consumer>
    {value => /* 基于 context 值进行渲染*/}
  </MyContext.Consumer>
  ```

- Context.displayName

  

### 多个Context



### 父组件刷新导致 Provider 重新渲染的问题

