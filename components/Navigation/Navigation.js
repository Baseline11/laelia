'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _styles = require('material-ui/styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NavigationListItemLink = require('../NavigationListItemLink');

var _NavigationListItemLink2 = _interopRequireDefault(_NavigationListItemLink);

var _NavigationListItemExpandable = require('../NavigationListItemExpandable');

var _NavigationListItemExpandable2 = _interopRequireDefault(_NavigationListItemExpandable);

var _SvgIcon = require('../SvgIcon');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var muiTheme = (0, _styles.createMuiTheme)({
  palette: {
    type: 'dark'
  }
});

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'generateNavigationListItemExpandable',
    value: function generateNavigationListItemExpandable(data, selectedItem) {
      return _react2.default.createElement(
        _NavigationListItemExpandable2.default,
        {
          key: 'nav-item-' + data.label,
          isSelected: !!selectedItem,
          mainItemText: data.label,
          mainItemIcon: data.icon && _react2.default.createElement(
            _List.ListItemIcon,
            null,
            _react2.default.createElement(_SvgIcon.SvgIcon, { icon: data.icon, fill: !!selectedItem ? _utils.colors.lightGrey : _utils.colors.dustyGray })
          )
        },
        _react2.default.createElement(
          _List2.default,
          { component: 'div', disablePadding: true },
          data.children.map(function (item, index) {
            var isSelected = selectedItem ? item.url === selectedItem.url : false;

            return _react2.default.createElement(_NavigationListItemLink2.default, {
              key: 'nav-subitem-' + index,
              text: item.label,
              href: item.url,
              isSelected: isSelected,
              isNested: true
            });
          })
        ),
        _react2.default.createElement(_Divider2.default, null)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          activePage = _props.activePage,
          isCollapsed = _props.isCollapsed,
          logoUrl = _props.logoUrl,
          handleOnClose = _props.handleOnClose,
          classes = _props.classes;


      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: muiTheme },
        _react2.default.createElement(
          _Drawer2.default,
          {
            anchor: 'left',
            classes: {
              paper: (0, _classnames2.default)(classes.drawerPaper)
            },
            open: !isCollapsed,
            onClose: handleOnClose
          },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(classes.navigationHeader) },
            logoUrl && _react2.default.createElement(
              'div',
              { className: classes.navigationLogoWrapper },
              _react2.default.createElement('img', {
                className: (0, _classnames2.default)(classes.navigationLogo),
                src: logoUrl
              })
            )
          ),
          _react2.default.createElement(
            _List2.default,
            { component: 'nav' },
            data.map(function (item, index) {
              var returnContent = void 0;

              if (item.children) {
                var selectedIsNestedChild = activePage ? (0, _find2.default)(item.children, ['url', activePage.url]) : false;
                returnContent = _this2.generateNavigationListItemExpandable(item, selectedIsNestedChild);
              } else {
                var isSelected = activePage ? item.url === activePage.url : false;
                returnContent = _react2.default.createElement(
                  _NavigationListItemLink2.default,
                  {
                    muiName: 'NavigationListItemLink',
                    key: 'nav-item-' + index,
                    text: item.label,
                    href: item.url,
                    isSelected: isSelected
                  },
                  item.icon && _react2.default.createElement(
                    _List.ListItemIcon,
                    null,
                    _react2.default.createElement(_SvgIcon.SvgIcon, { icon: item.icon, fill: isSelected ? _utils.colors.lightGrey : _utils.colors.dustyGray })
                  )
                );
              }

              return returnContent;
            })
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

Navigation.propTypes = {
  data: _propTypes2.default.array,
  activePage: _propTypes2.default.object,
  isCollapsed: _propTypes2.default.bool,
  logoUrl: _propTypes2.default.string,
  handleOnClose: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(_styles3.default, { withTheme: true })(Navigation);