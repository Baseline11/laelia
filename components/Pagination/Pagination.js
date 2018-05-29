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

var _lodash = require('lodash');

var _index = require('../../index');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var limiterOptions = [{ value: 20, label: '20' }, { value: 50, label: '50' }, { value: 100, label: '100' }];

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'generatePageLinks',
    value: function generatePageLinks(pageQte, currentPage, onPageClickHandler) {
      var pageItems = [];
      var index = 0;
      var itemQte = pageQte < 5 ? pageQte : 5;
      var startValue = 1;

      if (currentPage > 3) {
        startValue = currentPage - 2;
      }

      if (currentPage > pageQte - 4 && pageQte - 4 > 0) {
        startValue = pageQte - 4;
      }

      for (index; index < itemQte; index++) {
        pageItems.push(_react2.default.createElement(
          'li',
          { key: startValue + index, style: _styles2.default.paginationItem },
          _react2.default.createElement(
            'button',
            {
              key: 'pagination-item-' + index,
              style: [_styles2.default.paginationItemButton, startValue + index === currentPage && _styles2.default.paginationItemButtonSelected],
              'data-fetch-index': startValue + index,
              onClick: onPageClickHandler(startValue + index)
            },
            startValue + index
          )
        ));
      }

      return pageItems;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          limit = _props.limit,
          total = _props.total,
          offset = _props.offset,
          showLimiter = _props.showLimiter,
          handlePageOnClick = _props.handlePageOnClick,
          handleLimiterOnChange = _props.handleLimiterOnChange;

      var currentPage = Math.floor(offset / limit) + 1;
      var pageQte = Math.ceil(total / limit);
      var prevPageIndex = currentPage > 0 ? currentPage - 1 : 0;
      var nextPageIndex = currentPage < pageQte ? currentPage + 1 : pageQte;
      var onPageClickHandler = function onPageClickHandler(pageIndex) {
        return function () {
          return handlePageOnClick(pageIndex);
        };
      };
      var onLimiterChangeHandler = function onLimiterChangeHandler(e) {
        return handleLimiterOnChange(e.target.value);
      };

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.paginationContainer },
        _react2.default.createElement(
          'ul',
          { style: _styles2.default.pagination },
          showLimiter && _react2.default.createElement(
            'div',
            { style: _styles2.default.paginationLimiterContainer },
            _react2.default.createElement(
              'span',
              { style: _styles2.default.paginationLimiterInlineText },
              'Showing'
            ),
            _react2.default.createElement(
              'span',
              { style: _styles2.default.paginationLimiterDropdownWrapper },
              _react2.default.createElement(_index.Select, {
                options: limiterOptions,
                defaultValue: (0, _lodash.find)(limiterOptions, ['value', limit]).value.toString(),
                handleOnChange: onLimiterChangeHandler
              })
            ),
            _react2.default.createElement(
              'span',
              { style: _styles2.default.paginationLimiterInlineText },
              'of ',
              total
            )
          ),
          _react2.default.createElement(
            'li',
            { style: _styles2.default.paginationItem },
            _react2.default.createElement(
              'button',
              {
                key: 'prev-paginationItem',
                style: [_styles2.default.paginationItemButton, _styles2.default.paginationItemButtonText, _styles2.default.paginationItemButtonPrev, currentPage === 1 && _styles2.default.paginationItemButtonDisabled],
                disabled: currentPage === 1,
                onClick: onPageClickHandler(prevPageIndex)
              },
              'Previous'
            )
          ),
          currentPage > 3 && _react2.default.createElement(
            'li',
            { style: _styles2.default.paginationItem },
            _react2.default.createElement(
              'button',
              {
                key: 'first-paginationItem',
                style: _styles2.default.paginationItemButton,
                onClick: onPageClickHandler(1)
              },
              1
            )
          ),
          currentPage > 3 && _react2.default.createElement(
            'li',
            { style: _styles2.default.paginationItem },
            _react2.default.createElement(
              'span',
              { key: 'first-pagingEllipsis', style: [_styles2.default.paginationItemButton, _styles2.default.paginationEllipsis] },
              '...'
            )
          ),
          this.generatePageLinks(pageQte, currentPage, onPageClickHandler),
          currentPage < pageQte - 3 && _react2.default.createElement(
            'li',
            { style: _styles2.default.paginationItem },
            _react2.default.createElement(
              'span',
              { key: 'last-pagingEllipsis', style: [_styles2.default.paginationItemButton, _styles2.default.paginationEllipsis] },
              '...'
            )
          ),
          currentPage < pageQte - 3 && _react2.default.createElement(
            'li',
            { style: _styles2.default.paginationItem },
            _react2.default.createElement(
              'button',
              {
                key: 'last-paginationItem',
                style: _styles2.default.paginationItemButton,
                onClick: onPageClickHandler(pageQte)
              },
              pageQte
            )
          ),
          _react2.default.createElement(
            'li',
            { style: _styles2.default.paginationItem },
            _react2.default.createElement(
              'button',
              {
                key: 'next-paginationItem',
                style: [_styles2.default.paginationItemButton, _styles2.default.paginationItemButtonText, _styles2.default.paginationItemButtonNext, currentPage === pageQte && _styles2.default.paginationItemButtonDisabled],
                disabled: currentPage === pageQte,
                onClick: onPageClickHandler(nextPageIndex)
              },
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  limit: _propTypes2.default.number.isRequired,
  total: _propTypes2.default.number.isRequired,
  offset: _propTypes2.default.number.isRequired,
  handlePageOnClick: _propTypes2.default.func.isRequired,
  handleLimiterOnChange: _propTypes2.default.func,
  showLimiter: _propTypes2.default.bool
};

Pagination.defaultProps = {
  showLimiter: true
};

exports.default = (0, _radium2.default)(Pagination);