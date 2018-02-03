'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

var borderRadiusActionPanel = 3;

exports.default = {
  basePanel: _extends({}, _utils.fonts.baseText, {
    border: '1px solid rgba(0, 0, 0, .15)',
    borderRadius: borderRadiusActionPanel,
    boxShadow: '0 5px 10px rgba(0, 0, 0, .175)',
    display: 'inline-block',
    minWidth: '100px'
  }),
  basePanelAction: _extends({}, _utils.fonts.baseText, {
    outline: 0,
    background: 'none',
    border: 'none',
    display: 'block',
    padding: 0,
    width: '100%',
    textAlign: 'left',
    color: 'rgba(0, 0, 0, .7)',
    margin: 'none',
    ':hover': {
      background: _utils.colors.pictonBlue,
      color: _utils.colors.white,
      cursor: 'pointer'
    }
  }),
  basePanelActionFirst: {
    ':hover': {
      borderRadius: borderRadiusActionPanel + 'px ' + borderRadiusActionPanel + 'px 0 0'
    }
  },
  basePanelActionLast: {
    ':hover': {
      borderRadius: '0 0 ' + borderRadiusActionPanel + 'px ' + borderRadiusActionPanel + 'px'
    }
  },
  basePanelActionLink: {
    color: 'rgba(0, 0, 0, .7)',
    textDecoration: 'none',
    display: 'block',
    padding: '10px 20px',
    height: '100%',
    width: '100%',
    ':hover': {
      color: _utils.colors.white
    }
  }
};