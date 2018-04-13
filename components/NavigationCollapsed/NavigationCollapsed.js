'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgIcon = require('../SvgIcon');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _utils = require('../../utils');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationCollapsed = function (_Component) {
  _inherits(NavigationCollapsed, _Component);

  function NavigationCollapsed() {
    _classCallCheck(this, NavigationCollapsed);

    return _possibleConstructorReturn(this, (NavigationCollapsed.__proto__ || Object.getPrototypeOf(NavigationCollapsed)).apply(this, arguments));
  }

  _createClass(NavigationCollapsed, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          activePage = _props.activePage,
          handleOnClick = _props.handleOnClick;

      var hoverMenuLogo = _radium2.default.getState(this.state, 'navLogoIcon', ':hover');

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.leftMenuContainer },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.menuLogoContainer, key: 'navLogoIcon', onClick: handleOnClick },
          _react2.default.createElement(
            'span',
            { style: [_styles2.default.LogoIcon, hoverMenuLogo && _styles2.default.hideLogoIcon] },
            _react2.default.createElement(_SvgIcon.SvgIcon, { icon: 'logoImage' })
          ),
          _react2.default.createElement('span', { style: [_styles2.default.menuLogoArrow, hoverMenuLogo && _styles2.default.menuLogoArrowVisible] })
        ),
        data.map(function (item, index) {
          var isVisibleMaster = false;
          var isVisible = _radium2.default.getState(_this2.state, 'nav-item-' + index, ':hover');
          if (item.children) {
            item.children.forEach(function (subLink) {
              var isLinkSelected = activePage ? subLink.url === activePage.url : false;
              if (isLinkSelected) {
                isVisibleMaster = true;
              }
            });
          }
          var isSelected = activePage ? item.url === activePage.url : false;

          return _react2.default.createElement(
            'div',
            {
              key: 'nav-item-' + index,
              style: [_styles2.default.menuItemContainer, isSelected && _styles2.default.menuItemContainerVisible, isVisibleMaster && _styles2.default.menuItemContainerVisible]
            },
            _react2.default.createElement(
              'div',
              {
                style: [_styles2.default.submenuContainer, isVisible && _styles2.default.submenuContainerVisible]
              },
              _react2.default.createElement('span', { style: _styles2.default.leftArrow }),
              _react2.default.createElement(
                'a',
                { key: 'nav-item-a-' + index, href: item.url,
                  style: [_styles2.default.submenuLinkHeader]
                },
                item.label
              ),
              _react2.default.createElement(
                'div',
                { style: [_styles2.default.subMenuItemWrapper, item.children && _styles2.default.subMenuItemWrapperShow] },
                item.children && item.children.map(function (subLink, Idx) {
                  var isLinkSelected = activePage ? subLink.url === activePage.url : false;

                  return _react2.default.createElement(
                    'a',
                    {
                      key: 'nav-item-' + subLink.label + '-' + Idx,
                      href: subLink.url,
                      style: [_styles2.default.submenuLink, isLinkSelected && _styles2.default.submenuLinkSelected]
                    },
                    subLink.label
                  );
                })
              )
            ),
            _react2.default.createElement(
              'a',
              { href: item.url },
              _react2.default.createElement(_SvgIcon.SvgIcon, {
                icon: item.icon,
                fill: isSelected || isVisibleMaster || isVisible ? _utils.colors.lightGrey : _utils.colors.dustyGray
              })
            )
          );
        })
      );
    }
  }]);

  return NavigationCollapsed;
}(_react.Component);

NavigationCollapsed.propTypes = {
  data: _propTypes2.default.array,
  activePage: _propTypes2.default.object,
  handleOnClick: _propTypes2.default.func.isRequired
};

exports.default = (0, _radium2.default)(NavigationCollapsed);