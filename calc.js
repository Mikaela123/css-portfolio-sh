var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);
//This function is for the operations in the calculator. I have made if statements for addition, subtraction, multipication, division, exponents, and finding the square root of a number. I used input1.value and input2.value to distinguish between the two numbers that are going to be in the equation.
function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "^"){
        answer = Math.pow(input1.value,input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "sqrt"){
        answer = Math.sqrt(input1.value);
        display.innerHTML = answer;
    }
}
