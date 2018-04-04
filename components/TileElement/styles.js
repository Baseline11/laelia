'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  tile: _extends({}, _utils.fonts.baseText, {
    width: '100%',
    background: _utils.colors.white,
    padding: '40px 5px',
    borderRadius: 5,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, .3)',
    margin: 10
  })
};