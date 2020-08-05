import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

if (window.bundle) {
  // 这段代码不会执行，所以这个 chunk 不会被加载
  import('./SplitBundleComponent').then((bundle) => {
    console.log('Split bundle loaded');
  });
}

const LazyComponent = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      import('./LazyComponent').then((module) => {
        resolve(module);
      });
    }, 5000);
  });
});

function App() {
  let match = useRouteMatch();

  return (
    <div className="App">
      <p>在组件中使用</p>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>

      <Router>
        <p>
          {/* 嵌套路由的链接要写在第二个 Router 里面， 或者最好只用一个 Router */}
          <Link to={`${match.url}/lazy`}>在路由中使用</Link>
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={match.url} render={() => <div>Static route</div>} />
            <Route path={`${match.url}/lazy`} component={LazyComponent} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
