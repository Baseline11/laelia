'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FutureReleases(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 68 62' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M53.9,15.4a22.62,22.62,0,0,1,5.2,10.9h8.7A31.55,31.55,0,0,0,59.6,9.8Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M59.3,33.8a22.67,22.67,0,0,1-4.9,11.3l6.4,6.4a30.63,30.63,0,0,0,7.3-17.7Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M48.7,50.1a22.62,22.62,0,0,1-11,3.4v8.8a30.66,30.66,0,0,0,17.4-5.7Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M30.2,52.6a23.32,23.32,0,0,1-11.7-8A24.61,24.61,0,0,1,14.3,34h5.9L10.1,16.5,0,34H6.2a31.19,31.19,0,0,0,24,27.4Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M53.7,5A32.15,32.15,0,0,0,36.9,0V7.6a23.83,23.83,0,0,1,11.1,3Z'
    }),
    _react2.default.createElement('rect', {
      fill: fill,
      x: '32',
      y: '14.9',
      width: '4.8',
      height: '16.6'
    }),
    _react2.default.createElement('rect', {
      fill: fill,
      x: '37.13',
      y: '27.48',
      width: '4.8',
      height: '16.6',
      transform: 'translate(-13.73 38.43) rotate(-45)'
    })
  );
}

FutureReleases.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

FutureReleases.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = FutureReleases;