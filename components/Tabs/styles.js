'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

exports.default = {
  tabWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 100,
    borderBottom: '2px solid ' + _utils.colors.silver
  },
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
  }
};