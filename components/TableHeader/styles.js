'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  tableHeaderRow: {
    background: _utils.colors.dustyGray
  },
  tableHeaderCell: _extends({}, _utils.fonts.baseText, {
    color: 'white',
    textTransform: 'uppercase',
    padding: '0 10px',
    height: '55px',
    fontSize: '12px',
    border: 0,
    borderCollapse: 'collapse',
    boxSizing: 'border-box'
  }),
  tableHeaderCellSelected: {
    background: _utils.colors.pictonBlue
  },
  tableHeaderSortIcon: {
    fill: _utils.colors.white,
    marginLeft: '5px'
  },
  tableHeaderSortIconInverted: {
    transform: 'rotate(180deg)'
  }
};