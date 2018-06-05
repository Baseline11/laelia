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
    borderBottom: '1px solid ' + _utils.colors.gallery
  }),
  tabStyle: {
    flex: 1,
    background: 'none',
    alignSelf: 'stretch',
    cursor: 'pointer',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    outline: 'none',
    borderColor: _utils.colors.white,
    borderStyle: 'solid',
    borderWidth: '2px 0px 0 0',
    padding: 15,
    color: _utils.colors.dustyGray,
    ':hover': {
      color: _utils.colors.pictonBlue,
      borderColor: _utils.colors.pictonBlue
    }
  },
  tabStyleSelected: {
    color: _utils.colors.pictonBlue,
    borderColor: _utils.colors.pictonBlue,
    borderStyle: 'solid',
    borderWidth: '2px 0px 0 0'
  },
  secondaryTabWrapper: _extends({}, _utils.fonts.baseText, {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }),
  tabSecondaryStyle: {
    height: 40,
    padding: '0 20px',
    backgroundColor: _utils.colors.white,
    alignSelf: 'center',
    border: 'none',
    cursor: 'pointer',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    outline: 'none',
    margin: '0 2px 0 0',
    color: _utils.colors.dustyGray,
    ':hover': {
      color: _utils.colors.white,
      backgroundColor: _utils.colors.dustyGray,
      height: 45,
      padding: '5px 20px 0 ',
      margin: '-5px 2px 0 0',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    }
  },
  tabSecondaryStyleSelected: {
    color: _utils.colors.white,
    backgroundColor: _utils.colors.dustyGray,
    padding: '5px 20px 0',
    margin: '-5px 2px 0 0',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 45
  }
};