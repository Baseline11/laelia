'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  baseAction: _extends({}, _utils.fonts.baseText, {
    fontSize: 20,
    color: _utils.colors.white,
    background: _utils.colors.cornflowerBlue,
    borderRadius: 3,
    border: 0,
    outline: 0,
    padding: '5px 10px',
    display: 'inline-block',
    margin: '0',
    ':hover': {
      background: _utils.colors.jordyBlue
    }
  })
};