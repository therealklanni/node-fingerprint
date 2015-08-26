'use strict'

import fingerprint from './dist'

let test = require('tape')

test('fingerprint', (t) => {
  t.plan(2)
  t.equal(typeof fingerprint(process.pid), 'string', 'fingerprint() should return a string');
  t.equal(fingerprint(process.pid), fingerprint(process.pid), 'fingerprints should match');
})
