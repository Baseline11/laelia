'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Note(_ref) {
  var data = _ref.data,
      classes = _ref.classes;

  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root, elevation: 4 },
    _react2.default.createElement(
      'p',
      { style: _styles3.default.content },
      data.content
    ),
    _react2.default.createElement(
      'p',
      { style: _styles3.default.authorLabel },
      'Created ' + data.date + ' by ' + data.author
    )
  );
}

Note.propTypes = {
  data: _propTypes2.default.object,
  classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(_styles3.default)(Note);