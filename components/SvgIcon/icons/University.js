'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function University(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 168 213' },
    _react2.default.createElement('path', {
      style: { stroke: fill, strokeWidth: 2 },
      fill: 'rgba(255, 255, 255, 0)',
      d: 'M84.06,212.3c67-43,92-96,80.1-205,0,0-44.3-6-80.5-6.3h0c-36.2.3-79.8,6.3-79.8,6.3C-8,116.3,17,169.3,84.06,212.3Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M84.06,11.6h0Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M84,201.7h0l.1-104.8H12C19.36,144.8,42.86,175.3,84,201.7Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M12,96.9h0v-.2C11.86,96.8,12,96.8,12,96.9Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M156.16,17.2l.2-.6c-28-3-40-4.8-72.2-5V96.9h72c3.4-22.3,3.4-48.5,0-79.7Z'
    })
  );
}

University.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

University.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = University;