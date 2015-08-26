'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var os = require('os');

var pad = function pad(str, size) {
  return (new Array(size + 1).join('0') + str).slice(-size);
};

var padding = 2;
var pid = pad(process.pid.toString(36), padding);
var hostname = os.hostname().split('').reduce(function (prev, char) {
  return +prev + char.charCodeAt(0);
}, +os.hostname().length + 36).toString(36);

var hostId = pad(hostname, padding);

exports['default'] = function () {
  return pid + hostId;
};

module.exports = exports['default'];

