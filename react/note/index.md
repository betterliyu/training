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

#### React.createContext(defaultValue)

创建一个 context 对象，可以传入一个默认值作为参数

**只有**当组件所处的树中没有匹配到 Provider 时，其 `defaultValue` 参数才会生效。将 `undefined` 传递给 Provider 的 value 时，消费组件的 `defaultValue` 不会生效。

#### Context.Provider

这是一个 Provider 组件，包裹在需要订阅这个 context 的组件上级。提供一个 props `value`，用来给 context 传递自定义的值。内部的 consumer 组件，拿到的就是这个自定义的值。

```jsx
<TestUpdateContext.Provider value={this.state.updateValue}>
  <TestUpdateParent data={this.props.data}></TestUpdateParent>
</TestUpdateContext.Provider>
```

Provider 及其内部 consumer 组件都不受制于 `shouldComponentUpdate` 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

Context 变化引起 Consumer 组件渲染时，也不会触发 `shouldComponentUpdate` 。

```jsx
export default class TestUpdateParent extends React.Component {
  shouldComponentUpdate() {
    // 即使这里阻止了由于 App 的 render 导致的渲染，TestUpdate 还是会更新，
    // 因为context变化引起的render不会受 shouldComponentUpdate 影响
    return true;
  }

  render() {
    return <TestUpdate data={this.props.data} />;
  }
}

export default class TestUpdate extends React.Component {
  shouldComponentUpdate() {
    // 如果是由于 context 更新触发了消费组件的渲染，甚至都不会触发消费组件的 
    // shouldComponentUpdate 方法，
    // 如果是由父组件的渲染引起的，则会正常执行这个钩子
    return false;
  }

  render() {
    return (
      <div>
        {this.context}|{this.props.data}
      </div>
    );
  }
}
TestUpdate.contextType = TestUpdateContext;
```

#### Class.contextType

在 class 组件中将 context 对象挂载到组件对象上 this.context。这样的话，就可以在组件的任何生命周期中通过访问 this.context 来得到值。

```jsx
TestUpdate.contextType = TestUpdateContext;
// 如果支持 static 属性，也可以使用
static contextType = TestUpdateContext;

render() {
  let value = this.context;
}
```

#### Context.Consumer

在 function 组件中订阅 context

```jsx
export default (props) => {
  return (
    <TestUpdateContext.Consumer>
      {(testUpdate) => (
        <div>
          {testUpdate}
        </div>
      )}
    </TestUpdateContext.Consumer>
  );
};

```

#### Context.displayName

在 React DevTools 中显示人能看懂的名字。



### 订阅多个 Context

想要在一个组件中订阅多个不同的 context，只能使用这种方式。尝试合同经常同时出现的多个 context。

```jsx
<TestUpdateContext.Consumer>
  {(testUpdate) => (
    <MultipleContext.Consumer>
      {(multi) => (
        <div>
          {testUpdate} | {multi}
        </div>
      )}
    </MultipleContext.Consumer>
  )}
</TestUpdateContext.Consumer>
```



### 父组件刷新导致 Provider 重新渲染的问题

因为 React 使用 `Object.is` 来判断值是否有改变，所以下面这种传值的方式可能导致不必要的刷新

```jsx
<MyContext.Provider value={{something: 'something'}}>
  <Toolbar />
</MyContext.Provider>
```

每一次渲染都会传入一个全新的`{ something: 'something' }`，为了防止这种情况的方式，可以把值保存在 state 中。



## Error Boundries

Error Boundries （错误边界）是一个 React class 组件，**用来捕获子组件树中的错误**，并且可以渲染出备用的 UI。需要注意的是有些情况下的错误是无法被捕获的：

- 事件处理函数中的错误
- 异步代码错误
- 服务端渲染
- 函数边界本身发生的错误

如果一个 class 组件定义了[`static getDerivedStateFromError()`](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromerror) 和 [`componentDidCatch()`](https://zh-hans.reactjs.org/docs/react-component.html#componentdidcatch) 中的任意一个方法，这个组件就会被认为是一个错误边界组件。

- static getDerivedStateFromError() 用来渲染备用的 UI；

- componentDidCatch() 用来打印错误信息 

  错误信息包括 JavaScript 栈和 React 组件栈。

  - 如果是自定义配置脚手架，可以使用插件 babel-plugin-transform-react-jsx-source  在日志中显示代码行号；
  - 对于组件名称，在 JavaScript 代码压缩之后会变得很难看，可以添加一个 function.name-polyfill ，或者添加 displayName 属性。



## Refs 转发

通常只有在开发组件库时需要用到 Refs 转发，当然如果遇到需要在父组件中访问子组件 DOM 的时候也可以使用。

### 获取组件内部的 DOM

定义一个 FancyButton 组件，在使用这个组件的时候通过像组件内部转发 ref ，获取到内部原生 dom 的引用，从而控制 dom 的行为。

1. 创建 ref 对象，

2. 通过 ref 属性，把这个对象传递到 FancyButton 组件内，

3. 使用 React.forwardRef() 来接受上一步传递的参数，并创建一个 FancyButton 组件，

4. 将 ref 参数向下转发到原生的 button 上面，还是使用 ref 属性，

5. 当 button 渲染完成，ref ，ref.current 就执行了这个 button

   ```jsx
   export default (props) => {
     // 1
     const ref = React.createRef();
   
     setTimeout(() => {
       if (ref && ref.current) {
         // 5
         ref.current.style.color = 'red';
       }
     }, 5000);
   
     // 2
     return (
       <div>
         <p>5 秒后字体颜色变成红色</p>
         <FancyButton ref={ref}>Click Me</FancyButton>
       </div>
     );
   };
   
   // 3
   export default React.forwardRef((props, refInParent) => {
     // 4
     return <button ref={refInParent}>{props.children}</button>;
   });
   ```

> 注意
>
> 第二个参数 `ref` 只在使用 `React.forwardRef` 定义组件时存在。常规函数和 class 组件不接收 `ref` 参数，且 props 中也不存在 `ref`。
>
> Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。



### 在高阶组件中使用

我们一般使用高阶组件来包裹业务组件，在使用组件是实际上使用的是最外层组件。如果我们想要获取内部组件的ref，我们直接把 ref 挂载到高阶组件上是不行的，因为 ref 不会被高阶组件传递到业务组件上。所以我们需要使用React.forwardRef() 来实现这样的需求。

```jsx
// FancyButton
// 先创建一个可以向下转发的 FancyButton
// 这一步是将 ref 从 FancyButton 转发到 button
const FancyButton = React.forwardRef((props, refInParent) => {
  return <button ref={refInParent}>{props.children}</button>;
});
// 使用高阶组件包裹
export default logProps(FancyButton);


// logProps
export default (Componet) => {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      // 将 ref 从 LogProps 转发到 FancyButton
      return <Componet ref={forwardedRef} {...rest}></Componet>;
    }
  }
  // 如果不使用转发， ref 无法传递给 forwardedRef
  // return LogProps;

  // 这一步是将 ref 从最外层转发到 LogProps
  return React.forwardRef((props, ref) => {
    return <LogProps forwardedRef={ref} {...props}></LogProps>;
  });
};
```



