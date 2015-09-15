/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

// var routes = require('../../components/routes');
import routes from '../../components/admin/routes'


module.exports = {
  home: function(req, res) {
    renderTo(routes, false, res, '/', {title:'home'}, {});
  },
  admin: function(req, res) {
    var state = {identities: Object.keys(sails.models)};
    renderTo(routes, req.isSocket, res, '/', {title:'home'}, state);
  },
  new: function(req, res) {
    getFormDefinition( req.param('identity') )
    .then( result => {
      var state = {
        identity: req.param('identity'),
        identities: Object.keys(sails.models),
        formItem: result
      };
      renderTo(routes, req.isSocket, res, '/admin/'+req.param('identity')+'/new', {title:'admin'}, state);
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
        renderTo(routes, req.isSocket, res, '/admin/'+req.param('identity')+'/'+req.param('id'), {title:'admin'}, state);
      });
    });
  },
  list: function(req, res) {
    sails.models[req.param('identity')].find()
    .then( items => {
      getFormDefinition( req.param('identity') )
      .then( result => {
        var state = {
          identity: req.param('identity'),
          identities: Object.keys(sails.models),
          formItem: result,
          items: items
        };
        renderTo(routes, req.isSocket, res, '/admin/'+req.param('identity'), {title:'admin'}, state);
      });
    });
  }
};

