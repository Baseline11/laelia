'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApiGuide(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 100 100' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'm8.6016 74.801c0 3.8984 3.1016 7 7 7h68.801c3.8984 0 7-3.1016 7-7v-38h-82.801zm32.199-17.902h18.301c1.1016 0 2 0.89844 2 2 0 1.1016-0.89844 2-2 2h-18.301c-1.1016 0-2-0.89844-2-2 0-1.0977 0.89844-2 2-2zm-21.902-8.1992c-0.80078-0.80078-0.80078-2 0-2.8008 0.80078-0.80078 2-0.80078 2.8008 0l11.602 11.602c0.80078 0.80078 0.80078 2 0 2.8008l-11.602 11.598c-0.39844 0.39844-0.89844 0.60156-1.3984 0.60156s-1-0.19922-1.3984-0.60156c-0.80078-0.80078-0.80078-2 0-2.8008l10.098-10.199z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'm84.398 18.199h-68.797c-3.8984 0-7 3.1016-7 7v7.5h82.801v-7.5c-0.003906-3.8008-3.2031-7-7.0039-7zm-68.699 12.5c-2.8008 0-5.1016-2.3008-5.1016-5.1016 0-2.8008 2.3008-5.1016 5.1016-5.1016s5.1016 2.3008 5.1016 5.1016c0 2.8008-2.3008 5.1016-5.1016 5.1016zm13.902 0c-2.8008 0-5.1016-2.3008-5.1016-5.1016 0-2.8008 2.3008-5.1016 5.1016-5.1016 2.8008 0 5.1016 2.3008 5.1016 5.1016-0.003906 2.8008-2.3047 5.1016-5.1016 5.1016zm13.898 0c-2.8008 0-5.1016-2.3008-5.1016-5.1016 0-2.8008 2.3008-5.1016 5.1016-5.1016s5.1016 2.3008 5.1016 5.1016c0 2.8008-2.3008 5.1016-5.1016 5.1016z'
    })
  );
}

ApiGuide.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

ApiGuide.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = ApiGuide;