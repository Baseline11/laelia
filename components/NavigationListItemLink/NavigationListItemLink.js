'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavigationListItemLink(_ref) {
  var text = _ref.text,
      isSelected = _ref.isSelected,
      isNested = _ref.isNested,
      href = _ref.href,
      classes = _ref.classes,
      children = _ref.children;

  return _react2.default.createElement(
    _List.ListItem,
    {
      button: true,
      component: 'a',
      href: href,
      className: (0, _classnames2.default)(isNested && classes.nested, isSelected && classes.selected)
    },
    children,
    _react2.default.createElement(_List.ListItemText, {
      primary: text,
      classes: { primary: (0, _classnames2.default)(classes.navItem, isSelected && classes.navItemSelected) }
    })
  );
}

NavigationListItemLink.propTypes = {
  text: _propTypes2.default.string.isRequired,
  isNested: _propTypes2.default.bool,
  isSelected: _propTypes2.default.bool,
  href: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(_styles3.default, { withTheme: true })(NavigationListItemLink);