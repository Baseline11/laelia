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

var _PasswordInput = require('../PasswordInput');

var _PasswordInput2 = _interopRequireDefault(_PasswordInput);

var _ListRules = require('../ListRules');

var _ListRules2 = _interopRequireDefault(_ListRules);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PasswordContainer(_ref) {
  var placeholder = _ref.placeholder,
      handleOnClickIcon = _ref.handleOnClickIcon,
      handleOnChange = _ref.handleOnChange,
      wrapperStyleOverride = _ref.wrapperStyleOverride,
      isHidden = _ref.isHidden,
      rules = _ref.rules,
      listRulesStyleOverride = _ref.listRulesStyleOverride,
      rulesValidations = _ref.rulesValidations,
      inputName = _ref.inputName,
      iconStyleOverride = _ref.iconStyleOverride,
      inputStyleOverride = _ref.inputStyleOverride,
      containerStyleOverride = _ref.containerStyleOverride;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.passwordWrapper, containerStyleOverride] },
    _react2.default.createElement(_PasswordInput2.default, {
      isHidden: isHidden,
      placeholder: placeholder,
      wrapperStyleOverride: wrapperStyleOverride,
      handleOnChange: handleOnChange,
      handleOnClickIcon: handleOnClickIcon,
      inputName: inputName,
      iconStyleOverride: iconStyleOverride,
      inputStyleOverride: inputStyleOverride
    }),
    _react2.default.createElement(_ListRules2.default, {
      rules: rules,
      rulesValidations: rulesValidations,
      listRulesStyleOverride: listRulesStyleOverride
    })
  );
}

PasswordContainer.propTypes = {
  placeholder: _propTypes2.default.string,
  inputName: _propTypes2.default.string,
  isHidden: _propTypes2.default.bool,
  rulesValidations: _propTypes2.default.object,
  handleOnChange: _propTypes2.default.func,
  handleOnClickIcon: _propTypes2.default.func,
  containerStyleOverride: _propTypes2.default.object,
  wrapperStyleOverride: _propTypes2.default.object,
  rules: _propTypes2.default.array.isRequired,
  listRulesStyleOverride: _propTypes2.default.object,
  inputStyleOverride: _propTypes2.default.object,
  iconStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(PasswordContainer);