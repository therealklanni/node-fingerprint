'use strict'

const os = require('os')

const padding = 2
const pad = (str, size) => (new Array(size + 1).join('0') + str).slice(-size)

const hostname = os.hostname()
  .split('')
  .reduce((prev, char) => +prev + char.charCodeAt(0), +os.hostname().length + 36)
  .toString(36)

const hostId = pad(hostname, padding)

export default pid => pad(pid.toString(36), padding) + hostId
