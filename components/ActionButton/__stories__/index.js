'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _utils = require('../../../utils');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _SvgIcon = require('../../SvgIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secondaryStyles = {
  background: _utils.colors.fadedRed,
  ':hover': {
    background: _utils.colors.sunglo
  }
};

(0, _react3.storiesOf)('ActionButton', module).add('Default with text', function () {
  return _react2.default.createElement(_index2.default, { text: 'Action Button', action: (0, _addonActions.action)('ActionButton clicked') });
}).add('Disabled', function () {
  return _react2.default.createElement(_index2.default, { disabled: true, text: 'Action Button', action: (0, _addonActions.action)('ActionButton clicked') });
}).add('Secondary Styles', function () {
  return _react2.default.createElement(_index2.default, { text: 'Action Button', styleOverride: secondaryStyles, action: (0, _addonActions.action)('ActionButton clicked') });
}).add('With icon', function () {
  return _react2.default.createElement(
    _index2.default,
    { action: (0, _addonActions.action)('ActionButton clicked') },
    _react2.default.createElement(_SvgIcon.IconCommandCenter, { width: 24, height: 24, fill: '#fff' })
  );
});