const { getDisplayName } = require('./user');
// 감사 로그: 이름이 비어 있는 계정도 누구인지 알 수 있어야 한다
function auditLine(user, action) {
  return `[audit] ${getDisplayName(user)} ${action}`;
}
module.exports = { auditLine };
