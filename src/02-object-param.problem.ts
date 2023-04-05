import { expect, it } from "vitest";

type Param = {
  first: number;
  second: number;
};
export const addTwoNumbers = (Params: Param) => {
  return Params.first + Params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
