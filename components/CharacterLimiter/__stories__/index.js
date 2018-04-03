'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('@storybook/react');

var _TextArea = require('../../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _CharacterLimiter = require('../CharacterLimiter');

var _CharacterLimiter2 = _interopRequireDefault(_CharacterLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialLimitState = 6;
var limiter = initialLimitState;
var updateState = function updateState(newValue) {
  limiter = newValue.target.value.length < initialLimitState ? initialLimitState - newValue.target.value.length : 0;
};

var TextAreaInstance = function TextAreaInstance(_ref) {
  var changeHandler = _ref.changeHandler,
      limit = _ref.limit;
  return _react2.default.createElement(_TextArea2.default, { handleOnChange: changeHandler, maxLength: limit });
};

TextAreaInstance.propTypes = {
  changeHandler: _propTypes2.default.func.isRequired,
  limit: _propTypes2.default.number.isRequired
};

var WrappedComponent = (0, _CharacterLimiter2.default)(TextAreaInstance, limiter);

(0, _react3.storiesOf)('CharacterLimiter', module).add('Default', function () {
  return _react2.default.createElement(WrappedComponent, { changeHandler: updateState, limit: limiter });
});