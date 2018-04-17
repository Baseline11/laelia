'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  rulesContainerWrapper: _extends({}, _utils.fonts.baseText, {
    margin: 0,
    position: 'relative',
    padding: '20px 20px 10px 40px',
    width: 'inherit',
    border: '1px solid ' + _utils.colors.quillGray,
    background: _utils.colors.white,
    fontSize: 12,
    color: _utils.colors.gray,
    transition: 'opacity ease-in .4s',
    opacity: 0,
    borderRadius: 4
  }),
  rulesContainer: {
    paddingLeft: 0,
    margin: 0
  },
  listRulesItems: {
    position: 'relative',
    marginBottom: 15
  },
  showRulesContainer: {
    opacity: 1
  },
  svgIcon: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: -6,
    marginLeft: 10,
    opacity: 0,
    transition: 'opacity ease-in .3s'
  },
  svgIconShow: {
    opacity: 1
  },
  listRulesItemsContainer: {
    marginLeft: -4
  },
  topArrow: {
    backgroundColor: _utils.colors.white,
    position: 'absolute',
    top: -6,
    left: 60,
    width: 9,
    height: 9,
    borderColor: _utils.colors.dustyGray,
    borderStyle: 'solid',
    borderWidth: '0 1px 1px 0',
    WebkitTransform: 'rotate(225deg)',
    MsTransform: 'rotate(225deg)',
    transform: 'rotate(225deg)',
    boxSizing: 'content-box'
  }
};