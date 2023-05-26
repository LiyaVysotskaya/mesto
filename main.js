(()=>{"use strict";var t={baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"a107eb49-22ca-4876-bbd0-47e31c345082","Content-Type":"application/json"},body:JSON.stringify({})},e={},n=".popup_profile",r=".popup_place",o="e4a24a7ddd17785f2e38c891",i=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__avatar-button");function l(t,e){e.renderLoading(!0),t().then(e.close()).catch(console.error).finally(e.renderLoading(!1))}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}document.querySelector(n),document.querySelector(r);var f=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e._id,this._name=e.name,this._link=e.link,this._ownerId=e.owner._id,this._currentUserId=e.myIdentifier,this._templateSelector=u,this._handleCardClick=n,this._handleDeleteClick=r,this._handleLikeClick=o,this._handleUnlikeClick=i,this._isLiked=e.likes.some((function(t){return t._id===e.myIdentifier})),this._element=this._getTemplate(),this._imageElement=this._element.querySelector(".element__image"),this._titleElement=this._element.querySelector(".element__text"),this._likeButton=this._element.querySelector(".element__like-button"),this._deleteButton=this._element.querySelector(".element__delete-button"),this._likesElement=this._element.querySelector(".element__like-info"),this._isLiked?this._likeButton.classList.add("element__like-button_active"):this._likeButton.classList.remove("element__like-button_active"),this._imageElement.src=this._link,this._imageElement.alt=this._name,this._titleElement.textContent=this._name,this.delete=this.delete.bind(this),this._clickDeleteBtn=this._clickDeleteBtn.bind(this),this._clickLikeBtn=this._clickLikeBtn.bind(this),this._setLikeCount(e.likes),this._setEventListeners()}var e,n;return e=t,(n=[{key:"delete",value:function(){this._element.remove()}},{key:"getElement",value:function(){return this._ownerId!==this._currentUserId&&this._deleteButton.remove(),this._element}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_clickLikeBtn",value:function(t){var e=this;(this._isLiked?this._handleUnlikeClick:this._handleLikeClick)(this.id).then((function(n){t.target.classList.toggle("element__like-button_active"),e._isLiked=!e._isLiked,e._setLikeCount(n.likes)}))}},{key:"_clickDeleteBtn",value:function(){this._handleDeleteClick(this)}},{key:"_setLikeCount",value:function(t){this._likesElement.textContent=t.length}},{key:"_setEventListeners",value:function(){var t=this;this._imageElement.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)})),this._likeButton.addEventListener("click",this._clickLikeBtn),this._deleteButton.addEventListener("click",this._clickDeleteBtn)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function h(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var b=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_setEventListeners",(function(){r._toggleButtonState(),r._elementValidation.addEventListener("reset",(function(){r._inputList.forEach((function(t){return r._hideInputError(t)})),r._disableButton()})),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkValidity(t),r._toggleButtonState()}))}))})),h(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._disableButton():r._enableButton()})),h(this,"_disableButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),h(this,"_enableButton",(function(){r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1})),h(this,"_checkValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),h(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),h(this,"_showInputError",(function(t,e){var n=r._elementValidation.querySelector(".".concat(t.id,"-error"));t.classList.add(r._inputErrorClass),n.textContent=e,n.classList.add(r._errorClass)})),h(this,"_hideInputError",(function(t){var e=r._elementValidation.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),e.classList.remove(r._errorClass),e.textContent=""})),this._elementValidation=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._elementValidation.querySelectorAll(this._inputSelector)),this._buttonElement=this._elementValidation.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var v=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderElements",value:function(){var t=this;this._items.forEach((function(e){return t.addItem(e,!0)}))}},{key:"addItem",value:function(t,e){e?this._container.append(this._renderer(t)):this._container.prepend(this._renderer(t))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close(t._popup)}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupFullImage=e._popup.querySelector(".popup__full-image-image"),e._popupDescription=e._popup.querySelector(".popup__full-image-caption"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupFullImage.src=e,this._popupFullImage.alt=t,this._popupDescription.textContent=t,O(P(u.prototype),"open",this).call(this)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return D(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFormFunction=e,n._fieldset=n._popup.querySelector(".form__fieldset"),n._submitButton=n._popup.querySelector(".form__button"),n._inputs=n._fieldset.querySelectorAll(".form__input"),n._submitButtonDefaulText=n._submitButton.textContent,n.close=n.close.bind(D(n)),n._getInputValues=n._getInputValues.bind(D(n)),n._submitHandle=n._submitHandle.bind(D(n)),n.setInputValues=n.setInputValues.bind(D(n)),n}return e=u,n=[{key:"setEventListeners",value:function(){B(q(u.prototype),"setEventListeners",this).call(this),this._fieldset.form.addEventListener("submit",this._submitHandle)}},{key:"close",value:function(){this._fieldset.form.reset(),B(q(u.prototype),"close",this).call(this)}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=t?e:this._submitButtonDefaulText}},{key:"_submitHandle",value:function(t){t.preventDefault(),this._submitFormFunction(this._getInputValues()),this.close()}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){var n=e.name,r=e.value;t[n]=r})),t}}],n&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(r);if(o){var n=F(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return N(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFormFunction=e,n._form=n._popup.querySelector(".form"),n._submitHandle=n._submitHandle.bind(N(n)),n}return e=u,(n=[{key:"setEventListeners",value:function(){V(F(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitHandle)}},{key:"open",value:function(t){V(F(u.prototype),"open",this).call(this),this._caller=t}},{key:"_submitHandle",value:function(t){t.preventDefault(),this._submitFormFunction(this._caller),this.close()}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}var M=function(){function t(e){var n=e.profileName,r=e.profileDescription,o=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r),this._profileAvatar=document.querySelector(o),this.getUserInfo=this.getUserInfo.bind(this),this.setUserInfo=this.setUserInfo.bind(this)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{"profile-name":this._profileName.textContent,"profile-description":this._profileDescription.textContent}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileDescription.textContent=t.about,this._profileAvatar.src=t.avatar}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){Y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Y(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===Q(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Z=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._token=e.headers.authorization,this._body=e.body,this._contentType=e.headers.contentType}var e,n;return e=t,(n=[{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"getCardsArray",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"editProfileInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t["profile-name"],about:t["profile-description"]})}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"editAvatarImage",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t["avatar-image"]})}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"addNewCard",value:function(t){return fetch("".concat(this._url,"/cards "),{method:"POST",headers:this._headers,body:JSON.stringify({name:t["card-name"],link:t["card-source"]})}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"unlikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then(this._then).catch((function(t){console.log("Ошибка: ".concat(t))}))}},{key:"_then",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}}])&&K(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())(t),$=new M({profileName:".profile__name",profileDescription:".profile__description",profileAvatar:".profile__image"});Z.getUserData().then($.setUserInfo);var tt,et=new C(".popup_image");et.setEventListeners(),Z.getCardsArray().then((function(t){t.forEach((function(t){return t.myIdentifier=o})),(tt=new v({items:t,renderer:function(t){return function(t){return new f(t,et.open.bind(et),nt.open.bind(nt),Z.likeCard.bind(Z),Z.unlikeCard.bind(Z),"#cards").getElement()}(t)}},".elements__list")).renderElements()}));var nt=new H(".popup_delete-card",(function(t){l((function(){return Z.deleteCard(t.id).then(t.delete)}),rt)}));nt.setEventListeners();var rt=new R(n,(function(t){l((function(){return Z.editProfileInfo(t).then($.setUserInfo)}),rt)}));rt.setEventListeners();var ot=new R(r,(function(t){l((function(){return Z.addNewCard(t).then((function(t){return tt.addItem(X(X({},t),{},{myIdentifier:o}),!1)}))}),rt)}));ot.setEventListeners();var it,ut=new R(".popup_avatar",(function(t){l((function(){return Z.editAvatarImage(t).then($.setUserInfo)}),rt)}));ut.setEventListeners(),it={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(it.formSelector)).forEach((function(t){var n=new b(it,t),r=t.getAttribute("name");e[r]=n,n.enableValidation()})),i.addEventListener("click",(function(){rt.setInputValues($.getUserInfo()),rt.open()})),u.addEventListener("click",ot.open),c.addEventListener("click",ut.open)})();