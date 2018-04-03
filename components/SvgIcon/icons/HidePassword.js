'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HidePassowrdIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    {
      height: height,
      width: width,
      viewBox: '0 0 50 62.5'
    },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M46.852,25.849L47.249,25l-0.397-0.849C43.253,16.471,34.676,11.509,25,11.509   c-3.203,0-6.28,0.554-9.103,1.561l-8.15-8.15L4.919,7.747l7.089,7.089c-3.9,2.205-7.027,5.405-8.859,9.315L2.751,25l0.397,0.849   C6.747,33.529,15.324,38.491,25,38.491c3.203,0,6.28-0.554,9.103-1.561l8.15,8.15l2.828-2.828l-7.089-7.089   C41.893,32.958,45.02,29.759,46.852,25.849z M25,34.491c-7.634,0-14.649-3.778-17.797-9.491c1.67-3.03,4.434-5.508,7.795-7.174   l3.507,3.507c-0.615,1.084-0.971,2.334-0.971,3.667c0,4.116,3.35,7.465,7.466,7.465c1.333,0,2.582-0.355,3.667-0.97l2.224,2.223   C29.01,34.217,27.028,34.491,25,34.491z M28.407,25.579l-3.986-3.986c0.189-0.032,0.381-0.059,0.579-0.059   c1.911,0,3.466,1.555,3.466,3.465C28.466,25.198,28.439,25.39,28.407,25.579z M25.579,28.407c-0.189,0.032-0.381,0.059-0.579,0.059   c-1.911,0-3.466-1.555-3.466-3.465c0-0.198,0.026-0.39,0.059-0.579L25.579,28.407z M35.002,32.174l-3.507-3.507   c0.615-1.084,0.971-2.334,0.971-3.667c0-4.116-3.35-7.465-7.466-7.465c-1.333,0-2.582,0.355-3.667,0.97l-2.224-2.223   c1.881-0.499,3.862-0.773,5.891-0.773c7.634,0,14.649,3.778,17.797,9.491C41.127,28.03,38.363,30.508,35.002,32.174z'
    })
  );
}

HidePassowrdIcon.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

HidePassowrdIcon.defaultProps = {
  width: 27,
  height: 26,
  fill: _utils.colors.gray
};

exports.default = HidePassowrdIcon;