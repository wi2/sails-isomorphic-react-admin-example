"use strict";

import React from 'react'
import {RouteHandler, Route} from 'react-router'
import * as admin from './pages/admin'

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="admin" path="/admin" handler={admin.Home} />
    <Route name="admin-list" path="/admin/:identity" handler={admin.List} />
    <Route name="admin-new" path="/admin/:identity/new" handler={admin.ListItemNew} />
    <Route name="admin-id" path="/admin/:identity/:id" handler={admin.ListItemUpdate} />
  </Route>
);
