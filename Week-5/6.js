const findIndex = (arr, element) => {
  return arr.indexOf(element);
};

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // ➞ 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // ➞ 1
console.log(findIndex(["a", "g", "y", "d"], "d")); // ➞ 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // ➞ 0
