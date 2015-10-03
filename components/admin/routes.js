"use strict";

import React from 'react'
import {RouteHandler, Route} from 'react-router'
import {Home, List, Create, Update} from 'auto-admin'
// import {Home, List, Create, Update} from './pages/admin'

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="home" path="/admin" handler={Home} />
    <Route name="list" path="/admin/:identity" handler={List} />
    <Route name="create" path="/admin/:identity/new" handler={Create} />
    <Route name="update" path="/admin/:identity/:id" handler={Update} />
  </Route>
);
