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
      offSetRulesContainer = _ref.offSetRulesContainer,
      rulesValidations = _ref.rulesValidations;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.passwordWrapper, wrapperStyleOverride] },
    _react2.default.createElement(_PasswordInput2.default, {
      isHidden: isHidden,
      placeholder: placeholder,
      wrapperStyleOverride: wrapperStyleOverride,
      handleOnChange: handleOnChange,
      handleOnClickIcon: handleOnClickIcon
    }),
    _react2.default.createElement(_ListRules2.default, {
      rules: rules,
      rulesValidations: rulesValidations,
      offsetRulesContainer: offSetRulesContainer
    })
  );
}

PasswordContainer.propTypes = {
  placeholder: _propTypes2.default.string,
  isHidden: _propTypes2.default.bool,
  rulesValidations: _propTypes2.default.object,
  handleOnChange: _propTypes2.default.func.isRequired,
  handleOnClickIcon: _propTypes2.default.func,
  wrapperStyleOverride: _propTypes2.default.object,
  rules: _propTypes2.default.array.isRequired,
  offSetRulesContainer: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(PasswordContainer);