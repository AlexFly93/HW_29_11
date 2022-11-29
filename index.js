"use strict";

const sentence = "     to         BE       oR   nOt        To     bE ";
function toJadenCase(str) {
  // debugger
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
console.log(toJadenCase(sentence)); 

