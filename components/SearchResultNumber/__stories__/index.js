'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [1, 2, 3, 4, 5, 6];
var styleOverride = {
  color: '#F55555'
};

(0, _react3.storiesOf)('SearchResultNumber', module).add('Default', function () {
  var BaseComponent = function BaseComponent() {
    return _react2.default.createElement(
      'h1',
      null,
      'Users'
    );
  };
  var resultValue = data.length > 0 ? data.length + ' results found.' : 'No Result';
  var WrappedComponent = (0, _index2.default)(BaseComponent, resultValue);

  return _react2.default.createElement(WrappedComponent, null);
}).add('Default with Style Override', function () {
  var BaseComponent = function BaseComponent() {
    return _react2.default.createElement(
      'h1',
      null,
      'Users'
    );
  };
  var resultValue = data.length > 0 ? data.length + ' results found.' : 'No Result';
  var WrappedComponent = (0, _index2.default)(BaseComponent, resultValue);

  return _react2.default.createElement(WrappedComponent, { styleOverride: styleOverride });
});