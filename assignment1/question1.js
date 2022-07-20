Array.prototype.even = function () {
  let evenArr = new Array();
  this.forEach((elem) => {
    if (elem % 2 == 0) {
      evenArr.push(elem);
    }
  });
  console.log("Even Array: ");
  console.log(evenArr);
};
[3, 24, 1, 8, 5, 10, 7, 12].even();
console.log("====================");
Array.prototype.odd = function () {
  let oddArr = new Array();
  this.forEach((elem) => {
    if (elem % 2 == 1) {
      oddArr.push(elem);
    }
  });
  console.log("Odd Array: ");
  console.log(oddArr);
};
[3, 24, 1, 8, 5, 10, 7, 12].odd();
