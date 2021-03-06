'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkToUrl(_ref) {
  var text = _ref.text,
      url = _ref.url,
      secondaryStyle = _ref.secondaryStyle,
      styleOverride = _ref.styleOverride,
      children = _ref.children;

  var content = !children ? text : children;

  return _react2.default.createElement(
    'a',
    { href: url, style: [_styles2.default.baseStyle, secondaryStyle && _styles2.default.secondaryStyle, styleOverride] },
    content
  );
}

LinkToUrl.propTypes = {
  text: _propTypes2.default.string,
  secondaryStyle: _propTypes2.default.bool,
  styleOverride: _propTypes2.default.object,
  children: _propTypes2.default.element,
  url: _propTypes2.default.string.isRequired
};

exports.default = (0, _radium2.default)(LinkToUrl);