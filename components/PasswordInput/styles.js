'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  passwordWrapper: _extends({}, _utils.fonts.baseText, {
    width: '100%',
    position: 'relative'
  }),
  showPassSVG: {
    position: 'absolute',
    width: 31,
    height: 30,
    right: 0,
    top: 5,
    display: 'inline-block',
    ':hover': {
      cursor: 'pointer'
    }
  },
  hidePassSVG: {
    position: 'absolute',
    width: 27,
    height: 26,
    right: 2,
    top: 7,
    display: 'inline-block',
    ':hover': {
      cursor: 'pointer'
    }
  },
  hideIconSVG: {
    display: 'none'
  }
};