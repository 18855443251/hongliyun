export function debounce(fn, wait) {
  let timer;
  return function () {
    console.log(this, "公共1");
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this);
    }, wait);
  };
}
export function test3() {
  console.log("张三");
  return "好好";
}
