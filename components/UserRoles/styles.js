'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  userRolesList: _extends({}, _utils.fonts.baseText, {
    width: '100%',
    color: _utils.colors.black,
    textTransform: 'capitalize',
    listStyle: 'none',
    fontSize: 12,
    margin: 0,
    padding: 0,
    textAlign: 'center'
  }),
  userRolesListElement: {
    display: 'inline-block',
    padding: '0px 15px'
  },
  userRolesListElementTitle: {
    paddingBottom: 9,
    fontWeight: 'bold'
  },
  userRolesListElementCheckbox: {
    margin: 'auto',
    width: '50%'
  }
};