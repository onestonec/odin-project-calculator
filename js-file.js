const calculator = document.getElementById("calculator");

//section creation
const screen = document.createElement("div");
const button_area = document.createElement("div");

screen.setAttribute("id", "screen");
button_area.setAttribute("id", "button_area");

calculator.appendChild(screen);
calculator.appendChild(button_area);

//buttons creation
let clear = document.createElement("button");
let backspace = document.createElement("button");
let power = document.createElement("button");
let division = document.createElement("button");
let multiplication = document.createElement("button");
let subtraction = document.createElement("button");
let summation = document.createElement("button");
let result = document.createElement("button");
let dot = document.createElement("button");

let zero = document.createElement("button");
let one = document.createElement("button");
let two = document.createElement("button");
let three = document.createElement("button");
let four = document.createElement("button");
let five = document.createElement("button");
let six = document.createElement("button");
let seven = document.createElement("button");
let eight = document.createElement("button");
let nine = document.createElement("button");

clear.textContent = "C";
backspace.textContent = "DEL";
power.textContent = "x^y";
division.textContent = "÷";
multiplication.textContent = "×";
summation.textContent = "+";
subtraction.textContent = "–";
dot.textContent = ".";

result.style.gridColumn = "span 2 / auto";
result.setAttribute("id", "result");
result.textContent = "=";

zero.textContent = "0";
one.textContent = "1";
two.textContent = "2";
three.textContent = "3";
four.textContent = "4";
five.textContent = "5";
six.textContent = "6";
seven.textContent = "7";
eight.textContent = "8";
nine.textContent = "9";

button_area.appendChild(clear);
button_area.appendChild(backspace);
button_area.appendChild(power);
button_area.appendChild(division);

button_area.appendChild(nine);
button_area.appendChild(eight);
button_area.appendChild(seven);
button_area.append(multiplication);

button_area.appendChild(six);
button_area.appendChild(five);
button_area.appendChild(four);
button_area.append(summation);

button_area.appendChild(three);
button_area.appendChild(two);
button_area.appendChild(one);
button_area.append(subtraction);

button_area.appendChild(zero);
button_area.appendChild(dot);
button_area.appendChild(result);

//



