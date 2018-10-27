const sumOfOther = array => {
  const sum = array.reduce((a, b) => a + b);
  return array.map(a => sum - a);
};

// eslint-disable-next-line no-console
console.log(sumOfOther([2, 3, 4, 1]));