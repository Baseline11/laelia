'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _TextArea = require('../../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _CharacterLimiter = require('../CharacterLimiter');

var _CharacterLimiter2 = _interopRequireDefault(_CharacterLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialLimitState = 6;
var limiter = initialLimitState;
var updateState = function updateState(newValue) {
  limiter = newValue.target.value.length < initialLimitState ? initialLimitState - newValue.target.value.length : 0;
};

// const onChangeHandler = (e) => updateState(e.target.value);
// const TextAreaInstance = ({handler, limit}) => <TextArea handleOnChange={handler} limit={limit} />;
var TextAreaInstance = function TextAreaInstance(_ref) {
  var changeHandler = _ref.changeHandler,
      limit = _ref.limit;
  return _react2.default.createElement(_TextArea2.default, { handleOnChange: changeHandler, maxLength: limit });
};

// const WrappedComponent = CharacterLimiter(TextAreaInstance, limiter);

(0, _react3.storiesOf)('CharacterLimiter', module)
// .add('Default', () => (
//   <WrappedComponent changeHandler={updateState} limit={limiter} />
// ))
.add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_CharacterLimiter2.default, { component: TextAreaInstance, limit: limiter })
  )
  // ))
  // .add('Default', () => (
  //   <CharacterLimiter limit={limiter}>
  //     <TextArea handleOnChange={updateState} maxLength={limiter} />
  //   </CharacterLimiter>
  ;
});