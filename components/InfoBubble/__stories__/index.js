'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react3 = require('@storybook/react');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentWrapper = function ContentWrapper(_ref) {
  var story = _ref.story;
  return _react2.default.createElement(
    'div',
    { style: { margin: 150 } },
    story
  );
};

ContentWrapper.propTypes = {
  story: _propTypes2.default.element
};

(0, _react3.storiesOf)('InfoBubble', module).addDecorator(function (story) {
  return _react2.default.createElement(ContentWrapper, { story: story() });
}).add('Is not visible by default', function () {
  return _react2.default.createElement(_index2.default, { text: 'This is info text' });
}).add('Is forced visible', function () {
  return _react2.default.createElement(_index2.default, { text: 'This is info text', forceVisible: true });
});