'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (hex) {
  var color = hex;

  if (color.length < 5) {
    color += hex.slice(1);
  }

  return color.replace('#', '0x') > 0xffffff / 2;
};