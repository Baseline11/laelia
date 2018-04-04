'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _ActionButton = require('../ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _ActionPanel = require('../ActionPanel');

var _ActionPanel2 = _interopRequireDefault(_ActionPanel);

var _SvgIcon = require('../SvgIcon');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionWrapper = function (_Component) {
  _inherits(ActionWrapper, _Component);

  function ActionWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionWrapper.__proto__ || Object.getPrototypeOf(ActionWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isVisible: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionWrapper, [{
    key: 'updateVisible',
    value: function updateVisible() {
      this.setState({ isVisible: !this.state.isVisible });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var wrapperStyles = {
        position: 'relative'
      };

      var panelStyles = {
        position: 'absolute'
      };

      var handleToggle = function handleToggle() {
        return _this2.updateVisible();
      };

      return _react2.default.createElement(
        'div',
        { style: wrapperStyles },
        _react2.default.createElement(
          _ActionButton2.default,
          { text: 'Test', action: handleToggle, styleOverride: this.props.buttonStylesOverride },
          _react2.default.createElement(_SvgIcon.IconActionMore, { width: 24, height: 24, fill: '#ffffff' })
        ),
        _react2.default.createElement(_ActionPanel2.default, {
          actions: this.props.actions,
          visible: this.state.isVisible,
          styleOverride: [panelStyles, this.props.panelStylesOverride],
          panelLinkStylesOverride: this.props.panelLinkStylesOverride
        })
      );
    }
  }]);

  return ActionWrapper;
}(_react.Component);

ActionWrapper.propTypes = {
  actions: _propTypes2.default.array.isRequired,
  buttonStylesOverride: _propTypes2.default.object,
  panelStylesOverride: _propTypes2.default.object,
  panelLinkStylesOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(ActionWrapper);