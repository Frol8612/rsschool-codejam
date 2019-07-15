function make() {
  const arr = [];
  let fun;

  function check(arg) {
    for (let i = 0; i < arg.length; i += 1) {
      if (typeof arg[i] !== 'function') {
        arr.push(arg[i]);
      } else {
        fun = arg[i];
      }
    }
  }

  check(arguments);
  function callFun() {
    check(arguments);
    return callFun;
  }

  callFun.toString = () => arr.reduce(fun);

  return callFun;
}

module.exports = make;