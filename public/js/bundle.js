(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
"use strict";

var _jquery = _interopRequireDefault((typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

(0, _jquery["default"])(window).on('load', function () {
  (0, _jquery["default"])('#background').animate({
    opacity: 1
  }, 1500);
  addFadeInAndEaseDelay('#name', 1500, 3000);
  addFadeInAndEaseDelay('#link-github', 3500, 3000);
  addFadeInAndEaseDelay('#link-linkedin', 4000, 3000);
});

function addFadeInAndEaseDelay(jquerySelector, delayMillis, fadeInMillis) {
  setTimeout(function () {
    (0, _jquery["default"])(jquerySelector).animate({
      opacity: 1
    }, fadeInMillis).addClass('ease-animation');
  }, delayMillis);
}

VANTA.TOPOLOGY({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xfc1212,
  backgroundColor: 0x0
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
