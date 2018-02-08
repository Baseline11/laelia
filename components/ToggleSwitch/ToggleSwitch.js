'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _lodash = require('lodash');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ToggleSwitch(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      action = _ref.action;

  var handleOnClick = !disabled ? action : (0, _lodash.noop)();

  return _react2.default.createElement(
    'div',
    {
      onClick: handleOnClick,
      style: [_styles2.default.switchContainer, active && _styles2.default.switchContainerActive, disabled && _styles2.default.switchContainerDisabled]
    },
    _react2.default.createElement('span', {
      style: [_styles2.default.switch, active && _styles2.default.switchActive, disabled && _styles2.default.switchDisabled]
    })
  );
}

ToggleSwitch.propTypes = {
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  action: _propTypes2.default.func
};

exports.default = (0, _radium2.default)(ToggleSwitch);