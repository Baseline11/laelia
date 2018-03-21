'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SupportTickets(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 17 22' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M16,7H11V9h4v9H13v2H2V9H5V7H1A.94.94,0,0,0,0,8V21a.94.94,0,0,0,1,1H14a.91.91,0,0,0,.7-.3l2-2A.91.91,0,0,0,17,19V8A.94.94,0,0,0,16,7Z'
    }),
    _react2.default.createElement('rect', {
      fill: fill,
      x: '4',
      y: '11',
      width: '9',
      height: '2'
    }),
    _react2.default.createElement('rect', {
      fill: fill,
      x: '4',
      y: '15',
      width: '9',
      height: '2'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M7,5.8V9a.94.94,0,0,0,1,1A.94.94,0,0,0,9,9V5.8A2.91,2.91,0,0,0,11,3,3,3,0,0,0,8,0,3,3,0,0,0,5,3,2.91,2.91,0,0,0,7,5.8Z'
    })
  );
}

SupportTickets.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

SupportTickets.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = SupportTickets;