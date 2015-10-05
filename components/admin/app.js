import React from 'react';
import Router, {HistoryLocation} from 'react-router';
import {Routes} from 'auto-admin'
import Layout from './layout';
import * as modelsForm from './forms'

Router.run(Routes, HistoryLocation, Root => {
  React.render(<Root {...window.__ReactInitState__} layout={Layout} models={modelsForm} />, document.body);
  delete window.__ReactInitState__;
});
