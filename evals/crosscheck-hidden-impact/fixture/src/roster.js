const { getDisplayName } = require('./user');
function sortedNames(users) {
  return users.map(getDisplayName).sort((a, b) => a.localeCompare(b));
}
module.exports = { sortedNames };
