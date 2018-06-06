'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu = require('@material-ui/core/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _MoreHoriz = require('@material-ui/icons/MoreHoriz');

var _MoreHoriz2 = _interopRequireDefault(_MoreHoriz);

var _styles = require('@material-ui/core/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionMenu = function (_Component) {
  _inherits(ActionMenu, _Component);

  function ActionMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionMenu.__proto__ || Object.getPrototypeOf(ActionMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null
    }, _this.handleClick = function (event) {
      _this.setState({ anchorEl: event.currentTarget || null });
    }, _this.handleClose = function () {
      _this.setState({ anchorEl: null });
    }, _this.renderLinkItem = function (item) {
      return _react2.default.createElement(
        _MenuItem2.default,
        {
          key: item.text,
          className: (0, _classnames2.default)(_this.props.classes.actionItem)
        },
        _react2.default.createElement(
          'a',
          { style: _styles3.default.actionLinkItem, href: item.value },
          item.text
        )
      );
    }, _this.renderActionItem = function (item) {
      return _react2.default.createElement(
        _MenuItem2.default,
        {
          key: item.text,
          onClick: function onClick() {
            return _this.handleClickCombination(item.value);
          },
          className: (0, _classnames2.default)(_this.props.classes.actionItem)
        },
        item.text
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionMenu, [{
    key: 'handleClickCombination',
    value: function handleClickCombination(action) {
      action();
      this.handleClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var anchorEl = this.state.anchorEl;
      var actions = this.props.actions;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _IconButton2.default,
          {
            'aria-owns': anchorEl ? 'ActionMenu' : null,
            'aria-label': 'More',
            'aria-haspopup': 'true',
            onClick: this.handleClick
          },
          _react2.default.createElement(_MoreHoriz2.default, null)
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            id: 'ActionMenu',
            anchorEl: anchorEl,
            open: Boolean(anchorEl),
            onClose: this.handleClose,
            MenuListProps: { className: (0, _classnames2.default)(this.props.classes.actionList) }
          },
          actions.map(function (item) {
            return item.type === 'url' ? _this2.renderLinkItem(item) : _this2.renderActionItem(item);
          })
        )
      );
    }
  }]);

  return ActionMenu;
}(_react.Component);

ActionMenu.propTypes = {
  actions: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles3.default)(ActionMenu);