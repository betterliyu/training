import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

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
        resolve(module)
      })
    }, 5000);
  })
});

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={() => <div>Static route</div>} />
            <Route path="/lazy" component={LazyComponent} />
          </Switch>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
