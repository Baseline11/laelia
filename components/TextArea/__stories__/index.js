'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _utils = require('../../../utils');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textAreaName = function textAreaName(e) {
  return (0, _addonActions.action)('TextArea name')(e.target.name);
};
var textAreaID = function textAreaID(e) {
  return (0, _addonActions.action)('TextArea ID')(e.target.id);
};
var textAreaRequired = function textAreaRequired(e) {
  return (0, _addonActions.action)('TextArea required')(e.target.required);
};
var textAreaValue = function textAreaValue(e) {
  return (0, _addonActions.action)('TextArea value')(e.target.value);
};

var customStyle = {
  width: 800,
  height: 200,
  border: '1px solid ' + _utils.colors.fadedRed,
  backgroundColor: _utils.colors.lightGrey
};

(0, _react3.storiesOf)('TextArea', module).add('Default TextArea', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With custom Placeholder', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', placeholder: 'Please enter your text...', handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With default Value', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', defaultValue: 'Morbi dignissim porttitor facilisis.', handleOnChange: textAreaValue });
}).add('With custom name', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', placeholder: 'Please enter your text...', handleOnChange: textAreaName });
}).add('With custom ID', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', id: 'textAreaID', placeholder: 'Please enter your text...', handleOnChange: textAreaID });
}).add('Disabled Textarea', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', defaultValue: 'Disabled text area', disabled: true, handleOnChange: textAreaID });
}).add('Required Textarea', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', required: true, placeholder: 'Please enter your text...', handleOnChange: textAreaRequired });
}).add('With max length', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', placeholder: 'maxlenght=25', maxLength: 25, handleOnChange: (0, _addonActions.action)('onChange triggered') });
}).add('With custom style', function () {
  return _react2.default.createElement(_index2.default, { name: 'textAreaName', placeholder: 'please enter your text...', handleOnChange: (0, _addonActions.action)('onChange triggered'), textAreaStyleOverride: customStyle });
});