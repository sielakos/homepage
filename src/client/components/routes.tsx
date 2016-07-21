import * as React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {App} from './app';
import {Posts} from '../modules/posts';
import {Cv} from '../modules/cv';

export function Routes() {
  return (<Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/posts' component={Posts} />
      <Route path='/cv' component={Cv} />
    </Route>
  </Router>);
}