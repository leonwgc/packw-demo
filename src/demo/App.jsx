import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Route, Switch, BrowserRouter, StaticRouter } from 'react-router-dom';
import routes from './RouteConfig';
import './App.less';

const Routes = ({ location }) => {
  const Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;
  return (
    <ConfigProvider locale={zhCN}>
      <Router location={location}>
        <Switch>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default Routes;
