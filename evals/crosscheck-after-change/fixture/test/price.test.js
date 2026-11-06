const assert = require('assert');
const { formatPrice } = require('../utils/price');
assert.strictEqual(formatPrice(1234.5), '1,234.50');
console.log('ok');
