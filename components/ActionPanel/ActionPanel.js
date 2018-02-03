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

function ActionPanel(_ref) {
  var actions = _ref.actions,
      _ref$visible = _ref.visible,
      visible = _ref$visible === undefined ? false : _ref$visible;

  return visible && _react2.default.createElement(
    'div',
    { style: _styles2.default.basePanel },
    actions.map(function (action, index) {
      var isFirstChild = index === 0;
      var isLastChild = index === actions.length - 1;

      return _react2.default.createElement(
        'button',
        {
          key: index,
          style: [_styles2.default.basePanelAction, isFirstChild && _styles2.default.basePanelActionFirst, isLastChild && _styles2.default.basePanelActionLast]
        },
        _react2.default.createElement(
          'a',
          { key: action.text, style: _styles2.default.basePanelActionLink, href: action.value },
          action.text
        )
      );
    })
  );
}

ActionPanel.propTypes = {
  actions: _propTypes2.default.array.isRequired,
  visible: _propTypes2.default.bool
};

exports.default = (0, _radium2.default)(ActionPanel);