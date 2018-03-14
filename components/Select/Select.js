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
  var selectName = _ref.selectName,
      selectedValue = _ref.selectedValue,
      selectValues = _ref.selectValues,
      handleOnChange = _ref.handleOnChange,
      wrapperStyleOverride = _ref.wrapperStyleOverride;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.inputWrapper, wrapperStyleOverride] },
    _react2.default.createElement(
      'select',
      { name: selectName, onChange: handleOnChange, style: _styles2.default.selectList, defaultValue: selectedValue },
      selectValues.map(function (val) {
        return _react2.default.createElement(
          'option',
          { key: 'option-' + val.key, value: val.key },
          val.value
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
  selectName: _propTypes2.default.string,
  selectedValue: _propTypes2.default.string.isRequired,
  selectValues: _propTypes2.default.array.isRequired,
  handleOnChange: _propTypes2.default.func.isRequired,
  wrapperStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(Select);