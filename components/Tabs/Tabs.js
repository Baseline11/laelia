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

function MenuPage(_ref) {
  var handleOnClick = _ref.handleOnClick,
      tabs = _ref.tabs,
      selectedTab = _ref.selectedTab,
      containerStyleOverride = _ref.containerStyleOverride,
      tabStyleOverride = _ref.tabStyleOverride;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.tabWrapper, containerStyleOverride] },
    tabs.map(function (tab, index) {
      return _react2.default.createElement(
        'button',
        {
          key: 'button-' + index,
          onClick: handleOnClick,
          style: [_styles2.default.tabStyle, selectedTab === tab && _styles2.default.tabStyleSelected, tabStyleOverride]
        },
        tab
      );
    })
  );
}

MenuPage.propTypes = {
  handleOnClick: _propTypes2.default.func.isRequired,
  selectedTab: _propTypes2.default.string,
  tabs: _propTypes2.default.array.isRequired,
  containerStyleOverride: _propTypes2.default.array.object,
  tabStyleOverride: _propTypes2.default.array.object
};

exports.default = (0, _radium2.default)(MenuPage);