//防抖函数，防止函数多次执行
export function debounce (fn, time) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}
