const operations = require('./recursion');

it('recursion#1', () => {
  const expectedResult = [[100], [90, 120], [70, 99, 110, 130]];
  const tree = {
    value: 100,
    left: {
      value: 90,
      left: { value: 70 },
      right: { value: 99 },
    },
    right: {
      value: 120,
      left: { value: 110 },
      right: { value: 130 },
    },
  };
  const result = operations.recursion(tree);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('recursion#2', () => {
  const expectedResult = [[100], [90], [70]];
  const tree = {
    value: 100,
    left: {
      value: 90,
      left: { value: 70 },
    },
  };
  const result = operations.recursion(tree);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('recursion#3', () => {
  const expectedResult = [[100], [120], [130]];
  const tree = {
    value: 100,
    right: {
      value: 120,
      right: { value: 130 },
    },
  };
  const result = operations.recursion(tree);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('recursion#4', () => {
  const expectedResult = [[100]];
  const tree = {
    value: 100,
  };
  const result = operations.recursion(tree);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
it('recursion#5', () => {
  const expectedResult = [[100], [120, 130]];
  const tree = {
    value: 100,
    right: {
      value: 130,
    },
    left: {
      value: 120,
    },
  };
  const result = operations.recursion(tree);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
