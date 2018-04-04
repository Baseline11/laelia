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

function TextInput(_ref) {
  var defaultValue = _ref.defaultValue,
      handleOnChange = _ref.handleOnChange,
      wrapperStyleOverride = _ref.wrapperStyleOverride,
      inputStyleOverride = _ref.inputStyleOverride,
      placeholder = _ref.placeholder,
      inputType = _ref.inputType,
      disabled = _ref.disabled,
      required = _ref.required;

  var inputTypeVal = ['text', 'email', 'tel', 'password'];

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.inputWrapper, wrapperStyleOverride] },
    _react2.default.createElement('input', {
      type: inputTypeVal.includes(inputType) ? inputType : 'text',
      defaultValue: defaultValue,
      placeholder: placeholder,
      onChange: handleOnChange,
      disabled: disabled,
      required: required,
      style: [_styles2.default.inputText, inputStyleOverride, disabled && _styles2.default.texInputDisabled]
    })
  );
}

TextInput.propTypes = {
  defaultValue: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  inputType: _propTypes2.default.string,
  handleOnChange: _propTypes2.default.func,
  wrapperStyleOverride: _propTypes2.default.object,
  inputStyleOverride: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  required: _propTypes2.default.bool
};

exports.default = (0, _radium2.default)(TextInput);