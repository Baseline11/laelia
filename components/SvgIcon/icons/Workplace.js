'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Workplace(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 28 28' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M22.4,13.2l-5.5-5.5l-5.6,7L7,10.4l-2.2,2.2H0v12.6C0,26.7,1.3,28,2.8,28h22.4c1.5,0,2.8-1.3,2.8-2.8V9.8h-2.2 L22.4,13.2z M7,25.2H4.2V21H7V25.2z M12.6,25.2H9.8v-7h2.8V25.2z M18.2,25.2h-2.8V21h2.8V25.2z M23.8,25.2H21v-7h2.8V25.2z'
    }),
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M25.2,0H2.8C1.3,0,0,1.3,0,2.8v7h3.6L7,6.4l4.1,4.1l5.6-7l5.7,5.7L24.6,7H28V2.8C28,1.3,26.7,0,25.2,0z'
    })
  );
}

Workplace.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

Workplace.defaultProps = {
  width: 18,
  height: 18,
  fill: '#fff'
};

exports.default = Workplace;