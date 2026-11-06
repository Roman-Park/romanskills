// 표시 이름: 별명이 있으면 별명, 없으면 이름 (방금 수정한 함수)
// 수정 전: return user.name || user.email;
function getDisplayName(user) {
  return user.profile.nickname || user.name;
}
module.exports = { getDisplayName };
