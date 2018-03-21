'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Settings(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 28 28' },
    _react2.default.createElement('path', { fill: fill, d: 'M27.3,16.1l-2.9,0.3L23,19.6l1.9,2.3c0.3,0.3,0.3,0.7,0,1l-2,2c-0.3,0.3-0.7,0.3-1,0L19.6,23l-3.2,1.3l-0.3,2.9\r c0,0.4-0.3,0.7-0.7,0.7h-2.8c-0.4,0-0.7-0.3-0.7-0.7l-0.3-2.9L8.4,23l-2.3,1.9c-0.3,0.3-0.7,0.3-1,0l-2-2c-0.3-0.3-0.3-0.7,0-1\r L5,19.6l-1.3-3.2l-2.9-0.3c-0.4,0-0.7-0.3-0.7-0.7v-2.8c0-0.4,0.3-0.7,0.7-0.7l2.9-0.3L5,8.4L3.1,6.1c-0.3-0.3-0.3-0.7,0-1l2-2\r c0.3-0.3,0.7-0.3,1,0L8.4,5l3.2-1.3l0.3-2.9c0-0.4,0.3-0.7,0.7-0.7h2.8c0.4,0,0.7,0.3,0.7,0.7l0.3,2.9L19.6,5l2.3-1.9\r c0.3-0.3,0.7-0.3,1,0l2,2c0.3,0.3,0.3,0.7,0,1L23,8.4l1.3,3.2l2.9,0.3c0.4,0,0.7,0.3,0.7,0.7v2.8C28,15.8,27.7,16.1,27.3,16.1z\r M14,9.8c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2c2.3,0,4.2-1.9,4.2-4.2S16.3,9.8,14,9.8z'
    })
  );
}

Settings.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

Settings.defaultProps = {
  width: 18,
  height: 18,
  fill: '#000'
};

exports.default = Settings;