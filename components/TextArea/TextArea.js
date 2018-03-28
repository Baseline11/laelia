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

function TextArea(_ref) {
  var handleOnChange = _ref.handleOnChange,
      textAreaStyleOverride = _ref.textAreaStyleOverride,
      name = _ref.name,
      disabled = _ref.disabled,
      required = _ref.required,
      id = _ref.id,
      placeholder = _ref.placeholder,
      maxLength = _ref.maxLength,
      defaultValue = _ref.defaultValue;

  return _react2.default.createElement('textarea', {
    id: id,
    name: name,
    placeholder: placeholder,
    required: required,
    disabled: disabled,
    onChange: handleOnChange,
    maxLength: maxLength,
    defaultValue: defaultValue,
    style: [_styles2.default.textArea, disabled && _styles2.default.texAreaDisabled, textAreaStyleOverride]
  });
}

TextArea.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  defaultValue: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  textAreaStyleOverride: _propTypes2.default.object,
  handleOnChange: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(TextArea);