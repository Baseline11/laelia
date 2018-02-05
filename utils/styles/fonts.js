'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  baseText: {
    fontFamily: '"Montserrat", sans-serif, customUbuntu, "palatino linotype", "trebuchet ms", "times new roman"',
    fontSize: 14,
    fontWeight: 400,
    color: _colors2.default.black
  },
  baseTextError: {
    fontFamily: '"Montserrat", sans-serif, customUbuntu, "palatino linotype", "trebuchet ms", "times new roman"',
    fontSize: 14,
    color: _colors2.default.fadedRed
  },
  title: {
    fontFamily: '"Montserrat", sans-serif, customUbuntu, "palatino linotype", "trebuchet ms", "times new roman"',
    fontSize: 18
  }
};