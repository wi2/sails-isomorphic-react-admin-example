(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _autoAdmin = require('auto-admin');

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _forms = require('./forms');

var modelsForm = _interopRequireWildcard(_forms);

_reactRouter2['default'].run((0, _autoAdmin.Routes)(), _reactRouter.HistoryLocation, function (Root) {
  _react2['default'].render(_react2['default'].createElement(Root, _extends({}, window.__ReactInitState__, { layout: _layout2['default'], models: modelsForm })), document.body);
  delete window.__ReactInitState__;
});

},{"./forms":2,"./layout":3,"auto-admin":"auto-admin","react":"react","react-router":"react-router"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _newformsBootstrap = require('newforms-bootstrap');

var comment = _react2['default'].createElement(
  _newformsBootstrap.Container,
  { autoColumns: 'md' },
  _react2['default'].createElement(
    'h1',
    null,
    'special Commentaire'
  ),
  _react2['default'].createElement('hr', null),
  _react2['default'].createElement(
    'p',
    { className: 'text-right' },
    _react2['default'].createElement(
      'button',
      { className: 'btn btn-default' },
      'Save'
    )
  ),
  _react2['default'].createElement(
    _newformsBootstrap.Row,
    null,
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'name', md: '8' }),
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'post' })
  ),
  _react2['default'].createElement(
    _newformsBootstrap.Row,
    null,
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'message' })
  )
);

exports.comment = comment;
var post = _react2['default'].createElement(
  _newformsBootstrap.Container,
  { autoColumns: 'md' },
  _react2['default'].createElement(
    'h1',
    null,
    'special Article'
  ),
  _react2['default'].createElement('hr', null),
  _react2['default'].createElement(
    'p',
    { className: 'text-right' },
    _react2['default'].createElement(
      'button',
      { className: 'btn btn-default' },
      'Save'
    )
  ),
  _react2['default'].createElement(
    _newformsBootstrap.Row,
    null,
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'title', md: '4' }),
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'content' })
  )
);

exports.post = post;
var image = _react2['default'].createElement(
  _newformsBootstrap.Container,
  { autoColumns: 'md' },
  _react2['default'].createElement(
    'h1',
    null,
    'special Image'
  ),
  _react2['default'].createElement('hr', null),
  _react2['default'].createElement(
    'p',
    { className: 'text-right' },
    _react2['default'].createElement(
      'button',
      { className: 'btn btn-default' },
      'Save'
    )
  ),
  _react2['default'].createElement(
    _newformsBootstrap.Row,
    null,
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'title' })
  ),
  _react2['default'].createElement(
    _newformsBootstrap.Row,
    null,
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'small', md: '4' }),
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'medium', md: '4' }),
    _react2['default'].createElement(_newformsBootstrap.Field, { name: 'big' })
  )
);
exports.image = image;

},{"newforms-bootstrap":"newforms-bootstrap","react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_nav2['default'], this.props),
        this.props.children
      );
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];

},{"./nav":4,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      var identities = this.props.identities;
      return _react2['default'].createElement(
        'nav',
        { className: 'navbar navbar-default navbar-fixed-top' },
        _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/' },
                'Accueil'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: 'home' },
                'Administration'
              )
            ),
            identities && identities.map(function (identity) {
              return _react2['default'].createElement(
                'li',
                { className: 'dropdown', key: identity },
                _react2['default'].createElement(
                  'a',
                  { href: '#', className: 'dropdown-toggle',
                    'data-toggle': 'dropdown', role: 'button',
                    'aria-haspopup': 'true', 'aria-expanded': 'false' },
                  identity,
                  _react2['default'].createElement('span', { className: 'caret' })
                ),
                _react2['default'].createElement(
                  'ul',
                  { className: 'dropdown-menu' },
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      _reactRouter.Link,
                      { to: 'list', params: { identity: identity } },
                      'List'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      _reactRouter.Link,
                      { to: 'create', params: { identity: identity } },
                      'Create'
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}]},{},[1,2,3,4]);
