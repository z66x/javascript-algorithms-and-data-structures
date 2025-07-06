function isAlphanumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}
let button = document.querySelector("#check-btn");
let result = document.querySelector("#result");
button.onclick = checkPalindrome;
function checkPalindrome() {
	let input = document.querySelector("#input").value;
	let cleanedInput = input.toLowerCase().split("").filter(isAlphanumeric).join("");
	let reversedInput = cleanedInput.split("").reverse().join("");
	
	if (cleanedInput === reversedInput) {
		result.textContent = "It's a palindrome!";
	} else {
		result.textContent = "It's not a palindrome.";
	}
}