'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UserRoles(_ref) {
  var userRoles = _ref.userRoles,
      roles = _ref.roles,
      handleOnChange = _ref.handleOnChange;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      { style: _styles2.default.userRolesList },
      Object.keys(userRoles).map(function (val) {
        var isChecked = roles[val];

        return _react2.default.createElement(
          'li',
          {
            key: 'userRole-' + val,
            style: _styles2.default.userRolesListElement
          },
          _react2.default.createElement(
            'div',
            { style: _styles2.default.userRolesListElementTitle },
            val
          ),
          _react2.default.createElement(
            'div',
            { style: _styles2.default.userRolesListElementCheckbox },
            _react2.default.createElement(_CheckBox2.default, {
              checkBoxName: 'userRole-' + val,
              checkBoxValue: val,
              checkBoxID: 'userRole-' + val,
              checked: isChecked,
              handleOnChange: handleOnChange
            })
          )
        );
      })
    )
  );
}

UserRoles.propTypes = {
  userRoles: _propTypes2.default.object.isRequired,
  roles: _propTypes2.default.object,
  handleOnChange: _propTypes2.default.func
};

exports.default = UserRoles;