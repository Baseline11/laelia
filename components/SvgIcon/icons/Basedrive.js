'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Basedrive(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 28 22.9' },
    _react2.default.createElement('path', { fill: fill, d: 'M27.4,11.4c-0.4-0.5-1-0.8-1.6-1c0.6-0.2,1.1-0.5,1.5-1c0.4-0.5,0.6-1.1,0.6-1.8V4.5c0-1.5-0.5-2.6-1.6-3.4 c-1.1-0.7-2.7-1.1-5-1.1h-7.9L7.5,0L0,12.4h6.5L0.1,22.9L14.8,8.6H8.1l2.7-4.4h10.6c0.7,0,1.3,0.1,1.7,0.3c0.4,0.2,0.6,0.5,0.6,0.9 v2.1c0,0.3-0.2,0.8-0.5,0.9c-0.3,0.2-0.9,0.3-1.7,0.3h-3.4l-3.7,3.7h6.8c0.8,0,1.4,0.1,1.9,0.3c0.4,0.2,0.7,0.5,0.7,1v2 c0,0.6-0.2,1-0.6,1.2c-0.4,0.2-1.1,0.3-1.9,0.3H9.5l-4.2,4.2h16c2.3,0,4-0.4,5.1-1.2c1.1-0.8,1.6-1.9,1.6-3.3v-3.5 C28,12.6,27.8,11.9,27.4,11.4z'
    })
  );
}

Basedrive.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

Basedrive.defaultProps = {
  width: 18,
  height: 14,
  fill: '#fff'
};

exports.default = Basedrive;