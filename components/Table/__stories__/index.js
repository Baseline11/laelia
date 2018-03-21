'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _lodash = require('lodash');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _TableCell = require('../../TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _ActionButton = require('../../ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_faker2.default.seed(666);

var dates = ['Sat Jul 08 2017', 'Sun Aug 09 2016', 'Mon Sep 04 2015', 'Sat Jul 08 2017', 'Sun Aug 09 2016', 'Mon Sep 04 2015'];

var data = (0, _lodash.times)(6, function (index) {
  return {
    userName: _faker2.default.name.findName(),
    userId: _faker2.default.random.uuid().substr(0, 18),
    created: dates[index],
    status: _faker2.default.random.boolean() ? 'active' : 'inactive'
  };
});

var headerColumns = ['Column 1', 'Second Column', 'Date', 'Status'];

(0, _react3.storiesOf)('Table', module).add('Default', function () {
  return _react2.default.createElement(
    _index2.default,
    { data: data },
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-1', dataKey: 'userName' }),
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-2', dataKey: 'userId' }),
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-3', dataKey: 'created' }),
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-4', dataKey: 'status' })
  );
}).add('With custom cell content', function () {
  return _react2.default.createElement(
    _index2.default,
    { data: data },
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-1', dataKey: 'userName' }),
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-2', dataKey: 'userId' }),
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-3', dataKey: 'created' }),
    _react2.default.createElement(
      _TableCell2.default,
      { key: 'TableCell-4', dataKey: 'status' },
      _react2.default.createElement(_ActionButton2.default, { text: '\uD83D\uDCAC', action: (0, _addonActions.action)('ActionButton clicked') })
    )
  );
}).add('With predefined header columns', function () {
  return _react2.default.createElement(
    _index2.default,
    { data: data, headerColumns: headerColumns },
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-1', dataKey: 'userName' }),
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-2', dataKey: 'userId' }),
    _react2.default.createElement(_TableCell2.default, { key: 'TableCell-3', dataKey: 'created' }),
    _react2.default.createElement(
      _TableCell2.default,
      { key: 'TableCell-4', dataKey: 'status' },
      _react2.default.createElement(_ActionButton2.default, { text: '\uD83D\uDCAC', action: (0, _addonActions.action)('ActionButton clicked') })
    )
  );
});