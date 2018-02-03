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

function TableHeader(_ref) {
  var columns = _ref.columns,
      styleOverride = _ref.styleOverride,
      sortBy = _ref.sortBy,
      _ref$sortOrder = _ref.sortOrder,
      sortOrder = _ref$sortOrder === undefined ? 'asc' : _ref$sortOrder,
      action = _ref.action;

  var sortInverted = sortOrder === 'desc';

  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      { style: [_styles2.default.tableHeaderRow, styleOverride] },
      columns.map(function (column, index) {
        var isCellSelected = sortBy === column;

        return _react2.default.createElement(
          'th',
          {
            style: [_styles2.default.tableHeaderCell, isCellSelected && _styles2.default.tableHeaderCellSelected],
            key: 'column-header-' + index,
            onClick: action
          },
          column,
          isCellSelected && _react2.default.createElement(
            'svg',
            { style: [_styles2.default.tableHeaderSortIcon, sortInverted && _styles2.default.tableHeaderSortIconInverted, styleOverride], width: '10', height: '10', viewBox: '0 0 1792 1792' },
            _react2.default.createElement('path', { d: 'M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z' })
          )
        );
      })
    )
  );
}

TableHeader.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  sortBy: _propTypes2.default.string,
  sortOrder: _propTypes2.default.string,
  styleOverride: _propTypes2.default.object,
  action: _propTypes2.default.func
};

exports.default = (0, _radium2.default)(TableHeader);