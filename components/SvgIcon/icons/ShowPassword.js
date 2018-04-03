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

function ShowPasswordIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    {
      height: height,
      width: width,
      viewBox: '0 0 100 125'
    },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M50,35.045c-8.246,0-14.955,6.709-14.955,14.955S41.754,64.955,50,64.955S64.955,58.246,64.955,50S58.246,35.045,50,35.045z   M50,57.955c-4.387,0-7.955-3.568-7.955-7.955s3.568-7.955,7.955-7.955s7.955,3.568,7.955,7.955S54.387,57.955,50,57.955z   M89.98,47.971C80.102,34.089,65.529,26.127,50,26.127s-30.102,7.962-39.98,21.844L8.575,50l1.444,2.029  C19.897,65.911,34.47,73.873,50,73.873s30.103-7.962,39.98-21.844L91.425,50L89.98,47.971z M50,66.873  c-12.472,0-24.284-6.117-32.758-16.873C25.717,39.244,37.529,33.127,50,33.127S74.283,39.244,82.758,50  C74.284,60.756,62.472,66.873,50,66.873z'
    })
  );
}

ShowPasswordIcon.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

ShowPasswordIcon.defaultProps = {
  width: 31,
  height: 30,
  fill: _utils.colors.gray
};

exports.default = ShowPasswordIcon;