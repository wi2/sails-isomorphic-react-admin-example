"use strict";

import React from 'react'
import {RouteHandler, Route} from 'react-router'

module.exports = (
  <Route handler={RouteHandler}>
    <Route name="home" path="/" handler={require('./pages/home.js')} />
    <Route name="admin" path="/admin" handler={require('./pages/admin.js').Home} />
    <Route name="admin-list" path="/admin/:identity" handler={require('./pages/admin.js').List} />
    <Route name="admin-new" path="/admin/:identity/new" handler={require('./pages/admin.js').ListItemNew} />
    <Route name="admin-id" path="/admin/:identity/:id" handler={require('./pages/admin.js').ListItem} />
  </Route>
);
