import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './pages/Nav/Nav';
import Login from './pages/Login/Login';
import ForumList from './pages/ForumList/ForumList';
import ForumDetail from './pages/ForumDetail/ForumDetail';

function Routes() {
  const TOKEN = window.localStorage.getItem('TOKEN');
  return (
    <Router>
      {TOKEN && <Nav />}
      <Switch>
        <Route exact path="/" component={Login} />
        {TOKEN && <Route exact path="/forum" component={ForumList} />}
        {TOKEN && <Route exact path="/forum/:id" component={ForumDetail} />}
      </Switch>
    </Router>
  );
}

export default Routes;
