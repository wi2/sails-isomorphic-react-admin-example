/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

import routes from '../../components/front/routes'

module.exports = {
  home: function(req, res) {
    renderTo(routes, false, res, '/', {title:'Homepage'}, {});
  }
};

