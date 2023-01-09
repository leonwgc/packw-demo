import React from 'react';
import { Route, Switch, BrowserRouter, StaticRouter } from 'react-router-dom';
import routes from './Routes';
import './App.less';
import { useAppData } from 'simple-redux-store';

const App = ({ location, context }) => {
  const app = useAppData();
  const Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;
  return (
    <div>
      <Router location={location} context={context}>
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
      <div style={{ color: 'red', fontSize: 30 }}>{app.name}</div>
    </div>
  );
};

export default App;
