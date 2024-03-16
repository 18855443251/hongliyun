const BILLION = 100000000;
function divieName(str) {
  if (str) {
    return "历史";
  } else {
    return this.transNull(str);
  }
}
function test(str) {
  return "公共";
}

export default {
  divieName,
  test,
};
