import React from 'react';
import Router, {HistoryLocation} from 'react-router';
import Layout from './layout';
import * as modelsForm from './forms'

Router.run(require('./routes'), HistoryLocation, Root => {
  React.render(<Root {...window.__ReactInitState__} layout={Layout} models={modelsForm} />, document.body);
  delete window.__ReactInitState__;
});
