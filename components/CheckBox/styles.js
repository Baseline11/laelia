'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

exports.default = {
  checkboxContainer: {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    height: 20,
    width: 20,
    backgroundColor: _utils.colors.white,
    border: '1px solid ' + _utils.colors.gray,
    borderRadius: 3
  },
  checkboxContainerChecked: {
    backgroundColor: _utils.colors.pictonBlue,
    border: '1px solid ' + _utils.colors.pictonBlue
  },
  checkboxContainerDisabled: {
    cursor: 'not-allowed',
    backgroundColor: _utils.colors.lightGrey,
    border: '1px solid ' + _utils.colors.lightGrey
  },
  checkboxStyle: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    width: 'inherit',
    height: 'inherit',
    zIndex: 2
  },
  checkboxStyleDisabled: {
    display: 'none'
  },
  spanCheckbox: {
    left: 6,
    top: 2,
    width: 5,
    height: 10,
    borderColor: _utils.colors.white,
    borderStyle: 'solid',
    borderWidth: '0 3px 3px 0',
    WebkitTransform: 'rotate(45deg)',
    MsTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)',
    position: 'absolute',
    zIndex: 1
  },
  spanCheckboxChecked: {
    borderColor: _utils.colors.white
  },
  spanCheckboxDisabled: {
    borderColor: _utils.colors.silver,
    zIndex: 2
  }
};