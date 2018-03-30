'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _ActionButton = require('../../ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowColumns = {
  userName: 'Rachid Azizi',
  userId: '1234567890',
  created: 'Sep 27, 2016',
  status: 'active'
};

var TableWrapper = function TableWrapper(_ref) {
  var story = _ref.story;
  return _react2.default.createElement(
    'table',
    { cellPadding: '0', cellSpacing: '0' },
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        story
      )
    )
  );
};

TableWrapper.propTypes = {
  story: _propTypes2.default.element
};

var TableCells = function TableCells() {
  return [_react2.default.createElement(_index2.default, { key: 'TableCell-1', data: rowColumns.userName }), _react2.default.createElement(_index2.default, { key: 'TableCell-2', data: rowColumns.userId }), _react2.default.createElement(_index2.default, { key: 'TableCell-3', data: rowColumns.created }), _react2.default.createElement(_index2.default, { key: 'TableCell-4', data: rowColumns.status })];
};

var TableCellsWithCustomContent = function TableCellsWithCustomContent() {
  return [_react2.default.createElement(_index2.default, { key: 'TableCell-1', data: rowColumns.userName }), _react2.default.createElement(_index2.default, { key: 'TableCell-2', data: rowColumns.userId }), _react2.default.createElement(_index2.default, { key: 'TableCell-3', data: rowColumns.created }), _react2.default.createElement(
    _index2.default,
    { key: 'TableCell-4', data: rowColumns.status },
    _react2.default.createElement(_ActionButton2.default, { text: '\uD83D\uDCAC', action: (0, _addonActions.action)('ActionButton clicked') })
  )];
};

(0, _react3.storiesOf)('TableCell', module).addDecorator(function (story) {
  return _react2.default.createElement(TableWrapper, { story: story() });
}).add('Default', function () {
  return _react2.default.createElement(TableCells, null);
}).add('With a custom content', function () {
  return _react2.default.createElement(TableCellsWithCustomContent, null);
});