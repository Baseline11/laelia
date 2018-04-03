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

var _SvgIcon = require('../SvgIcon');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PopupMessage(_ref) {
  var text = _ref.text,
      action = _ref.action,
      styleOverrideContainer = _ref.styleOverrideContainer,
      styleOverrideIcon = _ref.styleOverrideIcon,
      styleOverrideSVG = _ref.styleOverrideSVG,
      isOpen = _ref.isOpen;

  return _react2.default.createElement(
    'div',
    {
      style: [_styles2.default.baseStyle, isOpen && _styles2.default.baseStyleShow, styleOverrideContainer]
    },
    text,
    _react2.default.createElement(
      'span',
      {
        style: [_styles2.default.closeIcon, styleOverrideIcon],
        key: 'closeIcon',
        onClick: action
      },
      _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'closeButton', fill: styleOverrideSVG, width: 9, height: 9 })
    )
  );
}

PopupMessage.propTypes = {
  text: _propTypes2.default.string.isRequired,
  styleOverrideContainer: _propTypes2.default.object,
  styleOverrideIcon: _propTypes2.default.object,
  styleOverrideSVG: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  children: _propTypes2.default.element,
  action: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(PopupMessage);