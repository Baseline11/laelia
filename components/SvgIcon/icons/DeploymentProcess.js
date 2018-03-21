'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DeploymentProcess(_ref) {
  var width = _ref.width,
      height = _ref.height,
      fill = _ref.fill;

  return _react2.default.createElement(
    'svg',
    { height: height, width: width, viewBox: '0 0 14 5' },
    _react2.default.createElement('path', {
      fill: fill,
      d: 'M2,5H0V2H2ZM6,5H4V0H6Zm4,0H8V2h2Zm4,0H12V0h2Z'
    })
  );
}

DeploymentProcess.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  fill: _propTypes2.default.string
};

DeploymentProcess.defaultProps = {
  width: 35,
  height: 35,
  fill: '#000'
};

exports.default = DeploymentProcess;