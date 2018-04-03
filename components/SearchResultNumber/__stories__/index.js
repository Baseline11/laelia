'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [1, 2, 3, 4, 5, 6];
var dataNoResult = [];
var styleOverride = {
  color: '#F55555'
};

var baseTitleStyles = _extends({}, _utils.fonts.title, {
  lineHeight: '45px',
  display: 'inline-block',
  paddingRight: 10,
  marginRight: 10,
  borderRight: '1px solid ' + _utils.colors.quillGray
});

(0, _react3.storiesOf)('SearchResultNumber', module).add('Default', function () {
  var BaseComponent = function BaseComponent() {
    return _react2.default.createElement(
      'h1',
      { style: baseTitleStyles },
      'System Users'
    );
  };
  var resultValue = data.length > 0 ? data.length + ' results found.' : 'No Result';
  var WrappedComponent = (0, _index2.default)(BaseComponent, resultValue);

  return _react2.default.createElement(WrappedComponent, null);
}).add('Default No Result', function () {
  var BaseComponent = function BaseComponent() {
    return _react2.default.createElement(
      'h1',
      { style: baseTitleStyles },
      'System Users'
    );
  };
  var resultValue = dataNoResult.length > 0 ? dataNoResult.length + ' results found.' : 'No Result';
  var WrappedComponent = (0, _index2.default)(BaseComponent, resultValue);

  return _react2.default.createElement(WrappedComponent, null);
}).add('Default with Style Override', function () {
  var BaseComponent = function BaseComponent() {
    return _react2.default.createElement(
      'h1',
      { style: baseTitleStyles },
      'System Users'
    );
  };
  var resultValue = data.length > 0 ? data.length + ' results found.' : 'No Result';
  var WrappedComponent = (0, _index2.default)(BaseComponent, resultValue);

  return _react2.default.createElement(WrappedComponent, { styleOverride: styleOverride });
});