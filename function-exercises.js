function alphOrder(string) {
  return string.split("").sort().join();
}

// console.log(alphOrder("javascript"));

function uppercaseFirstLetter(string) {
  const arr = string.split("");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join("");
}

console.log(uppercaseFirstLetter("ege barkın mert cenk ali berkay ceren"));

console.log("ege barkın mert cenk ali berkay ceren".split(" "));
