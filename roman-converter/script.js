let number = document.querySelector("#number");
let convertBtn = document.querySelector("#convert-btn");
let output = document.querySelector("#output");
const convertToRoman = (decimalNumber) => {
  let romanNumber = "";
  let oneUnits = ["I", "X", "C", "M"];
  let fiveUnits = ["V", "L", "D"];
  let digits = 0;
  while (decimalNumber) {
    let decimalDigit = decimalNumber % 10;
    let romanDigit = "";
    if (decimalDigit === 9) {
      romanDigit += oneUnits[digits];
      romanDigit += oneUnits[digits + 1];
      decimalDigit = 0;
    } else if (decimalDigit === 4) {
      romanDigit += oneUnits[digits];
      romanDigit += fiveUnits[digits];
      decimalDigit = 0;
    } else if (decimalDigit > 4) {
      romanDigit += fiveUnits[digits];
      decimalDigit = Math.abs(decimalDigit - 5);
    }
    romanDigit += oneUnits[digits].repeat(decimalDigit);
    romanNumber = romanDigit + romanNumber;
    decimalNumber = Math.floor(decimalNumber / 10);
    digits++;
  }
  output.innerHTML = romanNumber;
};
convertBtn.addEventListener("click", () => {
  if (!number.value) {
    output.innerHTML = "Please enter a valid number";
  } else if (parseInt(number.value) < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (parseInt(number.value) > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else convertToRoman(parseInt(number.value));
});
