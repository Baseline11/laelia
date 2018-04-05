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

function CheckBox(_ref) {
  var handleOnChange = _ref.handleOnChange,
      checkBoxValue = _ref.checkBoxValue,
      checkBoxName = _ref.checkBoxName,
      checkBoxID = _ref.checkBoxID,
      checked = _ref.checked,
      disabled = _ref.disabled,
      containerStyleOverride = _ref.containerStyleOverride,
      checkboxStyleOverride = _ref.checkboxStyleOverride;

  return _react2.default.createElement(
    'div',
    {
      style: [_styles2.default.checkboxContainer, checked && _styles2.default.checkboxContainerChecked, disabled && _styles2.default.checkboxContainerDisabled, containerStyleOverride]
    },
    _react2.default.createElement('input', {
      type: 'checkbox',
      name: checkBoxName,
      value: checkBoxValue,
      id: checkBoxID,
      checked: checked,
      onChange: handleOnChange,
      disabled: disabled,
      style: [_styles2.default.checkboxStyle, disabled && _styles2.default.checkboxStyleDisabled]
    }),
    _react2.default.createElement('span', {
      style: [_styles2.default.spanCheckbox, checked && _styles2.default.spanCheckboxChecked, disabled && _styles2.default.spanCheckboxDisabled, checkboxStyleOverride]
    })
  );
}

CheckBox.propTypes = {
  checkBoxName: _propTypes2.default.string,
  checkBoxID: _propTypes2.default.string,
  checkBoxValue: _propTypes2.default.string,
  handleOnChange: _propTypes2.default.func,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  containerStyleOverride: _propTypes2.default.object,
  checkboxStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(CheckBox);