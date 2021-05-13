import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import ForumList from './pages/ForumList/ForumList';
import ForumDetail from './pages/ForumList/ForumDetail';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/forum" component={ForumList} />
        <Route exact path="/forum/:id" component={ForumDetail} />
      </Switch>
    </Router>
  );
}

export default Routes;
