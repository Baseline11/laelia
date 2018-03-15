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

function LanguageTabs(_ref) {
  var handleOnClick = _ref.handleOnClick,
      languages = _ref.languages,
      selectedTab = _ref.selectedTab;

  return _react2.default.createElement(
    'div',
    { style: _styles2.default.tabWrapper },
    languages.map(function (language, index) {
      return _react2.default.createElement(
        'button',
        {
          key: 'button-' + index,
          onClick: handleOnClick,
          style: [_styles2.default.buttonLanguage, selectedTab === language && _styles2.default.buttonSelected]
        },
        language
      );
    })
  );
}

LanguageTabs.propTypes = {
  handleOnClick: _propTypes2.default.func.isRequired,
  selectedTab: _propTypes2.default.string,
  languages: _propTypes2.default.array.isRequired
};

exports.default = (0, _radium2.default)(LanguageTabs);