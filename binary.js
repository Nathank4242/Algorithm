function decimaltobinary(decimal) {
  let result = "";
}

function binarytodecimal(binary) {
  let result = 0;
  binary = binary.toString().split("").reverse().map(Number);
  for (let i = 0; i < binary.length; i++) {
    result += binary[i] * Math.pow(2, i);
  }
  return result;
}

let decimal = binarytodecimal("1101");
console.log(decimal);

// let num = 123;
// let str = num.toString();

// let binaryStr = num.toString(2);
// let hexStr = num.toString(16);
