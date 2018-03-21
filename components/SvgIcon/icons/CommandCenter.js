'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CommandCenter(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 90 90' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M10.5,45.8l7.7-11.6a3.64,3.64,0,0,1,3.2-1.6,3.3,3.3,0,0,1,2.8,2.1l8.3,20.6a.73.73,0,0,0,1.4,0L44.8,21.7a3.27,3.27,0,0,1,3.5-2.3A3.42,3.42,0,0,1,51.5,22l7.4,27.1a.73.73,0,0,0,1.4,0l7.4-17.2a3.66,3.66,0,0,1,3.2-2.1,3.34,3.34,0,0,1,3.2,2.1l6.3,13.7c0,.2.5.5.7.5H90V45A45,45,0,0,0,0,45v1.1H9.7C10.1,46,10.3,45.8,10.5,45.8Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M75,50.9l-3.5-7.4a.84.84,0,0,0-1.4,0L62,62.8a3.85,3.85,0,0,1-3.5,2.1,3.21,3.21,0,0,1-3-2.5l-7-25.3a.73.73,0,0,0-1.4,0L36.9,68.4a3.24,3.24,0,0,1-3.2,2.3h-.2a3.43,3.43,0,0,1-3.2-2.1L20.8,44.7a.68.68,0,0,0-1.2-.2l-4.7,7a2.93,2.93,0,0,1-2.8,1.6H1a45,45,0,0,0,88.6,0H78.4A3.87,3.87,0,0,1,75,50.9Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M90.1,46a53.54,53.54,0,0,1-.7,7'
    })
  );
}

CommandCenter.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

CommandCenter.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = CommandCenter;