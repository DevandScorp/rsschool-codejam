function make(...args) {
  if (typeof args[args.length - 1] === 'function') {
    const func = args.pop();
    return args.reduce((acc, next) => func(acc, next));
  }
  return make.bind(null, ...args);
}
