'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Training(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 16 20' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M15,20H8a1,1,0,0,1-.9-.6l-3-6a1.17,1.17,0,0,1,0-1,1.05,1.05,0,0,1,.9-.5H7v-6a1.23,1.23,0,0,1,.4-.8A1,1,0,0,1,8.3,5l3,1a1,1,0,0,1,.7.9v4.2l3.2.8a1.08,1.08,0,0,1,.8,1v6A1,1,0,0,1,15,20ZM8.6,18H14V13.8L10.8,13a1.08,1.08,0,0,1-.8-1V7.7L9,7.4V13a.94.94,0,0,1-1,1H6.6Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M14,0H2A2,2,0,0,0,0,2V9a2,2,0,0,0,2,2H5V9H2V2H14V9h2V2A2,2,0,0,0,14,0Z'
    })
  );
}

Training.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

Training.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = Training;