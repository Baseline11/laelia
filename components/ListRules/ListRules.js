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

var _SvgIcon = require('../SvgIcon');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListRules(_ref) {
  var rules = _ref.rules,
      listRulesStyleOverride = _ref.listRulesStyleOverride,
      rulesValidations = _ref.rulesValidations,
      isVisible = _ref.isVisible;

  return _react2.default.createElement(
    'div',
    {
      style: [_styles2.default.rulesContainerWrapper, listRulesStyleOverride, isVisible && _styles2.default.showRulesContainer]
    },
    _react2.default.createElement('span', { style: _styles2.default.topArrow }),
    _react2.default.createElement(
      'ul',
      {
        style: [_styles2.default.rulesContainer]
      },
      rules.map(function (val) {
        return _react2.default.createElement(
          'li',
          {
            key: 'rule-' + val.key,
            value: val.key,
            style: [_styles2.default.listRulesItems]
          },
          _react2.default.createElement(
            'span',
            { style: [_styles2.default.listRulesItemsContainer] },
            val.value,
            _react2.default.createElement(
              'span',
              { key: 'hidePassSVG', style: [_styles2.default.svgIcon, rulesValidations[val.key] && _styles2.default.svgIconShow] },
              _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'checkedArrow' })
            )
          )
        );
      })
    )
  );
}

ListRules.propTypes = {
  rules: _propTypes2.default.array.isRequired,
  isVisible: _propTypes2.default.bool,
  listRulesStyleOverride: _propTypes2.default.object,
  rulesValidations: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(ListRules);