'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MeetUp(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 32 20' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M5,6A3,3,0,0,1,2,3,3,3,0,0,1,5,0,3,3,0,0,1,8,3,3,3,0,0,1,5,6ZM5,2A.94.94,0,0,0,4,3,.94.94,0,0,0,5,4,.94.94,0,0,0,6,3,.94.94,0,0,0,5,2Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M7,20H3a.94.94,0,0,1-1-1V15H1a.94.94,0,0,1-1-1V11A5,5,0,0,1,5,6a5,5,0,0,1,5,5v3a.94.94,0,0,1-1,1H8v4A.94.94,0,0,1,7,20ZM4,18H6V14a.94.94,0,0,1,1-1H8V11A3,3,0,0,0,5,8a3,3,0,0,0-3,3v2H3a.94.94,0,0,1,1,1Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M16,6a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,16,6Zm0-4a.94.94,0,0,0-1,1,1,1,0,0,0,2,0A.94.94,0,0,0,16,2Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M18,20H14a.94.94,0,0,1-1-1V15H12a.94.94,0,0,1-1-1V11a5,5,0,0,1,10,0v3a.94.94,0,0,1-1,1H19v4A.94.94,0,0,1,18,20Zm-3-2h2V14a.94.94,0,0,1,1-1h1V11a3,3,0,0,0-6,0v2h1a.94.94,0,0,1,1,1Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M27,6a3,3,0,0,1-3-3,3,3,0,0,1,6,0A3,3,0,0,1,27,6Zm0-4a.94.94,0,0,0-1,1,1,1,0,0,0,2,0A.94.94,0,0,0,27,2Z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M29,20H25a.94.94,0,0,1-1-1V15H23a.94.94,0,0,1-1-1V11a5,5,0,0,1,10,0v3a.94.94,0,0,1-1,1H30v4A.94.94,0,0,1,29,20Zm-3-2h2V14a.94.94,0,0,1,1-1h1V11a3,3,0,0,0-6,0v2h1a.94.94,0,0,1,1,1Z'
    })
  );
}

MeetUp.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

MeetUp.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = MeetUp;