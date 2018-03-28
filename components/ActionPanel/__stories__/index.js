'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = [{
  text: 'View',
  value: 'http://www.google.ca'
}, {
  text: 'Edit',
  value: 'http://www.google.ca'
}, {
  text: 'Delete',
  value: 'http://www.google.ca'
}];

(0, _react3.storiesOf)('ActionPanel', module).add('Default Hidden', function () {
  return _react2.default.createElement(_index2.default, { actions: actions });
}).add('Visible', function () {
  return _react2.default.createElement(_index2.default, { actions: actions, visible: true });
});