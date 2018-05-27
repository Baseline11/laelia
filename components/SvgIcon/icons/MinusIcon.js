'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MinusIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 100 125' },
    _react2.default.createElement('path', { fill: fill, d: 'M 10.6875 8 A 3.0003 3.0003 0 0 0 8 11 L 8 89 A 3.0003 3.0003 0 0 0 11 92 L 89 92 A 3.0003 3.0003 0 0 0 92 89 L 92 11 A 3.0003 3.0003 0 0 0 89 8 L 11 8 A 3.0003 3.0003 0 0 0 10.6875 8 z M 14 14 L 86 14 L 86 86 L 14 86 L 14 14 z M 27.6875 47 A 3.0040663 3.0040663 0 1 0 28 53 L 72 53 A 3.0003 3.0003 0 1 0 72 47 L 28 47 A 3.0003 3.0003 0 0 0 27.6875 47 z ' })
  );
}

MinusIcon.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

MinusIcon.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = MinusIcon;