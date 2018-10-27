module.exports.sumOfOther = function sumOfOther(arr) {
  if (!arr) return [];
  if (arr.length === 1) return arr;
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    res[i] = (arr.filter((elem, index) => index !== (+i)).reduce((acc, curVal) => acc + curVal));
  }
  return res;
};
