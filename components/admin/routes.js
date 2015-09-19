"use strict";

import React from 'react'
import {RouteHandler, Route} from 'react-router'
import {Home, List, Create, Update} from './pages/admin'

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="admin" path="/admin" handler={Home} />
    <Route name="admin-list" path="/admin/:identity" handler={List} />
    <Route name="admin-new" path="/admin/:identity/new" handler={Create} />
    <Route name="admin-id" path="/admin/:identity/:id" handler={Update} />
  </Route>
);
