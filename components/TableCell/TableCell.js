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

function TableCell(_ref) {
  var data = _ref.data,
      styleOverride = _ref.styleOverride,
      children = _ref.children;

  var content = !children ? data : children;

  return _react2.default.createElement(
    'td',
    { style: [_styles2.default.tableRowCell, styleOverride] },
    content
  );
}

TableCell.propTypes = {
  data: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  styleOverride: _propTypes2.default.object,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element])
};

exports.default = (0, _radium2.default)(TableCell);