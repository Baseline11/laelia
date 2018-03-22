'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var languages = ['english', 'french', 'spanish', 'portuguese', 'chinese'];

(0, _react3.storiesOf)('LanguageTabs', module).add('Default without selection', function () {
  return _react2.default.createElement(_index2.default, { languages: languages, handleOnClick: (0, _addonActions.action)('onClick triggered') });
}).add('One tab selected', function () {
  return _react2.default.createElement(_index2.default, { languages: languages, selectedTab: 'french', handleOnClick: (0, _addonActions.action)('onClick triggered') });
});