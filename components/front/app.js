import React from 'react';
import Router, {HistoryLocation} from 'react-router';

Router.run(require('./routes'), HistoryLocation, Root => {
  React.render(<Root {...window.__ReactInitState__}/>, document.body);
  delete window.__ReactInitState__;
});
