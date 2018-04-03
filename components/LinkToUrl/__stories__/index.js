'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('LinkToUrl', module).add('Default', function () {
  return _react2.default.createElement(_index2.default, { url: 'Url example here' });
}).add('Default With Text', function () {
  return _react2.default.createElement(_index2.default, { url: 'Url example here', text: 'Text Example' });
});