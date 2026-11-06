const { formatPrice } = require('./utils/price');
function cartLabel(total) {
  return formatPrice(total) + '원';
}
module.exports = { cartLabel };
