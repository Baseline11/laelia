'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('ToggleSwitch', module).add('Inactive by default', function () {
  return _react2.default.createElement(_index2.default, { action: (0, _addonActions.action)('ToggleSwitch clicked') });
}).add('Is active', function () {
  return _react2.default.createElement(_index2.default, { action: (0, _addonActions.action)('ToggleSwitch clicked'), active: true });
}).add('Is disabled', function () {
  return _react2.default.createElement(_index2.default, { action: (0, _addonActions.action)('You should not see this action'), disabled: true });
});