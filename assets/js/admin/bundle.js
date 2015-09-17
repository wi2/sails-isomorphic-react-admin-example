(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    Router = require('react-router');

Router.run(require('./routes.js'), Router.HistoryLocation, function (Root) {
  React.render(React.createElement(Root, window.__ReactInitState__), document.body);
  delete window.__ReactInitState__;
});

},{"./routes.js":8,"react":"react","react-router":"react-router"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _partialsNavJs = require('./partials/nav.js');

var Layout = (function () {
  function Layout() {
    _classCallCheck(this, Layout);
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_partialsNavJs.Nav, this.props),
        this.props.children
      );
    }
  }]);

  return Layout;
})();

exports.Layout = Layout;

},{"./partials/nav.js":7,"react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layoutJs = require('../layout.js');

var _partialsAdminFormJs = require('../partials/admin-form.js');

var _partialsAdminFormJs2 = _interopRequireDefault(_partialsAdminFormJs);

var _partialsAdminListJs = require('../partials/admin-list.js');

var _partialsAdminListJs2 = _interopRequireDefault(_partialsAdminListJs);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getHome();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props) {
      this.getHome();
    }
  }, {
    key: 'getHome',
    value: function getHome() {
      var _this = this;

      if (typeof io !== "undefined") io.socket.get("/admin", (function (res) {
        _this.setState(res);
      }).bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _layoutJs.Layout,
        _extends({}, this.props, this.state),
        _react2['default'].createElement(
          'h1',
          null,
          'ADMIN: HomePage'
        )
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports.Home = Home;

var ListItem = (function (_React$Component2) {
  _inherits(ListItem, _React$Component2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    _get(Object.getPrototypeOf(ListItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.item) this.getItem(this.props.identity || this.props.params.identity);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props) {
      if (this.props.params.identity !== props.params.identity) this.getItem(props.params.identity);
    }
  }, {
    key: 'getItem',
    value: function getItem(identity) {
      var _this2 = this;

      this.loading = true;
      var url = this.props.params.id ? "/" + this.props.params.id : "/new";
      if (typeof io !== "undefined") {
        io.socket.get("/admin/" + identity + url, (function (res) {
          _this2.loading = false;
          _this2.setState(res);
        }).bind(this));
      }
    }
  }, {
    key: 'onSave',
    value: function onSave(data) {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.formItem || this.state && this.state.formItem) var MyAdminItem = _react2['default'].createElement(_partialsAdminFormJs2['default'], _extends({}, this.props, this.state, { onSave: this.onSave.bind(this) }));
      return _react2['default'].createElement(
        _layoutJs.Layout,
        _extends({}, this.props, this.state),
        MyAdminItem || ''
      );
    }
  }]);

  return ListItem;
})(_react2['default'].Component);

