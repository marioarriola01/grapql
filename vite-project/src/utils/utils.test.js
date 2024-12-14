import { add,createObject } from "./utils";
import {describe, it, expect,test} from 'vitest'

describe("add", () => {
  it("should return the proper value when 2 positive numbers are passed", () => {
    const result = add(2, 2);
    expect(result).toEqual(4);
  });

  it("should not return the proper value when 2 positive numbers are passed", () => {
    const result = add(2, 2);
    expect(result).not.toEqual(6);
  });
});

describe("createObject", () => {
  it("should return the proper Object", () => {
    const result = createObject("mario",42, 42);
    expect(result).toEqual({name: "mario",age: 42,classroom:44});
  });
});

test('should return the proper value when',()=>{
  const result = add(2, 2);
  expect(result).toBe(4);
})