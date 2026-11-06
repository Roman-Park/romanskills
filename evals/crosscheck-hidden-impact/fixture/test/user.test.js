const assert = require('assert');
const { getDisplayName } = require('../src/user');
assert.strictEqual(getDisplayName({ name: '민수', profile: { nickname: '민' } }), '민');
assert.strictEqual(getDisplayName({ name: '민수', profile: {} }), '민수');
console.log('ok');
