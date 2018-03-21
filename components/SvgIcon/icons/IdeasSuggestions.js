'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IdeasSuggestions(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 16 20' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M11.4,0H2A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V4.6ZM14,18H2V2h8V6h4Z'
    }),
    _react2.default.createElement('polygon', {
      fill: fill,
      points: '4.3 13.1 7 15.8 11.7 11.1 10.3 9.7 7 13 5.7 11.7 4.3 13.1'
    })
  );
}

IdeasSuggestions.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

IdeasSuggestions.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = IdeasSuggestions;