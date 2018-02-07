'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoBubble = function (_Component) {
  _inherits(InfoBubble, _Component);

  function InfoBubble() {
    _classCallCheck(this, InfoBubble);

    return _possibleConstructorReturn(this, (InfoBubble.__proto__ || Object.getPrototypeOf(InfoBubble)).apply(this, arguments));
  }

  _createClass(InfoBubble, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          forceVisible = _props.forceVisible;

      var isVisible = _radium2.default.getState(this.state, 'radium-key-container', ':hover') || forceVisible;

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.infoBubbleContainer },
        _react2.default.createElement(
          'span',
          { style: _styles2.default.infoIcon, key: 'radium-key-container' },
          _react2.default.createElement(
            'svg',
            { width: 16, viewBox: '0 0 512 512' },
            _react2.default.createElement('path', { d: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z' })
          )
        ),
        _react2.default.createElement(
          'div',
          { key: 'radium-key-wrapper', style: [_styles2.default.infoWrapper, isVisible && _styles2.default.infoWrapperVisible] },
          _react2.default.createElement(
            'span',
            { style: _styles2.default.infoContent },
            text
          ),
          _react2.default.createElement(
            'span',
            { style: _styles2.default.mainArrow },
            _react2.default.createElement('span', { style: _styles2.default.subArrow })
          )
        )
      );
    }
  }]);

  return InfoBubble;
}(_react.Component);

InfoBubble.propTypes = {
  text: _propTypes2.default.string,
  forceVisible: _propTypes2.default.bool
};

exports.default = (0, _radium2.default)(InfoBubble);