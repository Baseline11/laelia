'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExternalLink(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 100 125' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M75,46.2h-7.5v-8.4L55.3,50L50,44.7l12.2-12.2h-8.4V25h18.8c1.4,0,2.5,1.1,2.5,2.5V46.2z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M82.5,10h-40c-4.1,0-7.5,3.4-7.5,7.5v40c0,4.1,3.4,7.5,7.5,7.5h40c4.1,0,7.5-3.4,7.5-7.5v-40C90,13.4,86.6,10,82.5,10z M82.5,56.3c0,0.7-0.6,1.3-1.2,1.3H43.8c-0.7,0-1.3-0.6-1.3-1.3V18.8c0-0.7,0.6-1.3,1.3-1.3h37.5c0.7,0,1.2,0.6,1.2,1.3V56.3z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M57.5,65v16.3c0,0.7-0.6,1.2-1.2,1.2H18.8c-0.7,0-1.3-0.6-1.3-1.2V43.8c0-0.7,0.6-1.3,1.3-1.3H35V35H17.5 c-4.1,0-7.5,3.4-7.5,7.5v40c0,4.1,3.4,7.5,7.5,7.5h40c4.1,0,7.5-3.4,7.5-7.5V65H57.5z'
    })
  );
}

ExternalLink.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

ExternalLink.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = ExternalLink;