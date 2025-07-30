const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");

const validateNumber = (number) => {
  const numberRegex = [
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
  ];
  if (numberRegex.some((regex) => regex.test(number))) {
    resultsDiv.innerHTML = `Valid US number: ${number}`;
  } else {
    resultsDiv.innerHTML = `Invalid US number: ${number}`;
  }
};
checkBtn.onclick = () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }
  validateNumber(userInput.value);
};
clearBtn.onclick = () => (resultsDiv.innerHTML = "");
