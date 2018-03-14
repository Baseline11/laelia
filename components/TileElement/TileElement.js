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

function TileElement(_ref) {
  var wrapperStyleOverride = _ref.wrapperStyleOverride,
      actionOnClick = _ref.actionOnClick,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.tile, wrapperStyleOverride], onClick: actionOnClick },
    children
  );
}

TileElement.propTypes = {
  actionOnClick: _propTypes2.default.func,
  wrapperStyleOverride: _propTypes2.default.object,
  children: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(TileElement);