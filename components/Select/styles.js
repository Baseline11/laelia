'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  inputWrapper: _extends({}, _utils.fonts.baseText, {
    width: '100%',
    position: 'relative'
  }),
  selectArrow: {
    fontSize: 10,
    color: _utils.colors.black,
    top: 12,
    right: 10,
    position: 'absolute',
    pointerEvents: 'none'
  },
  selectList: {
    display: 'block',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    width: 'inherit',
    border: '1px solid ' + _utils.colors.quillGray,
    background: _utils.colors.lightGrey,
    fontSize: 12,
    padding: 10,
    color: _utils.colors.gray,
    textTransform: 'Capitalize',
    borderRadius: 2
  }
};