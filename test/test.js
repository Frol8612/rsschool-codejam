const assert = require("assert");
const sumOfOther = require("../sumOfOther");

describe("sumOfOther", () => {
  it("test 1", () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it("test 2", () => {
    assert.deepEqual(sumOfOther([6, 9, 5, 4]), [18, 15, 19, 20]);
  });
  it("test 3", () => {
    assert.deepEqual(sumOfOther([6, 9, 5, 4, 7]), [25, 22, 26, 27, 24]);
  });
  it("test 4", () => {
    assert.deepEqual(sumOfOther([8, 9, 7, 10, 6]), [32, 31, 33, 30, 34]);
  });
  it("test 5", () => {
    assert.deepEqual(sumOfOther([4, 2, 15, 8, 1, 12]), [38, 40, 27, 34, 41, 30]);
  });
  it("test 6", () => {
    assert.deepEqual(sumOfOther([10, 8, 2, 3, 9, 6]), [28, 30, 36, 35, 29, 32]);
  });
  it("test 7", () => {
    assert.deepEqual(sumOfOther([12, 10, 11, 15, 9, 8, 13]), [66, 68, 67, 63, 69, 70, 65]);
  });
  it("test 8", () => {
    assert.deepEqual(sumOfOther([6, 7, 3, 4, 5, 2, 1]), [22, 21, 25, 24, 23, 26, 27]);
  });
  it("test 9", () => {
    assert.deepEqual(sumOfOther([8, 6, 2, 1, 3, 4, 5, 9]), [30, 32, 36, 37, 35, 34, 33, 29]);
  });
  it("test 10", () => {
    assert.deepEqual(sumOfOther([10, 16, 15, 14, 13, 12, 10, 11]), [91, 85, 86, 87, 88, 89, 91, 90]);
  });
  it("test 11", () => {
    assert.deepEqual(sumOfOther([3, 1, 2, 5, 8, 9, 10, 11, 7]), [53, 55, 54, 51, 48, 47, 46, 45, 49]);
  });
  it("test 12", () => {
    assert.deepEqual(sumOfOther([13, 11, 12, 15, 18, 9, 16, 17, 19]), [117, 119, 118, 115, 112, 121, 114, 113, 111]);
  });
  it("test 13", () => {
    assert.deepEqual(sumOfOther([19, 18, 12, 13, 11, 10, 14, 15, 16, 20]), [
      129,
      130,
      136,
      135,
      137,
      138,
      134,
      133,
      132,
      128,
    ]);
  });
  it("test 14", () => {
    assert.deepEqual(sumOfOther([3, 2, 1, 4, 6, 5, 7, 8, 9, 10]), [52, 53, 54, 51, 49, 50, 48, 47, 46, 45]);
  });
  it("test 15", () => {
    assert.deepEqual(sumOfOther([10, 12, 13, 14, 16, 15, 17, 18, 13, 12, 11]), [
      141,
      139,
      138,
      137,
      135,
      136,
      134,
      133,
      138,
      139,
      140,
    ]);
  });
  it("test 16", () => {
    assert.deepEqual(sumOfOther([20, 23, 24, 25, 22, 26, 29, 27, 33, 30, 31]), [
      270,
      267,
      266,
      265,
      268,
      264,
      261,
      263,
      257,
      260,
      259,
    ]);
  });
  it("test 17", () => {
    assert.deepEqual(sumOfOther([4, 6, 7, 2, 1, 3, 19, 17, 16, 12, 11, 10]), [
      104,
      102,
      101,
      106,
      107,
      105,
      89,
      91,
      92,
      96,
      97,
      98,
    ]);
  });
  it("test 18", () => {
    assert.deepEqual(sumOfOther([24, 16, 17, 22, 21, 13, 29, 27, 16, 32, 1, 5]), [
      199,
      207,
      206,
      201,
      202,
      210,
      194,
      196,
      207,
      191,
      222,
      218,
    ]);
  });
  it("test 19", () => {
    assert.deepEqual(sumOfOther([44, 25, 47, 32, 51, 13, 99, 77, 56, 32, 61, 45, 35]), [
      573,
      592,
      570,
      585,
      566,
      604,
      518,
      540,
      561,
      585,
      556,
      572,
      582,
    ]);
  });
  it("test 20", () => {
    assert.deepEqual(sumOfOther([14, 15, 27, 12, 11, 3, 19, 17, 6, 12, 1, 5, 4]), [
      132,
      131,
      119,
      134,
      135,
      143,
      127,
      129,
      140,
      134,
      145,
      141,
      142,
    ]);
  });
});
