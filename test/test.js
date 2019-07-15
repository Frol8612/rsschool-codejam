const assert = require('assert');
const sumOfOther = require('../sumOfOther');
const make = require('../make');
const recursion = require('../recursion');

describe('sumOfOther', () => {
  it('test 1', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('test 2', () => {
    assert.deepEqual(sumOfOther([6, 9, 5, 4]), [18, 15, 19, 20]);
  });
  it('test 3', () => {
    assert.deepEqual(sumOfOther([6, 9, 5, 4, 7]), [25, 22, 26, 27, 24]);
  });
  it('test 4', () => {
    assert.deepEqual(sumOfOther([8, 9, 7, 10, 6]), [32, 31, 33, 30, 34]);
  });
  it('test 5', () => {
    assert.deepEqual(sumOfOther([4, 2, 15, 8, 1, 12]), [38, 40, 27, 34, 41, 30]);
  });
  it('test 6', () => {
    assert.deepEqual(sumOfOther([10, 8, 2, 3, 9, 6]), [28, 30, 36, 35, 29, 32]);
  });
  it('test 7', () => {
    assert.deepEqual(sumOfOther([12, 10, 11, 15, 9, 8, 13]), [66, 68, 67, 63, 69, 70, 65]);
  });
  it('test 8', () => {
    assert.deepEqual(sumOfOther([6, 7, 3, 4, 5, 2, 1]), [22, 21, 25, 24, 23, 26, 27]);
  });
  it('test 9', () => {
    assert.deepEqual(sumOfOther([8, 6, 2, 1, 3, 4, 5, 9]), [30, 32, 36, 37, 35, 34, 33, 29]);
  });
  it('test 10', () => {
    assert.deepEqual(sumOfOther([10, 16, 15, 14, 13, 12, 10, 11]), [91, 85, 86, 87, 88, 89, 91, 90]);
  });
  it('test 11', () => {
    assert.deepEqual(sumOfOther([3, 1, 2, 5, 8, 9, 10, 11, 7]), [53, 55, 54, 51, 48, 47, 46, 45, 49]);
  });
  it('test 12', () => {
    assert.deepEqual(sumOfOther([13, 11, 12, 15, 18, 9, 16, 17, 19]), [117, 119, 118, 115, 112, 121, 114, 113, 111]);
  });
  it('test 13', () => {
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
  it('test 14', () => {
    assert.deepEqual(sumOfOther([3, 2, 1, 4, 6, 5, 7, 8, 9, 10]), [52, 53, 54, 51, 49, 50, 48, 47, 46, 45]);
  });
  it('test 15', () => {
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
  it('test 16', () => {
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
  it('test 17', () => {
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
  it('test 18', () => {
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
  it('test 19', () => {
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
  it('test 20', () => {
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

function sum(a, b) {
  return a + b;
}

describe('make', () => {
  it('test 1', () => {
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('test 2', () => {
    assert.equal(make(10)(sum)(17, 20, 15, 30, 145)(10, 20)(11), 278);
  });

  it('test 3', () => {
    assert.equal(make(11, 5, 3, 8)(15, 150, 1500)(sum)(90)(110, 1), 1893);
  });
  it('test 4', () => {
    assert.equal(make(11)(10, 150)(8, 30, sum)(41)(14), 264);
  });
  it('test 5', () => {
    assert.equal(make(15, 5, 3)(7, 12, 10, 39, 58, 78)(41)(sum, 5)(8), 281);
  });
  it('test 6', () => {
    assert.equal(make(3)(sum, 15, 45, 8)(71)(55, 65, 8, 5)(85), 360);
  });
  it('test 7', () => {
    assert.equal(make(sum, 3)(87, 90, 45, 350, 450, 100)(12, 8, 10, 5, 7, 9)(555)(54, 6, 48, 5)(85, 79, 89)(236), 2333);
  });
  it('test 8', () => {
    assert.equal(
      make(100, 11, 562, 789, 56666, 554, 78, 89)(sum)(870, 56, 605, 35, 50)(1000)(555)(540, 60, 248)(85, 79, 89)(
        236,
        15,
        926,
        56
      ),
      64354
    );
  });
  it('test 9', () => {
    assert.equal(
      make(100, sum, 800)(12)(123)(578)(350, 450)(1000, 150, 569, 48, 79, 46, 13, 25, 4896, 45)(555, 23154)(5405)(8902)(
        56956
      ),
      104256
    );
  });
  it('test 10', () => {
    assert.equal(
      make(102354)(12)(4568)(5, 6, 8, 9, 1, 2, 7, 8, 6)(900, 85, 46, 79, 58, 46, 17, 23, 497, 79, 89, 145)(10)(554)(
        54,
        23,
        48,
        79,
        7964,
        163
      )(sum)(556, 568),
      119069
    );
  });
});

describe('recursion', () => {
  it('test 1', () => {
    assert.deepEqual(
      recursion({
        value: 100,
        left: { value: 90, left: { value: 70 }, right: { value: 99 } },
        right: { value: 120, left: { value: 110 }, right: { value: 130 } },
      }),
      [[100], [90, 120], [70, 99, 110, 130]]
    );
  });
  it('test 2', () => {
    assert.deepEqual(
      recursion({
        value: 15,
        left: {
          value: 7,
          left: {
            value: 17,
            left: { value: 10 },
            right: { value: 123 },
          },
          right: { value: 99 },
        },
        right: {
          value: 12,
          left: {
            value: 110,
            left: { value: 45 },
            right: { value: 65 },
          },
          right: {
            value: 130,
            left: { value: 98 },
            right: { value: 37 },
          },
        },
      }),
      [[15], [7, 12], [17, 99, 110, 130], [10, 123, 45, 65, 98, 37]]
    );
  });
  it('test 3', () => {
    assert.deepEqual(
      recursion({
        value: 11,
        left: {
          value: 7,
          right: {
            value: 49,
            left: { value: 68 },
            right: { value: 47 },
          },
        },
        right: {
          value: 46,
          left: {
            value: 110,
            left: { value: 35 },
            right: { value: 76 },
          },
          right: { value: 60 },
        },
      }),
      [[11], [7, 46], [49, 110, 60], [68, 47, 35, 76]]
    );
  });
  it('test 4', () => {
    assert.deepEqual(
      recursion({
        value: 1,
        left: {
          value: 4,
          right: {
            value: 49,
            left: {
              value: 6,
              left: { value: 26 },
              right: { value: 35 },
            },
            right: {
              value: 27,
              left: { value: 48 },
              right: { value: 52 },
            },
          },
        },
        right: {
          value: 36,
          left: {
            value: 110,
            left: {
              value: 35,
              left: { value: 56 },
              right: { value: 103 },
            },
            right: {
              value: 76,
              left: { value: 139 },
              right: { value: 479 },
            },
          },
          right: { value: 180 },
        },
      }),
      [[1], [4, 36], [49, 110, 180], [6, 27, 35, 76], [26, 35, 48, 52, 56, 103, 139, 479]]
    );
  });
  it('test 5', () => {
    assert.deepEqual(
      recursion({
        value: 777,
        left: {
          value: 6,
          right: {
            value: 37,
            left: {
              value: 15,
              left: { value: 26 },
              right: { value: 35 },
            },
            right: {
              value: 26,
              left: { value: 48 },
              right: { value: 52 },
            },
          },
          left: {
            value: 15,
            left: { value: 7 },
            right: { value: 12 },
          },
        },
        right: {
          value: 22,
          left: {
            value: 46,
            left: {
              value: 39,
              left: {
                value: 26,
                left: { value: 87 },
                right: { value: 90 },
              },
              right: {
                value: 37,
                left: { value: 101 },
                right: { value: 130 },
              },
            },
            right: {
              value: 49,
              left: {
                value: 48,
                left: { value: 145 },
                right: { value: 213 },
              },
              right: {
                value: 59,
                left: { value: 325 },
                right: { value: 447 },
              },
            },
          },
          right: { value: 59 },
        },
      }),
      [ [ 777 ], [ 6, 22 ], [ 15, 37, 46, 59 ], [ 7, 12, 15, 26, 39, 49 ], [ 26, 35, 48, 52, 26, 37, 48, 59 ], [ 87, 90, 101, 130, 145, 213, 325, 447 ] ]
    );
  });
});
