'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  baseStyle: _extends({}, _utils.fonts.baseText, {
    fontSize: 12,
    color: _utils.colors.white,
    background: _utils.colors.pictonBlue,
    opacity: 0,
    borderRadius: 3,
    border: '1px solid ' + _utils.colors.cornflowerBlue,
    position: 'relative',
    outline: 0,
    padding: '35px 15px',
    display: 'inline-block',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .175)',
    margin: 0,
    transition: 'box-shadow ease-out .1s, opacity ease-in .4s',
    ':hover': {
      boxShadow: '0 5px 10px rgba(0, 0, 0, .175)'
    }
  }),
  baseStyleShow: {
    opacity: 1
  },
  closeIcon: {
    fontSize: 12,
    display: 'flex',
    width: 19,
    height: 19,
    top: 3,
    right: 3,
    position: 'absolute',
    background: 'rgba(255, 255, 255, .88)',
    borderRadius: '50%',
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    transition: 'all .07s ease-out',
    ':hover': {
      boxShadow: '0 5px 10px rgba(0, 0, 0, .3)',
      background: _utils.colors.white
    }
  }
};