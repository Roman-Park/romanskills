// formatPrice: 금액을 소수점 둘째 자리까지 반올림한다 (방금 수정한 함수)
function formatPrice(value) {
  return Math.round(value * 100) / 100;
}
module.exports = { formatPrice };
