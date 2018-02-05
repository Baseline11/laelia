'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _TableHeader = require('../TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHeaderColumnsFromData = function getHeaderColumnsFromData(children) {
  return children.map(function (column) {
    return column.props.dataKey;
  });
};

function generateCell(rowData, rowProperty, children) {
  var tableCell = children.filter(function (child) {
    return child.props.dataKey === rowProperty;
  })[0];

  return tableCell && _react2.default.createElement(tableCell.type, _extends({}, tableCell.props, {
    key: 'cellID-' + tableCell.key + '-' + rowData[rowProperty]
  }), tableCell.props.children ? tableCell.props.children : rowData[rowProperty]);
}

function Table(_ref) {
  var data = _ref.data,
      headerColumns = _ref.headerColumns,
      styleOverride = _ref.styleOverride,
      disableHeader = _ref.disableHeader,
      children = _ref.children;

  var getHeaderColumns = !disableHeader && headerColumns ? headerColumns : getHeaderColumnsFromData(children);

  return _react2.default.createElement(
    'table',
    { style: [_styles2.default.table, styleOverride], cellPadding: '0', cellSpacing: '0' },
    !disableHeader && _react2.default.createElement(_TableHeader2.default, { columns: getHeaderColumns }),
    _react2.default.createElement(
      'tbody',
      null,
      data.map(function (row, index) {
        return _react2.default.createElement(
          'tr',
          { key: 'table-row-' + index, style: _styles2.default.tableRow },
          Object.keys(row).map(function (cell) {
            return generateCell(row, cell, children);
          })
        );
      })
    )
  );
}

Table.propTypes = {
  data: _propTypes2.default.array,
  headerColumns: _propTypes2.default.array,
  styleOverride: _propTypes2.default.object,
  disableHeader: _propTypes2.default.bool,
  children: _propTypes2.default.array
};

exports.default = (0, _radium2.default)(Table);