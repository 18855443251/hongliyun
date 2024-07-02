export function debounce(fn, delay = 10000) {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  }
  // 节流在单位时间（10s）内随便触发多少次，只要过了单位时间（10s）就会执行一次。
  export function throttle(fn, wait = 10000) {
    let previous = 0;
    // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
    return function() {
        let now = new Date();
        if(now - previous > wait) {
            fn.apply(this, arguments);
            previous = now;
        }
    }
  }