var ListItemUpdate = (function (_ListItem) {
  _inherits(ListItemUpdate, _ListItem);

  function ListItemUpdate() {
    _classCallCheck(this, ListItemUpdate);

    _get(Object.getPrototypeOf(ListItemUpdate.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListItemUpdate, [{
    key: 'onSave',
    value: function onSave(data) {
      if (typeof io !== "undefined") {
        var identity = this.props.identity || this.props.params.identity;
        io.socket.put("/" + identity + "/" + this.props.params.id, data, (function (res) {}).bind(this));
      }
    }
  }]);

  return ListItemUpdate;
})(ListItem);

exports.ListItemUpdate = ListItemUpdate;

var ListItemNew = (function (_ListItem2) {
  _inherits(ListItemNew, _ListItem2);

  function ListItemNew() {
    _classCallCheck(this, ListItemNew);

    _get(Object.getPrototypeOf(ListItemNew.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListItemNew, [{
    key: 'onSave',
    value: function onSave(data) {
      if (typeof io !== "undefined") {
        var identity = this.props.identity || this.props.params.identity;
        io.socket.post("/" + identity, data, (function (res) {}).bind(this));
      }
    }
  }]);

  return ListItemNew;
})(ListItem);

exports.ListItemNew = ListItemNew;

var List = (function (_React$Component3) {
  _inherits(List, _React$Component3);

  function List() {
    _classCallCheck(this, List);

    _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(List, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.item) {
        this.getItems(this.props.identity || this.props.params.identity);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props) {
      if (this.props.params.identity !== props.params.identity) {
        this.getItems(props.params.identity);
      }
    }
  }, {
    key: 'getItems',
    value: function getItems(identity, params) {
      var _this3 = this;

      if (typeof io !== "undefined") {
        io.socket.get("/admin/" + identity, params || {}, (function (res) {
          _this3.setState(res);
        }).bind(this));
      }
    }
  }, {
    key: 'filterBy',
    value: function filterBy(lbl, val) {
      var filter = {};
      filter[lbl] = { contains: val };
      this.getItems(this.props.identity || this.props.params.identity, val ? { contain: filter } : null);
    }
  }, {
    key: 'sortBy',
    value: function sortBy(lbl) {
      if (!this.sort) {
        this.sort = [lbl, 'DESC'];
      } else {
        if (this.sort[0] === lbl) this.sort[1] = this.sort[1] === 'ASC' ? 'DESC' : 'ASC';else {
          this.sort[0] = lbl;
          // this.sort = [lbl, 'ASC'];
        }
      }

      this.getItems(this.props.identity || this.props.params.identity, { sort: this.sort.join(" ") });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _layoutJs.Layout,
        _extends({}, this.props, this.state),
        _react2['default'].createElement(_partialsAdminListJs2['default'], _extends({ items: [] }, this.props.params, this.props, this.state, {
          sortBy: this.sortBy.bind(this), filterBy: this.filterBy.bind(this) }))
      );
    }
  }]);

  return List;
})(_react2['default'].Component);

exports.List = List;

},{"../layout.js":2,"../partials/admin-form.js":4,"../partials/admin-list.js":5,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _newforms = require('newforms');

var _newformsBootstrap = require('newforms-bootstrap');

var _newformsBootstrap2 = _interopRequireDefault(_newformsBootstrap);

var _adminModelsJs = require('./admin-models.js');

var models = _interopRequireWildcard(_adminModelsJs);

var _default = (function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.makeForm(this.props.formItem);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.mForm) delete this.mForm;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(props) {
      if (this.props.formItem != props.formItem) this.makeForm(props.formItem);
    }
  }, {
    key: 'makeForm',
    value: function makeForm(formItem) {
      var mobj = {};
      if (formItem) {
        for (var i = 0, len = formItem.length; i < len; i++) {
          var item = formItem[i];
          if (['id', 'createdAt', 'updatedAt'].indexOf(item.label) === -1) {
            var params = { required: item.required };
            if (item.defaultsTo) params.initial = item.defaultsTo;
            switch (item.input) {
              case 'email':
                mobj[item.label] = (0, _newforms.EmailField)(params);break;
              case 'string':
                mobj[item.label] = (0, _newforms.CharField)(params);break;
              case 'text':
                params.widget = _newforms.Textarea;
                mobj[item.label] = (0, _newforms.CharField)(params);break;
              case 'integer':
                mobj[item.label] = (0, _newforms.IntegerField)(params);break;
              case 'float':
                mobj[item.label] = (0, _newforms.FloatField)(params);break;
              case 'date':
                mobj[item.label] = (0, _newforms.DateField)(params);break;
              case 'datetime':
                mobj[item.label] = (0, _newforms.DateTimeField)(params);break;
              case 'boolean':
                mobj[item.label] = (0, _newforms.BooleanField)(params);break;
              case 'choice':
                params.choices = item['in'];
                mobj[item.label] = (0, _newforms.ChoiceField)(params);break;
            }
          }
        }
      }
      var mForm = _newforms.Form.extend(mobj);
      this.mForm = new mForm({ initial: this.props.item || {} });
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit(e) {
      e.preventDefault();
      var form = this.refs.mForm.getForm();
      if (form.validate()) this.props.onSave(form.cleanedData);else {
        console.log(form.errors().errors);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.mForm) return _react2['default'].createElement('form', null);

      if (models[this.props.identity]) return _react2['default'].createElement(
        'form',
        { onSubmit: this._onSubmit.bind(this), ref: 'form' },
        _react2['default'].createElement(
          _newforms.RenderForm,
          { form: this.mForm, ref: 'mForm' },
          models[this.props.identity]
        )
      );

      return _react2['default'].createElement(
        'form',
        { onSubmit: this._onSubmit.bind(this) },
        _react2['default'].createElement(
          'h1',
          null,
          this.props.identity
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
          _newforms.RenderForm,
          { form: this.mForm, ref: 'mForm' },
          _react2['default'].createElement(_newformsBootstrap2['default'], null)
        )
      );
    }
  }]);

  return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"./admin-models.js":6,"newforms":"newforms","newforms-bootstrap":"newforms-bootstrap","react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _default = (function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(_default, [{
    key: 'sortBy',
    value: function sortBy(lbl, e) {
      e.preventDefault();
      this.props.sortBy(lbl);
    }
  }, {
    key: 'filterBy',
    value: function filterBy(lbl, e) {
      e.preventDefault();
      this.props.filterBy(lbl, e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var fItem = this.props.formItem || [{ label: 'id' }];
      return _react2['default'].createElement(
        'div',
        { className: 'table-responsive' },
        _react2['default'].createElement(
          'h1',
          null,
          this.props.identity,
          ' List'
        ),
        _react2['default'].createElement(
          'table',
          { className: 'table' },
          _react2['default'].createElement(
            'thead',
            null,
            _react2['default'].createElement(
              'tr',
              null,
              fItem.map(function (fItem) {
                return _react2['default'].createElement(
                  'th',
                  { key: fItem.label, onClick: _this.sortBy.bind(_this, fItem.label) },
                  fItem.label
                );
              })
            ),
            _react2['default'].createElement(
              'tr',
              null,
              fItem.map(function (fItem) {
                return _react2['default'].createElement(
                  'th',
                  { key: fItem.label },
                  _react2['default'].createElement('input', { type: 'text', name: fItem.label, onChange: _this.filterBy.bind(_this, fItem.label) })
                );
              })
            )
          ),
          _react2['default'].createElement(
            'tbody',
            null,
            this.props.items && this.props.items.map(function (item) {
              return _react2['default'].createElement(
                'tr',
                { key: item.id },
                fItem.map(function (it) {
                  return _react2['default'].createElement(
                    'td',
                    { key: it.label },
                    _react2['default'].createElement(
                      _reactRouter.Link,
                      { to: 'admin-id', params: { identity: _this.props.identity, id: item.id } },
                      item[it.label] || '-'
                    )
                  );
                })
              );
            })
          )
        )
      );
    }
  }]);

  return _default;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
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
    'Commentaire'
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
    'Article'
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

},{"newforms-bootstrap":"newforms-bootstrap","react":"react"}],7:[function(require,module,exports){
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

var Nav = (function () {
  function Nav() {
    _classCallCheck(this, Nav);
  }

  _createClass(Nav, [{
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
                'Home'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: 'admin' },
                'Admin'
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
                      { to: 'admin-list', params: { identity: identity } },
                      'List'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      _reactRouter.Link,
                      { to: 'admin-new', params: { identity: identity } },
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

  return Nav;
})();

exports.Nav = Nav;

},{"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _pagesAdmin = require('./pages/admin');

var admin = _interopRequireWildcard(_pagesAdmin);

module.exports = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _reactRouter.RouteHandler },
  _react2['default'].createElement(_reactRouter.Route, { name: 'admin', path: '/admin', handler: admin.Home }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'admin-list', path: '/admin/:identity', handler: admin.List }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'admin-new', path: '/admin/:identity/new', handler: admin.ListItemNew }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'admin-id', path: '/admin/:identity/:id', handler: admin.ListItemUpdate })
);

},{"./pages/admin":3,"react":"react","react-router":"react-router"}]},{},[1,2,3,4,5,6,7,8]);
