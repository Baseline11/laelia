'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgIcon = function (_Component) {
  _inherits(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.icons = {
      workplace: _index.IconWorkplace,
      basedrive: _index.IconBasedrive,
      person: _index.IconPerson,
      help: _index.IconHelp,
      reports: _index.IconReports,
      settings: _index.IconSettings,
      triggers: _index.IconTriggers,
      commandCenter: _index.IconCommandCenter,
      deploymentProcess: _index.IconDeploymentProcess,
      faq: _index.IconFaq,
      futureReleases: _index.IconFutureReleases,
      ideasSuggestions: _index.IconIdeasSuggestions,
      meetUp: _index.IconMeetUp,
      supportTickets: _index.IconSupportTickets,
      systemUsage: _index.IconSystemUsage,
      training: _index.IconTraining,
      university: _index.IconUniversity,
      userForum: _index.IconUserForum,
      whatsNew: _index.IconWhatsNew,
      externalLink: _index.IconExternalLink,
      apiGuide: _index.IconApiGuide,
      actionMore: _index.IconActionMore,
      closeButton: _index.IconCloseButton,
      showPassword: _index.IconShowPassword,
      hidePassword: _index.IconHidePassword,
      checkedArrow: _index.IconCheckedArrow,
      logoImage: _index.LogoImage,
      backArrow: _index.BackArrow,
      forwardArrow: _index.ForwardArrow,
      plusIcon: _index.PlusIcon,
      minusIcon: _index.MinusIcon
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SvgIcon, [{
    key: 'render',
    value: function render() {
      var Icon = this.icons[this.props.icon];

      return _react2.default.createElement(Icon, this.props);
    }
  }]);

  return SvgIcon;
}(_react.Component);

SvgIcon.propTypes = {
  icon: _propTypes2.default.string.isRequired
};

exports.default = SvgIcon;