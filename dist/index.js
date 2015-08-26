'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var os = require('os');

var padding = 2;
var pad = function pad(str, size) {
  return (new Array(size + 1).join('0') + str).slice(-size);
};

var hostname = os.hostname().split('').reduce(function (prev, char) {
  return +prev + char.charCodeAt(0);
}, +os.hostname().length + 36).toString(36);

var hostId = pad(hostname, padding);

exports['default'] = function (pid) {
  return pad(pid.toString(36), padding) + hostId;
};

module.exports = exports['default'];

