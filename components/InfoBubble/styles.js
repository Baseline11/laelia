'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  infoBubbleContainer: {
    display: 'inline-block',
    position: 'relative'
  },
  infoIcon: {
    display: 'inline-block',
    maxWidth: 16,
    ':hover': {}
  },
  infoWrapper: {
    display: 'inline-block',
    height: 0,
    width: 0,
    visibility: 'hidden',
    whiteSpace: 'nowrap',
    border: '1px solid rgba(0, 0, 0, .2)',
    boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
    borderRadius: 6,
    background: _utils.colors.white,
    textAlign: 'start',
    padding: '10px 15px',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, -30px)',
    transition: 'transform .2s ease'
  },
  infoWrapperVisible: {
    height: 'auto',
    width: 'auto',
    visibility: 'visible',
    transform: 'translate(-50%, -35px)'
  },
  infoContent: _extends({}, _utils.fonts.baseText),
  mainArrow: {
    display: 'block',
    width: 0,
    height: 0,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 11px)',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopColor: 'rgba(0, 0, 0, .15)',
    borderWidth: '11px 11px 0 11px'
  },
  subArrow: {
    display: 'block',
    width: 0,
    height: 0,
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, -1px)',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopColor: _utils.colors.white,
    borderWidth: '10px 10px 0 10px'
  }
};