'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('material-ui-icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppMessage = function (_Component) {
  _inherits(AppMessage, _Component);

  function AppMessage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppMessage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppMessage.__proto__ || Object.getPrototypeOf(AppMessage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: true
    }, _this.handleClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppMessage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoHide = _props.autoHide,
          classes = _props.classes,
          message = _props.message,
          messageType = _props.messageType;


      return _react2.default.createElement(_Snackbar2.default, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: this.state.open,
        autoHideDuration: autoHide ? 3000 : null,
        onClose: this.handleClose,
        SnackbarContentProps: {
          classes: {
            root: (0, _classnames2.default)(messageType === 'success' && classes.success, messageType === 'error' && classes.error)
          }
        },
        message: _react2.default.createElement(
          'span',
          { style: _styles3.default.message },
          message
        ),
        action: _react2.default.createElement(
          _IconButton2.default,
          {
            key: 'close',
            'aria-label': 'Close',
            color: 'inherit',
            onClick: this.handleClose
          },
          _react2.default.createElement(_Close2.default, null)
        )
      });
    }
  }]);

  return AppMessage;
}(_react.Component);

AppMessage.propTypes = {
  autoHide: _propTypes2.default.bool,
  message: _propTypes2.default.string,
  messageType: _propTypes2.default.string,
  classes: _propTypes2.default.func.isRequired
};

exports.default = (0, _styles.withStyles)(_styles3.default)(AppMessage);