'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

exports.default = {
  switchContainer: {
    position: 'relative',
    display: 'inline-block',
    width: 60,
    height: 34,
    cursor: 'pointer',
    background: _utils.colors.silver,
    borderRadius: 34,
    transition: 'background .4s'
  },
  switchContainerActive: {
    background: _utils.colors.sushi
  },
  switchContainerDisabled: {
    background: _utils.colors.dustyGray
  },
  switch: {
    position: 'absolute',
    left: 4,
    bottom: 4,
    height: 26,
    width: 26,
    borderRadius: '50%',
    background: _utils.colors.white,
    transition: 'transform .4s'
  },
  switchActive: {
    transform: 'translateX(26px)'
  },
  switchDisabled: {
    background: _utils.colors.silver
  }
};