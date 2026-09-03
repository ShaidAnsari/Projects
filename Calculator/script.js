const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "del") {
            deleteValue();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldEl.value = "";
}
let resultDisplayed = false;
function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
    resultDisplayed = true;
}

function appendValue(buttonValue) {
    if (resultDisplayed) {
        inputFieldEl.value = buttonValue;
        resultDisplayed = false;
    } else {

        inputFieldEl.value += buttonValue;
        //   inputFieldEl.value = inputFieldEl.value + buttonValue;
    }
}
function deleteValue() {
    inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}