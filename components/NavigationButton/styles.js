'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  baseStyle: _extends({}, _utils.fonts.baseText, {
    fontSize: 20,
    lineHeight: '35px',
    color: _utils.colors.white,
    background: _utils.colors.pictonBlue,
    borderRadius: 3,
    border: 0,
    outline: 0,
    padding: '5px 10px',
    display: 'inline-block',
    height: 35,
    textDecoration: 'none',
    ':hover': {
      cursor: 'pointer',
      color: _utils.colors.white,
      opacity: '.8'
    }
  }),
  secondaryStyle: {
    background: _utils.colors.lightGrey,
    color: _utils.colors.doveGrey,
    border: '1px solid ' + _utils.colors.silver,
    padding: '15px 30px',
    ':hover': {
      color: _utils.colors.doveGrey
    }
  }
};