'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _lodash = require('lodash');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _SvgIcon = require('../../SvgIcon');

var _utils = require('../../../utils');

var _userGuideItems = require('../../../utils/mocks/userGuideItems');

var _userGuideItems2 = _interopRequireDefault(_userGuideItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleLabel = {
  textAlign: 'center',
  fontSize: 20,
  padding: 10,
  display: 'block',
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 0
};

var description = {
  textAlign: 'center',
  fontSize: 12,
  padding: 10,
  display: 'block',
  margin: 0
};

var svgImageStyle = {
  border: 'none',
  margin: 'auto',
  display: 'block',
  width: 35
};

var tileLink = {
  cursor: 'pointer'
};

(0, _react3.storiesOf)('TileElement', module).add('Default', function () {
  return _react2.default.createElement(
    _index2.default,
    { actionOnClick: (0, _addonActions.action)('On click event'), wrapperStyleOverride: tileLink },
    _react2.default.createElement(
      'span',
      { style: svgImageStyle },
      _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'university', fill: _utils.colors.pictonBlue, width: 35, height: 35 })
    ),
    _react2.default.createElement(
      'h2',
      { style: styleLabel },
      'Default Image'
    ),
    _react2.default.createElement(
      'p',
      { style: description },
      'Aliquam dapibus urna vel lectus scelerisque lobortis. In eget convallis felis.'
    )
  );
}).add('Width External Link', function () {
  return _react2.default.createElement(
    _index2.default,
    { actionOnClick: (0, _addonActions.action)('On click event'), wrapperStyleOverride: tileLink },
    _react2.default.createElement(
      'span',
      { style: svgImageStyle },
      _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'commandCenter', fill: _utils.colors.pictonBlue, width: 35, height: 35 })
    ),
    _react2.default.createElement(
      'h2',
      { style: styleLabel },
      _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'externalLink', fill: _utils.colors.pictonBlue, width: 10, height: 10 }),
      'Default Image'
    ),
    _react2.default.createElement(
      'p',
      { style: description },
      'Aliquam dapibus urna vel lectus scelerisque lobortis. In eget convallis felis.'
    )
  );
}).add('List From Data Sample', function () {
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', maxWidth: 830, margin: '0 auto' } },
    (0, _lodash.sortBy)(_userGuideItems2.default, 'order').map(function (tile) {
      return _react2.default.createElement(
        'div',
        { key: 'tile-' + tile.order, style: { maxWidth: 250, margin: '0 25px 25px 0' } },
        _react2.default.createElement(
          _index2.default,
          { actionOnClick: (0, _addonActions.action)('On click event') },
          _react2.default.createElement(
            'span',
            { style: svgImageStyle },
            _react2.default.createElement(_SvgIcon.SvgIcon, { icon: tile.icon, fill: _utils.colors.pictonBlue, width: 35, height: 35 })
          ),
          _react2.default.createElement(
            'h2',
            { style: styleLabel },
            tile.external ? _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'externalLink', fill: _utils.colors.pictonBlue, width: 10, height: 10 }) : '',
            tile.name
          ),
          _react2.default.createElement(
            'p',
            { style: description },
            tile.description
          )
        )
      );
    })
  );
});