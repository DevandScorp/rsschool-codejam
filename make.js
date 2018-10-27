module.exports.make = function make(...args) {
  if (typeof args[args.length - 1] === 'function') {
    const func = args.pop();
    return args.reduce((acc, next) => func(acc, next));
  }
  return make.bind(null, ...args);
};
module.exports.multiply = (a, b) => a * b;
module.exports.add = (a, b) => a + b;
module.exports.divide = (a, b) => a / b;
module.exports.substract = (a, b) => a - b;
module.exports.nod = (a, b) => a % b;
