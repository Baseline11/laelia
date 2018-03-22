'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(e) {
  return (0, _addonActions.action)('Select value')(e.target.value);
};
var handlerName = function handlerName(e) {
  return (0, _addonActions.action)('Select Name')(e.target.name);
};

var selectValues = [{ key: 'phone', value: 'phone number' }, { key: 'email', value: 'your email' }, { key: 'fax', value: 'fax number' }];

(0, _react3.storiesOf)('Select', module).add('Default Select', function () {
  return _react2.default.createElement(_index2.default, { label: '', selectName: 'type', selectValues: selectValues, selectedValue: '', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With SelectedValue', function () {
  return _react2.default.createElement(_index2.default, { label: 'Type', selectName: 'type', selectValues: selectValues, selectedValue: 'email', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With styleOverride', function () {
  return _react2.default.createElement(_index2.default, { label: 'Type', selectName: 'type', selectValues: selectValues, selectedValue: '', handleOnChange: (0, _addonActions.action)('onChange triggered'), wrapperStyleOverride: { width: 200 } });
}).add('With custom Select Name', function () {
  return _react2.default.createElement(_index2.default, { label: 'Type', selectName: 'customName', selectValues: selectValues, selectedValue: '', handleOnChange: handlerName });
}).add('Retrieve value from onChange', function () {
  return _react2.default.createElement(_index2.default, { label: 'Type', selectName: 'type', selectValues: selectValues, selectedValue: '', handleOnChange: handler });
});