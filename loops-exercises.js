let num = 10;
let num1 = 2;

//büyük sayıyı gösteren fonksyion
function showBiggerNum(num, num1) {
  if (num > num1) {
    console.log(num + " büyüktür " + num1);
  } else if (num1 > num) {
    console.log(num1 + " büyüktür " + num);
  } else {
    console.log(num + " ve " + num1 + " eşittir ");
  }
}

// showBiggerNum(num, num1);
// showBiggerNum(100, 230);

//çift sayı tek sayı gösteren fonksiyon
function showNumType(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (i % 2 === 0) {
      console.log(i + " çift sayıdır");
    } else {
      console.log(i + " tek sayıdır");
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// showNumType(arr)

let sentence = "Kodlamaya bayılıyorum ve hastasıyım ve ölüp bitiyorum";

// string indeksini yazdıran fonksiyon
function printSentence(sen) {
  for (let i = 0; i < sen.length; i++) {
    if (sen[i] === " ") {
      i++;
    }
    console.log(sen[i]);
  }
}

// printSentence(sentence);

function searchElementInArr(arr, element) {
  //   let searchTerm = element;
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      arr[i] = result;
      console.log(result + " bulundu");
      break;
    } else if (element !== arr[i]) {
      console.log(result + " bulunamadı");
    }
  }
}

// searchElementInArr(arr, 6);

for (let i = 3; i < 29; i++) {
  if (i % 2 === !0) {
    console.log(i);
  }
}

function showOddNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}

// showOddNum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

const arr1 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
const evens = [];
const odds = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) {
    evens.push(arr1[i]);
  } else if (arr1[i] % 2 !== 0) {
    odds.push(arr1[i]);
  }
}

// console.log(evens);
// console.log(odds);
