'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _navigationItems = require('../../../utils/mocks/navigationItems');

var _navigationItems2 = _interopRequireDefault(_navigationItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logoUrl = 'https://go-beta.baseline.info/img/command_center_logo_white.png';
var activePage = { type: 'link', label: 'marketing lists', url: '/communications/marketinglists' };

(0, _react3.storiesOf)('Navigation', module).add('Not collapsed by default', function () {
  return _react2.default.createElement(_index2.default, { data: _navigationItems2.default, logoUrl: logoUrl, handleOnClose: (0, _addonActions.action)('handleOnClose called') });
}).add('Is collapsed', function () {
  return _react2.default.createElement(_index2.default, { data: _navigationItems2.default, logoUrl: logoUrl, isCollapsed: true, handleOnClose: (0, _addonActions.action)('handleOnClose called') });
}).add('Without logo in header', function () {
  return _react2.default.createElement(_index2.default, { data: _navigationItems2.default, handleOnClose: (0, _addonActions.action)('handleOnClose called') });
}).add('With an item selected', function () {
  return _react2.default.createElement(_index2.default, { data: _navigationItems2.default, activePage: activePage, handleOnClose: (0, _addonActions.action)('handleOnClose called') });
});