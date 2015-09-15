/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var routes = require('../../components/routes');


module.exports = {
  home: function(req, res) {
    // def(sails.models.user.definition);
      var state = {};
      renderTo(routes, false, res, '/', {title:'home'}, state);
  },
  admin: function(req, res) {
    var state = {identities: Object.keys(sails.models)};
    renderTo(routes, req.isSocket, res, '/', {title:'home'}, state);
  },
  new: function(req, res) {
    var state = {
      identity: req.param('identity'),
      identities: Object.keys(sails.models),
      formItem: def(req.param('identity'))
    };
    renderTo(routes, req.isSocket, res, '/admin/'+req.param('identity')+'/new', {title:'admin'}, state);
  },
  update: function(req, res) {
    sails.models[req.param('identity')].findOne(req.param('id'))
      .then(function(item){
        var state = {
          formItem: def(req.param('identity')),
          identity: req.param('identity'),
          identities: Object.keys(sails.models),
          item: item
        };
        renderTo(routes, req.isSocket, res, '/admin/'+req.param('identity')+'/new', {title:'admin'}, state);
    });
  },
  list: function(req, res) {
    sails.models[req.param('identity')].find()
      .then(function(items){
        var state = {
          formItem: def(req.param('identity')),
          identity: req.param('identity'),
          identities: Object.keys(sails.models),
          items: items
        };
        renderTo(routes, req.isSocket, res, '/admin/'+req.param('identity'), {title:'admin'}, state);
      });
  }
};

