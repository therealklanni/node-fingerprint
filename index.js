'use strict'

const os = require('os')

const pad = (str, size) => (new Array(size + 1).join('0') + str).slice(-size)

const padding = 2
const pid = pad(process.pid.toString(36), padding)
const hostname = os.hostname()
  .split('')
  .reduce((prev, char) => +prev + char.charCodeAt(0), +os.hostname().length + 36)
  .toString(36)

const hostId = pad(hostname, padding)

export default () => pid + hostId
