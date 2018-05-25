'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  paginationContainer: {
    maxWidth: 800,
    padding: 15
  },
  pagination: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    padding: 0,
    margin: 0
  },
  paginationItem: {
    margin: 0
  },
  paginationItemButton: _extends({
    appearance: 'none',
    outline: 0
  }, _utils.fonts.baseText, {
    fontSize: 15,
    color: _utils.colors.pictonBlue,
    background: '#fff',
    borderColor: _utils.colors.lightGrey,
    borderStyle: 'solid',
    borderWidth: '0 1px',
    width: 35,
    height: 35,
    textAlign: 'center',
    ':hover': {
      background: _utils.colors.pictonBlue,
      color: _utils.colors.white,
      cursor: 'pointer'
    }
  }),
  paginationItemButtonText: {
    width: 'auto',
    padding: '0 15px'
  },
  paginationItemButtonPrev: {
    borderWidth: 0
  },
  paginationItemButtonNext: {
    borderWidth: 0
  },
  paginationItemButtonDisabled: {
    background: _utils.colors.white,
    color: _utils.colors.silver,
    ':hover': {
      background: _utils.colors.white,
      color: _utils.colors.silver
    }
  },
  paginationItemButtonSelected: {
    color: _utils.colors.white,
    background: _utils.colors.dustyGray,
    textDecoration: 'none',
    ':hover': {
      color: _utils.colors.white,
      background: _utils.colors.dustyGray,
      cursor: 'default'
    }
  },
  paginationEllipsis: {
    display: 'inline-block',
    lineHeight: '28px',
    ':hover': {
      background: 'transparent',
      color: _utils.colors.pictonBlue,
      cursor: 'default',
      textDecoration: 'none'
    }
  },
  paginationLimiterContainer: _extends({}, _utils.fonts.baseText, {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderColor: _utils.colors.lightGrey,
    borderStyle: 'solid',
    borderWidth: '0 2px 0 0',
    padding: '0 15px'
  }),
  paginationLimiterDropdownWrapper: {
    width: 65,
    alignSelf: 'center',
    margin: '0 10px'
  },
  paginationLimiterInlineText: {
    alignSelf: 'center'
  }
};