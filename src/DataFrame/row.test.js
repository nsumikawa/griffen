/**
 * DataFrame row tests
 */

import * as row from './row'


describe("Row Testing", () => {
  const DATAFRAME = [{row: 1}, {row:2}]

  test("should create an index variable", () => {
    const actual = row.createRow(DATAFRAME)
    expect(actual).toStrictEqual([
      {__index__:0, row: 1},
      {__index__:1, row: 2}
    ]);
  });

})
