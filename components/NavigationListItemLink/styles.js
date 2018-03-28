'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

var styles = function styles(theme) {
  return {
    navItem: _extends({}, _utils.fonts.baseText, {
      color: _utils.colors.dustyGray,
      textTransform: 'capitalize'
    }),
    navItemSelected: {
      color: _utils.colors.lightGrey
    },
    nested: {
      paddingLeft: theme.spacing.unit * 7
    },
    selected: {
      background: _utils.colors.mineShaft,
      boxShadow: 'inset 4px 0 0 0 ' + _utils.colors.pictonBlue
    },
    nestedSelected: {
      background: _utils.colors.scorpion
    }
  };
};

exports.default = styles;