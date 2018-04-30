'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  actionList: {
    paddingTop: 0,
    paddingBottom: 0
  },
  actionItem: _extends({}, _utils.fonts.baseText, {
    textDecoration: 'none',
    '&:hover': {
      background: _utils.colors.pictonBlue,
      color: _utils.colors.white
    }
  }),
  actionLinkItem: {
    textDecoration: 'none',
    color: 'inherit'
  }
};