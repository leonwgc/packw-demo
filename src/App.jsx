import React, { useReducer } from 'react';
import { Route, Switch, BrowserRouter, StaticRouter } from 'react-router-dom';
import routes from './Routes';
import './App.less';
import { useAppData } from 'simple-redux-store';
import { ThemeProvider } from 'react-uni-comps';

const initialState = { name: '', age: undefined };

const init = (payload) => {
  return { ...initialState, ...payload };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      return { ...state, ...action.payload };
    }
    case 'reset': {
      return { ...initialState, ...action.payload };
    }
  }
};

const App = ({ location, context }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const app = useAppData();
  const Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;

  return (
    <div>
      <ThemeProvider color="#005cff">
        <Router location={location} context={context}>
          <Switch>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={() => {
                  return <route.component dispatch={dispatch} state={state} />;
                }}
              />
            ))}
            <Route render={() => <div>page not found</div>} />
          </Switch>
        </Router>
        <div style={{ color: 'red', fontSize: 30 }}>{app.env} env</div>
      </ThemeProvider>
    </div>
  );
};

export default App;
