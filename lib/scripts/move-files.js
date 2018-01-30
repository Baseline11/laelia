'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var files = ['lib/**/*.*'];

function moveFile(file) {
  var rootPath = _path2.default.resolve(__dirname, '../', _path2.default.basename(file));

  return new Promise(function (resolve) {
    _fsExtra2.default.copy(file, rootPath, function (err) {
      if (err) throw err;
      resolve();
    });
  }).then(function () {
    return console.log('Moved ' + file + ' to ' + rootPath);
  });
}

Promise.all(files.map(function (file) {
  return moveFile(file);
}));