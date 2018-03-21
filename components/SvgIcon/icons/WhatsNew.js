'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WhatsNew(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 20 17' },
    _react2.default.createElement('polygon', {
      fill: fill,
      points: '9 9 6 9 6 11 9 11 9 14 11 14 11 11 14 11 14 9 11 9 11 6 9 6 9 9'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M18,3H9.8L8.2.8A2.09,2.09,0,0,0,6.6,0H2A2,2,0,0,0,0,2V15a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V5A2,2,0,0,0,18,3ZM2,15V2H6.5L8.1,4.2A2.09,2.09,0,0,0,9.7,5h8.2V15Z'
    })
  );
}

WhatsNew.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

WhatsNew.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = WhatsNew;