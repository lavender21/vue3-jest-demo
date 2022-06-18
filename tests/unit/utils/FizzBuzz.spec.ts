import { FizzBuzz } from "@/utils/FizzBuzz";

const assertFizzBuzz = function (input: number, expected: string | number) {
  const fizzBuzz = new FizzBuzz();
  expect(fizzBuzz.say(input)).toBe(expected);
};
describe("Test fizzBuzz rules", () => {
  describe("return number self", () => {
    it("should return 1 when input 1", () => {
      assertFizzBuzz(1, 1);
    });
  });
  describe("return Fizz", () => {
    it("should return Fizz when input is 3", () => {
      assertFizzBuzz(3, "Fizz");
    });
    it("should return Fizz when input is contain 3", () => {
      assertFizzBuzz(13, "Fizz");
    });
  });
  describe("return Buzz", () => {
    it("should return Buzz when input is 5", () => {
      assertFizzBuzz(5, "Buzz");
    });
    it("should return Buzz when input is contain 5", () => {
      assertFizzBuzz(52, "Buzz");
    });
  });
  describe("return FizzBuzz", () => {
    it("should return FizzBuzz when input is 15", () => {
      assertFizzBuzz(15, "FizzBuzz");
    });
    it("should return FizzBuzz when input is 51", () => {
      assertFizzBuzz(51, "FizzBuzz");
    });
    it("should return FizzBuzz when input is 35", () => {
      assertFizzBuzz(35, "FizzBuzz");
    });
  });
});
