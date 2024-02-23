function alphOrder(string) {
  return string.split("").sort().join();
}

// console.log(alphOrder("javascript"));

function uppercaseFirstLetter(string) {
  const arr = string.split(" ");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
}

// console.log(uppercaseFirstLetter("ege barkın mert cenk ali berkay ceren"));

function convertCelToFah(num) {
  return num + " derece " + ((num * 9) / 5 + 32) + " fahrenheit'a eşittir";
}

// console.log(convertCelToFah(32));

function countVowel(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "o" ||
      string[i] === "u" ||
      string[i] === "e" ||
      string[i] === "i"
    ) {
      count++;
    }
  }
  return count;
}

// console.log(countVowel("araba bisiklet tesla javascript kodlama"));
