'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkBoxValue = function checkBoxValue(e) {
  return (0, _addonActions.action)('Checkbox Value')(e.target.value);
};
var checkBoxName = function checkBoxName(e) {
  return (0, _addonActions.action)('Checkbox Name')(e.target.name);
};
var checkBoxID = function checkBoxID(e) {
  return (0, _addonActions.action)('Checkbox ID')(e.target.id);
};

(0, _react3.storiesOf)('CheckBox', module).add('Default', function () {
  return _react2.default.createElement(_index2.default, { checkBoxName: 'checkbox', checkBoxID: 'checkboxID', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('Checked', function () {
  return _react2.default.createElement(_index2.default, { checkBoxName: 'checkbox', checked: true, checkBoxID: 'checkboxID', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('Disabled', function () {
  return _react2.default.createElement(_index2.default, { checkBoxName: 'checkbox', disabled: true, checkBoxID: 'checkboxID', handleOnChange: (0, _addonActions.action)('You should not see this text') });
}).add('with Custom Value', function () {
  return _react2.default.createElement(_index2.default, { checkBoxName: 'checkboxName', checked: true, checkBoxValue: 'Checkbox Value 1', checkBoxID: 'checkboxID', handleOnChange: checkBoxValue });
}).add('with Custom Name', function () {
  return _react2.default.createElement(_index2.default, { checkBoxName: 'checkboxName', checked: true, checkBoxID: 'checkboxID', handleOnChange: checkBoxName });
}).add('with Custom ID', function () {
  return _react2.default.createElement(_index2.default, { checkBoxName: 'checkbox', checked: true, checkBoxID: 'checkboxID', handleOnChange: checkBoxID });
});