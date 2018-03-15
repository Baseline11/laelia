'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

exports.default = {
  tabWrapper: {
    width: '100%',
    borderBottom: '1px solid ' + _utils.colors.gray,
    paddingBottom: 8
  },
  buttonLanguage: {
    border: '1px solid ' + _utils.colors.quillGray,
    backgroundColor: _utils.colors.lightGrey,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: 10,
    cursor: 'pointer',
    color: _utils.colors.greyishBrown,
    ':hover': {
      color: _utils.colors.pictonBlue,
      borderColor: _utils.colors.pictonBlue
    }
  },
  buttonSelected: {
    color: _utils.colors.pictonBlue,
    border: '1px solid ' + _utils.colors.pictonBlue
  }
};