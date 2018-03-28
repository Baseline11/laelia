'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  textArea: _extends({}, _utils.common.baseTextInput, {
    width: 400,
    height: 100,
    resize: 'none',
    outline: 'none',
    padding: 10
  }),
  texAreaDisabled: _extends({}, _utils.common.disabledTextInput)
};