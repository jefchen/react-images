'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.theme = theme;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _jss = require('jss');

var _jss2 = _interopRequireDefault(_jss);

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssPx = require('jss-px');

var _jssPx2 = _interopRequireDefault(_jssPx);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _stylesDefault = require('./styles/default');

var _stylesDefault2 = _interopRequireDefault(_stylesDefault);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

_jss2['default'].use((0, _jssCamelCase2['default'])());
_jss2['default'].use((0, _jssNested2['default'])());
_jss2['default'].use((0, _jssPx2['default'])());
_jss2['default'].use((0, _jssVendorPrefixer2['default'])());

var Lightbox = (function (_Component) {
	_inherits(Lightbox, _Component);

	// static theme(themeStyles) {
	// 	let extStyles = Object.assign({}, defaultStyles);
	// 	for (var key in extStyles) {
	// 		if (key in themeStyles) {
	// 			extStyles[key] = Object.assign({}, defaultStyles[key], themeStyles[key]);
	// 		}
	// 	}
	// 	return extStyles;
	// }

	function Lightbox() {
		_classCallCheck(this, Lightbox);

		_get(Object.getPrototypeOf(Lightbox.prototype), 'constructor', this).call(this);

		this.close = this.close.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrev = this.gotoPrev.bind(this);
		this.handleImageClick = this.handleImageClick.bind(this);
		this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	_createClass(Lightbox, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.isOpen && nextProps.enableKeyboardInput) {
				if (typeof window !== 'undefined') window.addEventListener('keydown', this.handleKeyboardInput);
				if (typeof window !== 'undefined') window.addEventListener('resize', this.handleResize);
				this.handleResize();
			} else {
				if (typeof window !== 'undefined') window.removeEventListener('keydown', this.handleKeyboardInput);
				if (typeof window !== 'undefined') window.removeEventListener('resize', this.handleResize);
			}

			if (nextProps.isOpen) {
				document.body ? document.body.style.overflow = 'hidden' : null;
			} else {
				document.body ? document.body.style.overflow = null : null;
			}
		}
	}, {
		key: 'close',
		value: function close() {
			this.props.backdropClosesModal && this.props.onClose && this.props.onClose();
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			if (this.props.currentImage === this.props.images.length - 1) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			if (this.props.currentImage === 0) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickPrev();
		}
	}, {
		key: 'handleImageClick',
		value: function handleImageClick(e) {
			e.stopPropagation();
			if (!this.props.onClickShowNextImage) return;

			this.gotoNext();
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				this.gotoPrev();
			} else if (event.keyCode === 39) {
				this.gotoNext();
			} else if (event.keyCode === 27) {
				this.props.onClose();
			} else {
				return false;
			}
		}
	}, {
		key: 'handleResize',
		value: function handleResize() {
			this.setState({
				windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return;
			var classes = this.props.sheet.classes;

			var elementClass = (0, _classnames2['default'])(classes.arrow, classes.arrowNext);

			return _react2['default'].createElement(
				'button',
				{ title: 'Next (Right arrow key)', type: 'button', className: elementClass, onClick: this.gotoNext, onTouchEnd: this.gotoNext },
				_react2['default'].createElement(_Icon2['default'], { type: 'arrowRight' })
			);
		}
	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return;
			var classes = this.props.sheet.classes;

			var elementClass = (0, _classnames2['default'])(classes.arrow, classes.arrowPrev);

			return _react2['default'].createElement(
				'button',
				{ title: 'Previous (Left arrow key)', type: 'button', className: elementClass, onClick: this.gotoPrev, onTouchEnd: this.gotoPrev },
				_react2['default'].createElement(_Icon2['default'], { type: 'arrowLeft' })
			);
		}
	}, {
		key: 'renderCloseButton',
		value: function renderCloseButton() {
			if (!this.props.showCloseButton) return;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'div',
				{ className: classes.closeBar },
				_react2['default'].createElement(
					'button',
					{ title: 'Close (Esc)', className: classes.closeButton, onClick: this.props.onClose },
					_react2['default'].createElement(_Icon2['default'], { type: 'close' })
				)
			);
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			if (!this.props.isOpen) return;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				_Fade2['default'],
				{ key: 'dialog', duration: 250, className: classes.container },
				_react2['default'].createElement('span', { className: classes.contentHeightShim }),
				_react2['default'].createElement(
					'div',
					{ className: classes.content },
					_react2['default'].createElement(
						'div',
						{ className: classes.stage },
						this.renderCloseButton(),
						this.renderImages(),
						_react2['default'].createElement('span', { className: classes.figureShadow })
					)
				),
				this.renderArrowPrev(),
				this.renderArrowNext()
			);
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter(caption) {
			var _props = this.props;
			var currentImage = _props.currentImage;
			var images = _props.images;
			var showImageCount = _props.showImageCount;
			var classes = this.props.sheet.classes;

			if (!caption && !showImageCount) return;

			var imageCount = showImageCount ? _react2['default'].createElement(
				'div',
				{ className: classes.footerCount },
				currentImage + 1,
				' of ',
				images.length
			) : null;
			var figcaption = caption ? _react2['default'].createElement(
				'figcaption',
				{ className: classes.footerCaption },
				caption
			) : null;

			return _react2['default'].createElement(
				'div',
				{ className: classes.footer },
				imageCount,
				figcaption
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _props2 = this.props;
			var images = _props2.images;
			var currentImage = _props2.currentImage;
			var classes = this.props.sheet.classes;
			var windowHeight = this.state.windowHeight;

			if (!images || !images.length) return;

			var srcset = undefined,
			    sizes = undefined;
			if (images[currentImage].srcset) {
				srcset = images[currentImage].srcset.join();
				sizes = '100vw';
			}

			return _react2['default'].createElement(
				'figure',
				{ key: 'image' + currentImage, className: classes.figure, style: { maxWidth: this.props.width } },
				_react2['default'].createElement('img', {
					className: classes.image,
					onClick: this.handleImageClick,
					onTouchEnd: this.handleImageClick,
					sizes: sizes,
					src: images[currentImage].src,
					srcSet: srcset,
					style: {
						cursor: this.props.onClickShowNextImage ? 'pointer' : 'auto',
						maxHeight: windowHeight
					}
				}),
				this.renderFooter(images[currentImage].caption)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = this.props.sheet.classes;

			var props = (0, _blacklist2['default'])(this.props, 'backdropClosesModal', 'currentImage', 'enableKeyboardInput', 'images', 'isOpen', 'onClickNext', 'onClickPrev', 'onClose', 'showCloseButton', 'width');

			return _react2['default'].createElement(
				_Portal2['default'],
				props,
				_react2['default'].createElement(
					_reactAddonsTransitionGroup2['default'],
					{ transitionName: 'div', component: 'div' },
					this.renderDialog()
				)
			);
		}
	}]);

	return Lightbox;
})(_react.Component);

