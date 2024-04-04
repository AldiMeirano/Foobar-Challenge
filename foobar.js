const prima = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

const consoleLogFooBar = () => {
  let output = "";

  for (let i = 100; i >= 1; i--) {
    if (prima(i)) continue;
    else if (i % 3 === 0 && i % 5 === 0) output += "FooBar";
    else if (i % 3 === 0) output += "Foo";
    else if (i % 5 === 0) output += "Bar";
    else output += i.toString() + "";
    if (output !== Number) output += ",";
  }
  console.log(output);
};

consoleLogFooBar();
