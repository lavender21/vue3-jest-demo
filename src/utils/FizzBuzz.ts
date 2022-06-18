export class FizzBuzz {
  public say(number: number) {
    if (this.isValidFizzBuzz(number)) {
      return "FizzBuzz";
    }
    if (this.isNumRelated(number, 3)) {
      return "Fizz";
    }
    if (this.isNumRelated(number, 5)) {
      return "Buzz";
    }
    return number;
  }

  private isValidFizzBuzz(number: number) {
    return (
      this.isNumDividedBy(number, 15) ||
      (this.isNumDividedBy(number, 3) && this.isNumContain(number, 5)) ||
      (this.isNumDividedBy(number, 5) && this.isNumContain(number, 3))
    );
  }

  private isNumRelated(number: number, base: number) {
    return this.isNumDividedBy(number, base) || this.isNumContain(number, base);
  }

  private isNumContain(number: number, base: number) {
    return number.toString().match(base.toString());
  }

  private isNumDividedBy(number: number, base: number) {
    return number % base === 0;
  }
}
