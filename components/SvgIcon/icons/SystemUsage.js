'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SystemUsage(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 22 20' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M11,17.7A42.21,42.21,0,0,1,7.2,14H4.6a46.52,46.52,0,0,0,5.8,5.8,1.42,1.42,0,0,0,.6.2,1.42,1.42,0,0,0,.6-.2,49.9,49.9,0,0,0,5-4.8H13.9C12.7,16.2,11.6,17.2,11,17.7Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M3.1,7A3.4,3.4,0,0,1,3,6,3.78,3.78,0,0,1,7,2,3,3,0,0,1,9.8,4h2.4A3,3,0,0,1,15,2a3.78,3.78,0,0,1,4,4,4.77,4.77,0,0,1-.4,2h2.1A6.93,6.93,0,0,0,21,6a5.78,5.78,0,0,0-6-6,4.88,4.88,0,0,0-4,2.1A5.16,5.16,0,0,0,7,0,5.78,5.78,0,0,0,1,6a3.4,3.4,0,0,0,.1,1Z'
    }),
    _react2.default.createElement('polygon', {
      fill: fill,
      points: '12.1 6.5 8 10.6 5 7.6 2.6 10 0 10 0 12 3.4 12 5 10.4 8 13.4 11.9 9.5 15.8 14.3 19.3 12 22 12 22 10 18.7 10 16.2 11.7 12.1 6.5'
    })
  );
}

SystemUsage.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

SystemUsage.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = SystemUsage;