;

Lightbox.displayName = 'Lightbox';
Lightbox.propTypes = {
	backdropClosesModal: _react.PropTypes.bool,
	currentImage: _react.PropTypes.number,
	enableKeyboardInput: _react.PropTypes.bool,
	images: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		src: _react.PropTypes.string.isRequired,
		srcset: _react.PropTypes.array,
		caption: _react.PropTypes.string
	})).isRequired,
	isOpen: _react.PropTypes.bool,
	onClickShowNextImage: _react.PropTypes.bool,
	onClickNext: _react.PropTypes.func.isRequired,
	onClickPrev: _react.PropTypes.func.isRequired,
	onClose: _react.PropTypes.func.isRequired,
	showCloseButton: _react.PropTypes.bool,
	showImageCount: _react.PropTypes.bool,
	width: _react.PropTypes.number
};
Lightbox.defaultProps = {
	enableKeyboardInput: true,
	currentImage: 0,
	onClickShowNextImage: true,
	showCloseButton: true,
	showImageCount: true,
	width: 900
};

function theme(themeStyles) {
	var extStyles = _extends({}, _stylesDefault2['default']);
	for (var key in extStyles) {
		if (key in themeStyles) {
			extStyles[key] = _extends({}, _stylesDefault2['default'][key], themeStyles[key]);
		}
	}
	return extStyles;
}

;

// console.log('Lightbox.theme', Lightbox.theme);
exports['default'] = (0, _reactJss2['default'])(Lightbox, _stylesDefault2['default']);