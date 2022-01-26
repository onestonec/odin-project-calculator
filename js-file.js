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

//functions area

let initial = 0;

screen.textContent = initial;
let screennumber = initial;

one.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 1;
        screennumber = 1 + screennumber*10;
    } else {
        screen.textContent = 1;  
        screennumber = 1;   
    }
};

two.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 2;
        screennumber = 2 + screennumber*10;
    } else {
        screen.textContent = 2;
        screennumber = 2;   
    }
};

three.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 3;
        screennumber = 3 + screennumber*10;
    } else {
        screen.textContent = 3;
        screennumber = 3;   
    }
};

four.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 4;
        screennumber = 4 + screennumber*10;
    } else {
        screen.textContent = 4;
        screennumber = 4;   
    }
};

five.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 5;
        screennumber = 5 + screennumber*10;
    } else {
        screen.textContent = 5;
        screennumber = 5;   
    }
};

six.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 6;
        screennumber = 6 + screennumber*10;
    } else {
        screen.textContent = 6;
        screennumber = 6;   
    }
};

seven.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 7;
        screennumber = 7 + screennumber*10;
    } else {
        screen.textContent = 7;
        screennumber = 7;   
    }
};

eight.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 8;
        screennumber = 8 + screennumber*10;
    } else {
        screen.textContent = 8;
        screennumber = 8;   
    }
};

nine.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 9;
        screennumber = 9 + screennumber*10;
    } else {
        screen.textContent = 9;
        screennumber = 9;   
    }
};

zero.onclick = () => {
    if (screennumber != 0)
    {
        screen.textContent += 0;
        screennumber = 0 + screennumber*10;
    } else {
        screen.textContent = 0;
        screennumber = 0;   
    }
};