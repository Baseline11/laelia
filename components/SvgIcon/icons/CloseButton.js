'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CloseButton(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { width: width, height: height, viewBox: '0 0 11 11' },
    _react2.default.createElement('path', { fill: fill, d: 'M6.613 5.492l4.27 4.27a.397.397 0 0 1 0 .56l-.56.56a.397.397 0 0 1-.56 0l-4.269-4.27-4.27 4.27a.397.397 0 0 1-.56 0l-.56-.56a.397.397 0 0 1 0-.56l4.27-4.27-4.27-4.269a.397.397 0 0 1 0-.56l.56-.56a.397.397 0 0 1 .56 0l4.27 4.27L9.763.103a.397.397 0 0 1 .56 0l.56.56a.397.397 0 0 1 0 .56l-4.27 4.269z' })
  );
}

CloseButton.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

CloseButton.defaultProps = {
  width: 19,
  height: 19,
  fill: '#000'
};

exports.default = CloseButton;