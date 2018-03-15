'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Help(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 28 28' },
    _react2.default.createElement('path', { fill: fill, d: 'M14,0C6.3,0,0,6.3,0,14s6.3,14,14,14c7.7,0,14-6.3,14-14S21.7,0,14,0z M14.1,22.4c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C16.1,21.5,15.2,22.4,14.1,22.4z M16.7,13.3c-0.8,0.6-1.6,1.2-1.6,2.1c0,0.4,0.2,0.8,0.4,1 l-2.6,0.8c-0.5-0.6-0.8-1.3-0.8-2.1c0-1.7,1.2-2.5,2.1-3.2c0.8-0.5,1.4-1,1.4-1.7c0-0.8-0.6-1.4-1.9-1.4c-1.2,0-2.2,0.6-3,1.5L8.8,8 c1.3-1.5,3.2-2.4,5.3-2.4c3.1,0,5.1,1.6,5.1,3.8C19.2,11.5,17.9,12.5,16.7,13.3z'
    })
  );
}

Help.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

Help.defaultProps = {
  width: 18,
  height: 18,
  fill: '#fff'
};

exports.default = Help;