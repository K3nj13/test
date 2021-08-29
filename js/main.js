const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter((x, i) => array.indexOf(x) === i);
console.log(result);


const array2 = [2, 4, 7, 5, 4, 3, 8];
const result2 = Array.from(new Set(array2))
console.log(result2);

// オブジェクト型を使って重複を排除した例を記載します。
// オブジェクト型を使うと配列の順序は保証されませんが、キーはユニークなので重複を排除することができます。
const array3 = [2, 4, 5, 7, 5, 4, 3, 8, 2];
const unique = (arr) => {
  const obj = {};
  arr.forEach(elem => obj[elem.toString()] = true);
  const result = [];
  Object.keys(obj).forEach(e => {
    result.push(Number.parseInt(e));
  });
  return result;
}
console.log(unique(array3));

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


// isLeapYear を短く書いた例
function isLeapYear2(year) {
  // if 文の中で評価している式はそれ自体、審議値を返すことができるので直接 return することができます。
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const leapYearMessage2 = (year) => isLeapYear2(year)? `${year}年はうるう年です` : `${year}年はうるう年ではありません`;

console.log(leapYearMessage2(2020));
console.log(leapYearMessage2(2021));

// isLeapYear をアロー関数で書いた例
// アロー関数は ES6 で追加された構文で基本的に function 関数と同様に関数を定義するための構文ですが、いくつか相違点があります。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const isLeapYear3 = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const leapYearMessage3 = (year) => isLeapYear3(year)? `${year}年はうるう年です` : `${year}年はうるう年ではありません`;

console.log(leapYearMessage3(2020));
console.log(leapYearMessage3(2021));
