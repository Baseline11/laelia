'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Faq(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 17 17' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M3,17V13H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H15a2,2,0,0,1,2,2v9a2,2,0,0,1-2,2H8.3ZM2,2v9H5v2l2.7-2H15V2Z'
    }),
    _react2.default.createElement('polygon', {
      fill: fill,
      points: '7.7 3.5 7.7 5.8 5.5 5.8 5.5 7.3 7.7 7.3 7.7 9.5 9.2 9.5 9.2 7.3 11.4 7.3 11.4 5.8 9.2 5.8 9.2 3.5 7.7 3.5'
    })
  );
}

Faq.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

Faq.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = Faq;