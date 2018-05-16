'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ForwardArrow(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    {
      width: width,
      height: height,
      viewBox: '0 0 100 125'
    },
    _react2.default.createElement('path', { fill: fill, d: 'M86.8,51.6c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0.1-0.2,0.1-0.3c0.1-0.4,0.1-0.9,0-1.3  c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.1-0.4c0-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.3-0.4-0.4-0.5c0,0,0,0,0,0  L52.4,13.8c-1.3-1.3-3.5-1.3-4.8,0c-1.3,1.3-1.3,3.5,0,4.8L50,21l25.7,25.7H50H16.2c-1.9,0-3.4,1.5-3.4,3.4s1.5,3.4,3.4,3.4H50h25.7  L50,79l-2.4,2.4c-1.3,1.3-1.3,3.5,0,4.8c0.7,0.7,1.5,1,2.4,1c0.9,0,1.7-0.3,2.4-1l33.8-33.8c0,0,0,0,0,0c0.2-0.2,0.3-0.3,0.4-0.5  C86.7,51.8,86.7,51.7,86.8,51.6z' })
  );
}

ForwardArrow.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

ForwardArrow.defaultProps = {
  width: 25,
  height: 20,
  fill: '#000'
};

exports.default = ForwardArrow;