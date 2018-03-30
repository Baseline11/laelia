'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableWrapper = function TableWrapper(_ref) {
  var story = _ref.story;
  return _react2.default.createElement(
    'table',
    { cellPadding: '0', cellSpacing: '0' },
    story
  );
};

TableWrapper.propTypes = {
  story: _propTypes2.default.element
};

var headerColumns = ['user name', 'user id', 'direction', 'updated'];

(0, _react3.storiesOf)('TableHeader', module).addDecorator(function (story) {
  return _react2.default.createElement(TableWrapper, { story: story() });
}).add('Default', function () {
  return _react2.default.createElement(_index2.default, { columns: headerColumns });
}).add('Sort Descending', function () {
  return _react2.default.createElement(_index2.default, { columns: headerColumns, sortBy: headerColumns[1], sortOrder: 'desc', action: (0, _addonActions.action)('TableHeaderCell clicked') });
}).add('Sort by Updated column', function () {
  return _react2.default.createElement(_index2.default, { columns: headerColumns, sortBy: headerColumns[3], action: (0, _addonActions.action)('TableHeaderCell clicked') });
});