const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter((x, i) => array.indexOf(x) === i);
console.log(result);


const array2 = [2, 4, 7, 5, 4, 3, 8];
const result2 = Array.from(new Set(array2))
console.log(result2);


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2020;
if (isLeapYear(checkYear)) {
  console.log(checkYear + "年はうるう年です");
} else {
  console.log(checkYear + "年はうるう年ではありません");
}

checkYear = 2021;
if (isLeapYear(checkYear)) {
  console.log(checkYear + "年はうるう年です");
} else {
  console.log(checkYear + "年はうるう年ではありません");
}