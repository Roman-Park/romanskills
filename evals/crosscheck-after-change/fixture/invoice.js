const { formatPrice } = require('./utils/price');
// 청구서용 문자열: 천 단위 쉼표를 제거해 외부 시스템에 보낸다
function invoiceAmount(total) {
  return formatPrice(total).replace(/,/g, '');
}
module.exports = { invoiceAmount };
