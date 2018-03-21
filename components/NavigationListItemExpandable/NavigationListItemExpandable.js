'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Collapse = require('material-ui/transitions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _List = require('material-ui/List');

var _ExpandMore = require('material-ui-icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _ExpandLess = require('material-ui-icons/ExpandLess');

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationListItemExpandable = function (_Component) {
  _inherits(NavigationListItemExpandable, _Component);

  function NavigationListItemExpandable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavigationListItemExpandable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavigationListItemExpandable.__proto__ || Object.getPrototypeOf(NavigationListItemExpandable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isCollapsed: !_this.props.isSelected
    }, _this.handleClick = function () {
      _this.setState({ isCollapsed: !_this.state.isCollapsed });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavigationListItemExpandable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          mainItemText = _props.mainItemText,
          mainItemIcon = _props.mainItemIcon,
          isSelected = _props.isSelected,
          children = _props.children,
          classes = _props.classes;
      var isCollapsed = this.state.isCollapsed;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _List.ListItem,
          { button: true, onClick: this.handleClick, className: (0, _classnames2.default)(isSelected && classes.selected) },
          mainItemIcon && mainItemIcon,
          _react2.default.createElement(_List.ListItemText, {
            primary: mainItemText,
            classes: { primary: (0, _classnames2.default)(classes.navItem, isSelected && classes.navItemSelected) }
          }),
          !isCollapsed ? _react2.default.createElement(_ExpandLess2.default, { className: classes.collapseIcon }) : _react2.default.createElement(_ExpandMore2.default, { className: classes.collapseIcon })
        ),
        _react2.default.createElement(
          _Collapse2.default,
          { 'in': !isCollapsed, timeout: 'auto', unmountOnExit: true },
          children
        )
      );
    }
  }]);

  return NavigationListItemExpandable;
}(_react.Component);

NavigationListItemExpandable.propTypes = {
  mainItemText: _propTypes2.default.string,
  mainItemIcon: _propTypes2.default.element,
  isSelected: _propTypes2.default.bool,
  children: _propTypes2.default.array,
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles3.default, { withTheme: true })(NavigationListItemExpandable);