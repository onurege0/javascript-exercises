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

searchElementInArr(arr, 6);
