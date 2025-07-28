let button = document.querySelector("#check-btn");
let result = document.querySelector("#result");
function checkPalindrome(input) {
  let cleanInput = input.replace(/[^a-zA-Z0-9]/g, "");
  if (
    cleanInput.toLowerCase() ===
    cleanInput.toLowerCase().split("").reverse().join("")
  )
    return true;
  else return false;
}
function updateResult() {
  let input = document.querySelector("#text-input").value;
  if (input === "") {
    result.innerHTML = "...";
    alert("Please input a value");
    return;
  }
  result.innerHTML = `${input} is ${checkPalindrome(input) ? "" : "not "} a palindrome`;
}
button.onclick = updateResult;
