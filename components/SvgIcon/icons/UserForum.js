'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserForum(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 24 22' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M15,14c-.2,0-.3,0-.4-.1A1.15,1.15,0,0,1,14,13V11H13V9h2a.94.94,0,0,1,1,1v1l2.4-1.8A1.42,1.42,0,0,1,19,9h3V2H12V5H10V2a2,2,0,0,1,2-2H22a2,2,0,0,1,2,2V9a2,2,0,0,1-2,2H19.3l-3.7,2.8a1.42,1.42,0,0,1-.6.2Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M8,14a4,4,0,1,1,4-4A4,4,0,0,1,8,14ZM8,8a2,2,0,1,0,2,2A2,2,0,0,0,8,8Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M16,22H0V21c0-3.5,3.3-6,8-6s8,2.5,8,6ZM2.2,20H13.9c-.6-1.8-2.8-3-5.8-3s-5.3,1.2-5.9,3Z'
    })
  );
}

UserForum.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

UserForum.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = UserForum;