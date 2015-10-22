/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import {Routes} from 'auto-admin'

module.exports = {
  home: function(req, res) {
    var state = {identities: Object.keys(sails.models)};
    renderTo(Routes(), req.wantsJSON, res, '/', {title:'Administration - Home'}, state);
  },
  new: function(req, res) {
    getFormDefinition( req.param('identity') )
    .then( result => {
      var state = {
        identity: req.param('identity'),
        identities: Object.keys(sails.models),
        formItem: result
      };
      renderTo(Routes(), req.wantsJSON, res, '/admin/'+req.param('identity')+'/new', {title:'Administration - create record'}, state);
    })
  },
  update: function(req, res) {
    sails.models[req.param('identity')].findOne(req.param('id'))
    .then( item => {
      getFormDefinition( req.param('identity') )
      .then( result => {
        var state = {
          identity: req.param('identity'),
          identities: Object.keys(sails.models),
          formItem: result,
          item: item
        };
        renderTo(Routes(), req.wantsJSON, res, '/admin/'+req.param('identity')+'/'+req.param('id'), {title:'Administration - update record'}, state);
      });
    });
  },
  list: function(req, res) {
    var items, current, total, limit;
    var query = sails.models[req.param('identity')]

    query
      .count(req.param('contain')||{})
      .then( count => {
        limit = req.param('limit')||3;
        let skip = req.param('skip')||0;
        total = count;
        current = skip ? Math.ceil(total/skip) : 1;
        return query
          .find(req.param('contain')||{})
          .limit(limit)
          .skip(skip)
          .sort(req.param('sort')||"id ASC");
      })
      .then( result => {
        items = result;
        return getFormDefinition( req.param('identity') )
      })
      .then( result => {
        var state = {
          identity: req.param('identity'),
          identities: Object.keys(sails.models),
          formItem: result,
          items: items,
          current: current,
          total: total,
          limit: limit
        };
        renderTo(Routes(), req.wantsJSON, res, '/admin/'+req.param('identity'), {title:'Administration - List'}, state);
      });
  }
};

