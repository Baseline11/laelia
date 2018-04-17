'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  inputWrapper: {
    width: '100%'
  },
  inputText: _extends({}, _utils.common.baseTextInput, {
    width: 'inherit',
    borderRadius: 4,
    padding: 10
  }),
  texInputDisabled: _extends({}, _utils.common.disabledTextInput)
};