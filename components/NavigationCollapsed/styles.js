'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  leftMenuContainer: _extends({}, _utils.fonts.baseText, {
    display: 'inline-block',
    position: 'relative',
    width: 52,
    height: '100vh',
    backgroundColor: _utils.colors.darkGrey
  }),
  submenuContainer: {
    display: 'none',
    position: 'absolute',
    minWidth: 180,
    left: 49,
    top: 10,
    backgroundColor: _utils.colors.mineShaft
  },
  submenuContainerVisible: {
    display: 'block'
  },
  submenuLink: {
    display: 'block',
    textDecoration: 'none',
    padding: '8px 16px 8px 27px',
    color: _utils.colors.dustyGray,
    fontSize: 14,
    textTransform: 'capitalize',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: _utils.colors.tundora,
      color: _utils.colors.white
    }
  },
  submenuLinkHeader: {
    display: 'block',
    textDecoration: 'none',
    padding: '12px 16px 12px 27px',
    backgroundColor: _utils.colors.tundora,
    color: _utils.colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase'
  },
  submenuLinkSelected: {
    backgroundColor: _utils.colors.tundora,
    color: _utils.colors.white
  },
  leftArrow: {
    width: 0,
    height: 0,
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderRight: '9px solid ' + _utils.colors.tundora,
    position: 'absolute',
    left: -8,
    top: 13
  },
  menuLogoContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 77,
    width: 52,
    cursor: 'pointer',
    backgroundColor: _utils.colors.mineShaft,
    ':hover': {}
  },
  subMenuItemWrapper: {
    padding: '14px 0px',
    opacity: 0,
    display: 'none'
  },
  subMenuItemWrapperShow: {
    opacity: 1,
    display: 'block'
  },
  menuItemContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 46,
    padding: '20px 0px',
    cursor: 'pointer',
    borderLeft: '3px solid ' + _utils.colors.darkGrey,
    borderRight: '3px solid ' + _utils.colors.darkGrey,
    ':hover': {
      backgroundColor: _utils.colors.mineShaft,
      borderLeft: '3px solid ' + _utils.colors.pictonBlue
    }
  },
  menuItemContainerVisible: {
    backgroundColor: _utils.colors.mineShaft,
    borderLeft: '3px solid ' + _utils.colors.pictonBlue
  },
  menuLogoArrow: {
    display: 'none',
    width: 12,
    height: 12,
    borderColor: _utils.colors.dustyGray,
    borderStyle: 'solid',
    borderWidth: '0 3px 3px 0',
    WebkitTransform: 'rotate(-45deg)',
    MsTransform: 'rotate(-45deg)',
    transform: 'rotate(-45deg)',
    zIndex: 1,
    boxSizing: 'content-box',
    marginLeft: -7,
    ':hover': {
      borderColor: _utils.colors.lightGrey
    }
  },
  menuLogoArrowVisible: {
    display: 'inline-block'
  },
  LogoIcon: {},
  hideLogoIcon: {
    display: 'none',
    opacity: 0
  }
};