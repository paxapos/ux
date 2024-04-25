'use strict';

const svelte = require('..');
const assert = require('assert').strict;

assert.strictEqual(svelte(), 'Hello from svelte');
console.info('svelte tests passed');
