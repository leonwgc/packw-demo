import React, { Suspense } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import routes from './Routes';
import './App.less';

// const Router = typeof window === 'undefined' ? StaticRouter : HashRouter;

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          <Route render={() => <div>page not found</div>} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
