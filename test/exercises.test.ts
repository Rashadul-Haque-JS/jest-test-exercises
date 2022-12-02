import {
  validateEmail,
  validateZip,
  makeHeading,
  roundPrice,
  roundPriceAnyValue,
  roundPricePattern,
  isLowerCase,
  isPrimeNumber,
  getGenitive,
} from "../src/exercises";

//Exc 2
describe("Email validation", () => {
  test("input is equal to jonatan@gmail.com", () => {
    expect(validateEmail("jonatan@gmail.com")).toBe(true);
  });
  test("input is equal to jonatan@gmail.com", () => {
    expect(validateEmail("example@gmail.com")).toBe(true);
  });
});

//Exc 3
describe("Zip validation", () => {
  test("input is equal to 12345 as string", () => {
    expect(validateZip("12345")).toBe(true);
  });
});

//Exc 4
describe("Create html elements", () => {
  test("html element is equel to <h1>Hello</h1> ", () => {
    expect(makeHeading("Hello", 1)).toBe("<h1>Hello</h1>");
  });
  test("html element is equel to  <h2>Next level</h2>", () => {
    expect(makeHeading("Next level", 2)).toBe("<h2>Next level</h2>");
  });
  test("html element is equel to  <h5>Next level</h5>", () => {
    expect(makeHeading("Next level", 5)).toBe("<h5>Next level</h5>");
  });
});

//Exc 5
describe("Round price", () => {
  it("should convert value round to upwards and only except SEK as value", () => {
    expect(roundPrice("SEK", 232.10542)).toBe("232.11 SEK");
  });
});

describe("Round price", () => {
  it("should convert value round to upwards and eccept any value", () => {
    expect(roundPriceAnyValue("USD", 232.10542)).toBe("232.11 USD");
  });
});

describe("Round price", () => {
  it("should convert value round to upwards and follow expected price pattern", () => {
    expect(roundPricePattern("$", 232.10542)).toBe("$232.11");
  });
});

describe("LowerCase", () => {
  it("should return string as lowercase", () => {
    expect(isLowerCase("hello")).toBe("hello");
  });
});

describe("Prime number", () => {
  it("should return number is not a prime number", () => {
    expect(isPrimeNumber(6)).toBe("is not a prime number");
  });

  it("should return number is not a prime number", () => {
    expect(isPrimeNumber(1)).toBe("is not a prime number");
  });
  it("should return number is not a prime number", () => {
    expect(isPrimeNumber(0.8)).toBe("is not a prime number");
  });

  it("should return number is a prime number", () => {
    expect(isPrimeNumber(7)).toBe("is a prime number");
  });
  it("should return number is a prime number", () => {
    expect(isPrimeNumber(13)).toBe("is a prime number");
  });
  it("should return number is a prime number", () => {
    expect(isPrimeNumber(19)).toBe("is a prime number");
  });
  it("should return number is a prime number", () => {
    expect(isPrimeNumber(23)).toBe("is a prime number");
  });
});

describe("Genitiv form of name", () => {
  it("should return genitiv form of name, like Jhon => Jhons", () => {
    expect(getGenitive("Johanna", "Johannas")).toBe("Johannas");
  });

  it("should return genitiv form of name, like Jhon => Jhons", () => {
    expect(getGenitive("HAMPUS", "Hampus")).toBe("Hampus");
  });

  it("should return error: not form of genitive", () => {
    expect(() => getGenitive("jhonn", "Jhons")).toThrow("Error: not genitiv");
  });
});



  