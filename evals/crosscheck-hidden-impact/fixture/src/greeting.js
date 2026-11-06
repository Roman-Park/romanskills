const { getDisplayName } = require('./user');
function greeting(user) {
  return `안녕하세요, ${getDisplayName(user)}님!`;
}
module.exports = { greeting };
