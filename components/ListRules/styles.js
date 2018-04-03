'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  rulesContainer: _extends({}, _utils.fonts.baseText, {
    margin: 0,
    padding: '20px 50px 20px 20px',
    width: 'inherit',
    border: '1px solid ' + _utils.colors.quillGray,
    backgroundColor: _utils.colors.white,
    listStyle: 'none',
    fontSize: 12,
    color: _utils.colors.gray,
    position: 'absolute',
    display: 'block',
    top: 0,
    transition: 'opacity ease-in .4s',
    opacity: 0
  }),
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
  }
};