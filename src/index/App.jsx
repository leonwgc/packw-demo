import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  StaticRouter,
  HashRouter,
} from 'react-router-dom';
import routes from './RouteConfig';
import './App.less';

const Routes = ({ location }) => {
  const Router = typeof window === 'undefined' ? StaticRouter : HashRouter;
  return (
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
  );
};

export default Routes;
