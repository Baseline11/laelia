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

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _SvgIcon = require('../SvgIcon');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PasswordInput(_ref) {
  var placeholder = _ref.placeholder,
      handleOnClickIcon = _ref.handleOnClickIcon,
      handleOnChange = _ref.handleOnChange,
      wrapperStyleOverride = _ref.wrapperStyleOverride,
      isHidden = _ref.isHidden,
      iconStyleOverride = _ref.iconStyleOverride,
      inputName = _ref.inputName,
      inputStyleOverride = _ref.inputStyleOverride;

  var inputType = isHidden ? 'password' : 'text';

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.passwordWrapper, wrapperStyleOverride] },
    _react2.default.createElement(_TextInput2.default, {
      placeholder: placeholder,
      inputType: inputType,
      handleOnChange: handleOnChange,
      name: inputName,
      inputStyleOverride: inputStyleOverride
    }),
    _react2.default.createElement(
      'span',
      { key: 'showPassSVG', style: [_styles2.default.showPassSVG, !isHidden && _styles2.default.hideIconSVG, iconStyleOverride], onClick: handleOnClickIcon },
      _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'showPassword' })
    ),
    _react2.default.createElement(
      'span',
      { key: 'hidePassSVG', style: [_styles2.default.hidePassSVG, isHidden && _styles2.default.hideIconSVG, iconStyleOverride], onClick: handleOnClickIcon },
      _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'hidePassword' })
    )
  );
}

PasswordInput.propTypes = {
  placeholder: _propTypes2.default.string,
  inputName: _propTypes2.default.string,
  isHidden: _propTypes2.default.bool,
  handleOnChange: _propTypes2.default.func,
  handleOnClickIcon: _propTypes2.default.func,
  wrapperStyleOverride: _propTypes2.default.object,
  inputStyleOverride: _propTypes2.default.object,
  iconStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(PasswordInput);