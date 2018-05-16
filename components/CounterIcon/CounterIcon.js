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

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CounterIcon(_ref) {
  var counter = _ref.counter,
      containerStyleOverride = _ref.containerStyleOverride;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.counterIconContainer, containerStyleOverride] },
    counter
  );
}

CounterIcon.propTypes = {
  containerStyleOverride: _propTypes2.default.object,
  counter: _propTypes2.default.number
};

exports.default = (0, _radium2.default)(CounterIcon);