'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

exports.default = {
  profilePictureContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    borderRadius: '50%'
  },
  profileTextStyle: _extends({
    width: 100,
    height: 100,
    borderRadius: '50%'
  }, _utils.fonts.baseText, {
    backgroundColor: _utils.colors.pictonBlue,
    fontSize: 44,
    color: _utils.colors.white
  })
};