const operations = require('./sumOfOther');

it('sumOfOther#1', () => {
  const expectedResult = [8, 7, 6, 9];
  const result = operations.sumOfOther([2, 3, 4, 1]);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('sumOfOther#2', () => {
  const expectedResult = [];
  const result = operations.sumOfOther();
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('sumOfOther#3', () => {
  const expectedResult = [2, 1];
  const result = operations.sumOfOther([1, 2]);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('sumOfOther#4', () => {
  const expectedResult = [9, 6, 7, 8];
  const result = operations.sumOfOther([1, 4, 3, 2]);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('sumOfOther#5', () => {
  const expectedResult = [1];
  const result = operations.sumOfOther([1]);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
