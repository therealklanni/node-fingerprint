# node-fingerprint [![npm version](https://badge.fury.io/js/node-fingerprint.svg)](http://badge.fury.io/js/node-fingerprint) [![Build Status](https://travis-ci.org/therealklanni/node-fingerprint.svg?branch=master)](https://travis-ci.org/therealklanni/node-fingerprint)

> Generate a fingerprint for a node process

Original concept taken from [cuid](https://github.com/ericelliott/cuid).

Fingerprint is based on a hash of pid + hostname.

## Install

```
npm install node-fingerprint
```

## Use

```
var fingerprint = require('node-fingerprint')()
```

---

MIT © Kevin Lanni
