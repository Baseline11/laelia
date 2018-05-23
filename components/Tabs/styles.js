'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  tabWrapper: _extends({}, _utils.fonts.baseText, {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 100,
    borderBottom: '2px solid ' + _utils.colors.silver
  }),
  tabStyle: {
    flex: 1,
    height: '100%',
    background: 'none',
    alignSelf: 'center',
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    outline: 'none',
    borderTop: '2px solid ' + _utils.colors.white,
    color: _utils.colors.dustyGray,
    ':hover': {
      color: _utils.colors.pictonBlue,
      borderTop: '2px solid ' + _utils.colors.pictonBlue
    }
  },
  tabStyleSelected: {
    color: _utils.colors.pictonBlue,
    borderTop: '2px solid ' + _utils.colors.pictonBlue
  },
  secondaryTabWrapper: _extends({}, _utils.fonts.baseText, {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 80
  }),
  tabSecondaryStyle: {
    flex: 1,
    height: 70,
    backgroundColor: _utils.colors.white,
    alignSelf: 'center',
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    outline: 'none',
    marginRight: 2,
    color: _utils.colors.dustyGray,
    ':hover': {
      color: _utils.colors.white,
      backgroundColor: _utils.colors.dustyGray,
      height: 80,
      paddingTop: 10,
      marginTop: -10,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    }
  },
  tabSecondaryStyleSelected: {
    color: _utils.colors.white,
    backgroundColor: _utils.colors.dustyGray,
    height: 80,
    paddingTop: 10,
    marginTop: -10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  }

};