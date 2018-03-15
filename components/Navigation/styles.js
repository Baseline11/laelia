'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

var drawerWidth = 280;

var muiStyles = function muiStyles(theme) {
  return {
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
      maxWidth: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    navigationHeader: _extends({
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 8px',
      background: _utils.colors.mineShaft
    }, theme.mixins.toolbar),
    navigationLogoWrapper: {
      width: '100%',
      overflowX: 'hidden'
    },
    navigationLogo: {
      boxSizing: 'border-box',
      width: drawerWidth - theme.spacing.unit * 6,
      transform: 'translateX(' + theme.spacing.unit * 2 + 'px)'
    },
    navigationItemsWrapper: {
      color: _utils.colors.dustyGray
    }
  };
};

exports.default = muiStyles;