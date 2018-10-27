const operations = require('./make');

it('make#1', () => {
  const expectedResult = 777;
  const result = operations.make(15)(34, 21, 666)(41)(operations.add);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('make#2', () => {
  const expectedResult = 960;
  const result = operations.make(5)(4, 2, 6)(4)(operations.multiply);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('make#3', () => {
  const expectedResult = 5;
  const result = operations.make(100)(4, 5)(operations.divide);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('make#4', () => {
  const expectedResult = 5;
  const result = operations.make(100)(90, 5)(operations.substract);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('make#5', () => {
  const expectedResult = 1;
  const result = operations.make(17)(4)(operations.nod);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
