'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Reports(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 28 35' },
    _react2.default.createElement('path', { fill: fill, d: 'M20,0H3.5C1.6,0,0,1.6,0,3.5v28C0,33.4,1.6,35,3.5,35h21c1.9,0,3.5-1.6,3.5-3.5V8L20,0z M5.2,17.5h14V21h-14 V17.5z M22.8,28H5.2v-3.5h17.5V28z M17.5,10.5V1.8l8.8,8.8H17.5z'
    })
  );
}

Reports.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

Reports.defaultProps = {
  width: 14,
  height: 18,
  fill: '#000'
};

exports.default = Reports;