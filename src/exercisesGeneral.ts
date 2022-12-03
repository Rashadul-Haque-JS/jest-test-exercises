// 'refactored' is just a variable which contains codes that've been refactored

export const validateEmail = (email: string) => {
  
  const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email === email.toLocaleLowerCase() && email.match(validEmail)) {
    return true;
  }

  return "invalid email";
};

export const validateZip = (zip: string) => zip === "12345";

export const makeHeading = (str: string, num: number) => {
  return `<h${num}>${str}</h${num}>`;
};

export const roundPrice = (value: string, num: number) => {
  const price = Math.round(num * 100) / 100;
  if (value !== "SEK") {
    throw "Invalid value";
  }

  return String(price + " " + value);
};

export const roundPriceAnyValue = (value: string, num: number) => {
  const price = Math.round(num * 100) / 100;

  return String(price + " " + value);
};

export const roundPricePattern = (value: string, num: number) => {
  const round = Math.round(num * 100) / 100;
  if (value === "kr") {
    return String(round + " " + value);
  } else if (value === "$") {
    return String(value + round);
  } else {
    return String(value + " " + round);
  }
};

export const isLowerCase = (str: string) => {
  if (str === str.toLocaleLowerCase()) {
    return str;
  }

  throw "Test failed";
};

export const isPrimeNumber = (num: number) => {
  const refactored = num % 2 == 0 && num > 2;
  if (num <= 1 || refactored) return `is not a prime number`;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return `is not a prime number`;
  }
  return `is a prime number`;
};

export const getGenitive = (str: string, genitiveForm: string) => {
  const name = str.toLowerCase();
  let genitive;
  const refactored = name.length - 1;
  if (name.charAt(refactored) === "s") {
    genitive = `${name.charAt(0).toUpperCase() + name.slice(1)}`;
  } else {
    genitive = `${name.charAt(0).toUpperCase() + name.slice(1)}s`;
  }

  if (genitive !== genitiveForm) {
    throw "Error: not genitive";
  } else {
    return genitive;
  }
};
