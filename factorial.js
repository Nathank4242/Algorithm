function factorial(number) {
  if (number < 1) {
    return;
  }
  let result = 1;
  for (let i = 1; i < Number; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
