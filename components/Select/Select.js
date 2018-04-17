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

function Select(_ref) {
  var name = _ref.name,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      handleOnChange = _ref.handleOnChange,
      wrapperStyleOverride = _ref.wrapperStyleOverride;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.inputWrapper, wrapperStyleOverride] },
    _react2.default.createElement(
      'select',
      { name: name, onChange: handleOnChange, style: _styles2.default.selectList, defaultValue: defaultValue },
      options.map(function (option) {
        return _react2.default.createElement(
          'option',
          { key: 'option-' + option.value, value: option.value },
          option.label
        );
      })
    ),
    _react2.default.createElement(
      'div',
      { style: _styles2.default.selectArrow },
      '\u25BC'
    )
  );
}

Select.propTypes = {
  name: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  options: _propTypes2.default.array,
  handleOnChange: _propTypes2.default.func,
  wrapperStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(Select);