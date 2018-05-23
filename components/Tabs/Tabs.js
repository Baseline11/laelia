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

function Tab(_ref) {
  var handleOnClick = _ref.handleOnClick,
      tabs = _ref.tabs,
      selectedTab = _ref.selectedTab,
      containerStyleOverride = _ref.containerStyleOverride,
      tabStyleOverride = _ref.tabStyleOverride,
      type = _ref.type;

  var wrapperStyleClass = type === 'secondaryStyle' ? _styles2.default.secondaryTabWrapper : _styles2.default.tabWrapper;
  var styleClass = type === 'secondaryStyle' ? _styles2.default.tabSecondaryStyle : _styles2.default.tabStyle;
  var styleSelectedClass = type === 'secondaryStyle' ? _styles2.default.tabSecondaryStyleSelected : _styles2.default.tabStyleSelected;

  return _react2.default.createElement(
    'div',
    { style: [wrapperStyleClass, containerStyleOverride] },
    tabs.map(function (tab, index) {
      return _react2.default.createElement(
        'button',
        {
          key: 'button-' + index,
          onClick: handleOnClick,
          style: [styleClass, selectedTab === tab && styleSelectedClass, tabStyleOverride]
        },
        tab
      );
    })
  );
}

Tab.propTypes = {
  handleOnClick: _propTypes2.default.func.isRequired,
  selectedTab: _propTypes2.default.string,
  tabs: _propTypes2.default.array.isRequired,
  containerStyleOverride: _propTypes2.default.object,
  tabStyleOverride: _propTypes2.default.object,
  type: _propTypes2.default.string
};

exports.default = (0, _radium2.default)(Tab);