webpackJsonp([1],{

/***/ 351:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(92);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(351);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginComp = function (_React$Component) {
    _inherits(LoginComp, _React$Component);

    function LoginComp(props) {
        _classCallCheck(this, LoginComp);

        var _this = _possibleConstructorReturn(this, (LoginComp.__proto__ || Object.getPrototypeOf(LoginComp)).call(this, props));

        _this.doLogin = _this.doLogin.bind(_this);
        _this.changeForm = _this.changeForm.bind(_this);
        return _this;
    }

    _createClass(LoginComp, [{
        key: 'changeForm',
        value: function changeForm() {
            //   $("div[class$='-form']").animate({ height: "toggle", opacity: "toggle" }, "slow"); 
            (0, _jquery2.default)(this.registerForm).animate({ height: "toggle", opacity: "toggle" }, "slow");
            (0, _jquery2.default)(this.loginForm).animate({ height: "toggle", opacity: "toggle" }, "slow");
        }
    }, {
        key: 'doLogin',
        value: function doLogin() {
            alert(123);
            window.location = 'main.html';
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement(
                    'div',
                    { className: 'register-form', ref: function ref(_ref) {
                            return _this2.registerForm = _ref;
                        } },
                    _react2.default.createElement('input', { type: 'text', placeholder: 'name' }),
                    _react2.default.createElement('input', { type: 'password', placeholder: 'password' }),
                    _react2.default.createElement('input', { type: 'text', placeholder: 'email address' }),
                    _react2.default.createElement(
                        'button',
                        null,
                        'create'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'message', onClick: this.changeForm },
                        'Already registered? ',
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'Sign In'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'login-form', ref: function ref(_ref4) {
                            return _this2.loginForm = _ref4;
                        } },
                    _react2.default.createElement('input', { type: 'text', placeholder: 'username', ref: function ref(_ref2) {
                            return _this2.loginName = _ref2;
                        } }),
                    _react2.default.createElement('input', { type: 'password', placeholder: 'password', ref: function ref(_ref3) {
                            return _this2.loginPassword = _ref3;
                        } }),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.doLogin },
                        'login'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'message', onClick: this.changeForm },
                        'Not registered? ',
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            'Create an account'
                        )
                    )
                )
            );
        }
    }]);

    return LoginComp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(LoginComp, null), document.getElementById('root'));

/***/ })

},[354]);
//# sourceMappingURL=login-bundle.js.map