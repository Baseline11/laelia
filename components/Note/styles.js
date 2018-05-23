'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  root: _extends({}, _utils.fonts.baseText, {
    color: _utils.colors.silver,
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  }),
  content: {
    flexGrow: 1,
    width: '100%'
  },
  authorLabel: {
    color: _utils.colors.pictonBlue,
    flexShrink: 1
  }
};