/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import routes from '../../components/admin/routes'

module.exports = {
  home: function(req, res) {
    var state = {identities: Object.keys(sails.models)};
    renderTo(routes, req.wantsJSON, res, '/', {title:'Administration - Home'}, state);
  },
  new: function(req, res) {
    getFormDefinition( req.param('identity') )
    .then( result => {
      var state = {
        identity: req.param('identity'),
        identities: Object.keys(sails.models),
        formItem: result
      };
      renderTo(routes, req.wantsJSON, res, '/admin/'+req.param('identity')+'/new', {title:'Administration - create record'}, state);
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
        renderTo(routes, req.wantsJSON, res, '/admin/'+req.param('identity')+'/'+req.param('id'), {title:'Administration - update record'}, state);
      });
    });
  },
  list: function(req, res) {
    var query = sails.models[req.param('identity')].find(req.param('contain')||{})
    if (req.param('sort'))
      query = query.sort(req.param('sort'))
    query.then( items => {
      getFormDefinition( req.param('identity') )
      .then( result => {
        var state = {
          identity: req.param('identity'),
          identities: Object.keys(sails.models),
          formItem: result,
          items: items
        };
        renderTo(routes, req.wantsJSON, res, '/admin/'+req.param('identity'), {title:'Administration - List'}, state);
      });
    });
  }
};

