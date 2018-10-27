const sumOfOther = array => {
  const sum = array.reduce((a, b) => a + b);
  return array.map(a => sum - a);
};

module.exports = sumOfOther;