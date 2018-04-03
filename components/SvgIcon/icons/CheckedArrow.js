'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckedArrow(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    {
      height: height,
      width: width,
      viewBox: '0 0 100 125'
    },
    _react2.default.createElement(
      'g',
      { transform: 'translate(0,-952.36218)' },
      _react2.default.createElement('path', {
        fill: fill,
        d: 'M 91.9375 17.96875 A 2.0002 2.0002 0 0 0 90.5625 18.59375 L 33 77.15625 L 9.4375 53.1875 A 2.0109563 2.0109563 0 0 0 6.5625 56 L 31.5625 81.375 A 2.0002 2.0002 0 0 0 34.40625 81.375 L 93.4375 21.375 A 2.0002 2.0002 0 0 0 91.9375 17.96875 z ',
        transform: 'translate(0,952.36218)'
      })
    )
  );
}

CheckedArrow.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

CheckedArrow.defaultProps = {
  width: 26,
  height: 26,
  fill: _utils.colors.sushi
};

exports.default = CheckedArrow;