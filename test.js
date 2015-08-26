'use strict'

import fingerprint from './dist'

let test = require('tape')

test('fingerprint', (t) => {
  t.plan(2)
  t.equal(typeof fingerprint(), 'string', 'fingerprint() should return a string');
  t.equal(fingerprint(), fingerprint(), 'fingerprints should match');
})
