'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(e) {
  return (0, _addonActions.action)('Input value')(e.target.value);
};

(0, _react3.storiesOf)('TextInput', module).add('Is empty by default', function () {
  return _react2.default.createElement(_index2.default, { handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With a default value', function () {
  return _react2.default.createElement(_index2.default, { defaultValue: 'Default Value!', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('Retrieve input value from onChange', function () {
  return _react2.default.createElement(_index2.default, { handleOnChange: handler });
}).add('With wrapperStyleOverride', function () {
  return _react2.default.createElement(_index2.default, { wrapperStyleOverride: { width: 250 }, handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With inputStyleOverride', function () {
  return _react2.default.createElement(_index2.default, { inputStyleOverride: { backgroundColor: 'red' }, handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With a placeholder', function () {
  return _react2.default.createElement(_index2.default, { placeholder: 'This is a placeholder', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With type as text', function () {
  return _react2.default.createElement(_index2.default, { defaultValue: 'Hello!', inputType: 'text', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With type as email', function () {
  return _react2.default.createElement(_index2.default, { defaultValue: 'info@baseline.info', inputType: 'email', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With type as tel', function () {
  return _react2.default.createElement(_index2.default, { defaultValue: '866-581-4827', inputType: 'tel', handleOnChange: (0, _addonActions.action)('onChange triggered') });
});