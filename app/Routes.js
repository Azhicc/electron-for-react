import React from 'react';
import { Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';

export default () => (
  <App>
    <Route component={App}>
      <Route path={routes.COUNTER} component={HomePage}/>
    </Route>
  </App>
);
