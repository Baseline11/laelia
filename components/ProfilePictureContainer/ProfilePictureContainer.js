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

var _CounterIcon = require('../CounterIcon');

var _CounterIcon2 = _interopRequireDefault(_CounterIcon);

var _ProfilePicture = require('../ProfilePicture');

var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProfilePictureContainer(_ref) {
  var image = _ref.image,
      text = _ref.text,
      counter = _ref.counter,
      containerStyleOverride = _ref.containerStyleOverride,
      imageContainerStyleOverride = _ref.imageContainerStyleOverride,
      imageStyleOverride = _ref.imageStyleOverride,
      counterIconStyleOverride = _ref.counterIconStyleOverride;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.profilePictureContainer, containerStyleOverride] },
    _react2.default.createElement(_ProfilePicture2.default, {
      image: image,
      text: text,
      containerStyleOverride: imageContainerStyleOverride,
      imageStyleOverride: imageStyleOverride
    }),
    _react2.default.createElement(_CounterIcon2.default, { counter: counter, containerStyleOverride: counterIconStyleOverride })
  );
}

ProfilePictureContainer.propTypes = {
  image: _propTypes2.default.string,
  text: _propTypes2.default.string,
  counter: _propTypes2.default.number.isRequired,
  containerStyleOverride: _propTypes2.default.object,
  imageStyleOverride: _propTypes2.default.object,
  counterIconStyleOverride: _propTypes2.default.object,
  imageContainerStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(ProfilePictureContainer);