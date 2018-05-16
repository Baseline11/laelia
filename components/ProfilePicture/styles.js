'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

exports.default = {
  profilePictureContainer: {
    position: 'relative',
    backgroundColor: _utils.colors.white,
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
  }
};