'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  baseResultNumber: _extends({}, _utils.fonts.baseText, {
    color: _utils.colors.dustyGray,
    display: 'inline-block',
    verticalAlign: 'top',
    lineHeight: '50px',
    height: 50,
    fontSize: 12,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  }),
  resultNumberContainer: {
    display: 'block',
    position: 'relative'
  }
};