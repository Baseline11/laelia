'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  table: {
    width: '100%'
  },
  tableRow: _extends({}, _utils.fonts.baseText, {
    background: _utils.colors.white,
    borderBottom: '1px solid ' + _utils.colors.quillGray
  })
};