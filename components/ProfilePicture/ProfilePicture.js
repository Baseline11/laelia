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

function ProfilePicture(_ref) {
  var image = _ref.image,
      containerStyleOverride = _ref.containerStyleOverride,
      imageStyleOverride = _ref.imageStyleOverride;

  return _react2.default.createElement(
    'div',
    { style: [_styles2.default.profilePictureContainer, containerStyleOverride] },
    _react2.default.createElement('img', {
      style: [_styles2.default.imageStyle, imageStyleOverride],
      src: image
    })
  );
}

ProfilePicture.propTypes = {
  image: _propTypes2.default.string.isRequired,
  containerStyleOverride: _propTypes2.default.object,
  imageStyleOverride: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(ProfilePicture);