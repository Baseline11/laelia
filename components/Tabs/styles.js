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
    borderTop: '1px solid ' + _utils.colors.white,
    color: _utils.colors.dustyGray,
    ':hover': {
      color: _utils.colors.pictonBlue,
      borderTop: '1px solid ' + _utils.colors.pictonBlue
    }
  },
  tabStyleSelected: {
    color: _utils.colors.pictonBlue,
    borderTop: '2px solid ' + _utils.colors.pictonBlue
  },
  secondaryTabWrapper: _extends({}, _utils.fonts.baseText, {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }),
  tabSecondaryStyle: {
    height: 70,
    padding: '0 30px',
    backgroundColor: _utils.colors.white,
    alignSelf: 'center',
    border: 'none',
    cursor: 'pointer',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    outline: 'none',
    margin: '0 2px 0',
    color: _utils.colors.dustyGray,
    ':hover': {
      color: _utils.colors.white,
      backgroundColor: _utils.colors.dustyGray,
      height: 80,
      padding: '10px 0 30px',
      margin: '-10px 2px 0',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    }
  },
  tabSecondaryStyleSelected: {
    color: _utils.colors.white,
    backgroundColor: _utils.colors.dustyGray,
    padding: '10px 0 30px',
    margin: '-10px 2px 0',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 80
  }
};