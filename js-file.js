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
let power_sign = document.createElement("button");
let div_sign = document.createElement("button");
let mult_sign = document.createElement("button");
let minus_sign = document.createElement("button");
let plus_sign = document.createElement("button");
let result_sign = document.createElement("button");
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
power_sign.textContent = "x^y";
div_sign.textContent = "÷";
mult_sign.textContent = "×";
plus_sign.textContent = "+";
minus_sign.textContent = "–";
dot.textContent = ".";

result_sign.style.gridColumn = "span 2 / auto";
result_sign.setAttribute("id", "result");
result_sign.textContent = "=";

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
button_area.appendChild(power_sign);
button_area.appendChild(div_sign);

button_area.appendChild(nine);
button_area.appendChild(eight);
button_area.appendChild(seven);
button_area.append(mult_sign);

button_area.appendChild(six);
button_area.appendChild(five);
button_area.appendChild(four);
button_area.append(plus_sign);

button_area.appendChild(three);
button_area.appendChild(two);
button_area.appendChild(one);
button_area.append(minus_sign);

button_area.appendChild(zero);
button_area.appendChild(dot);
button_area.appendChild(result_sign);

//functions area

let initial = 0;

screen.textContent = initial;
let screennumber = initial;
let temp = 0;
let total = 0;
let op_counter = 0;

one.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 1;
        screennumber = 1 + screennumber*10;
    } else {
        screen.textContent = 1;  
        screennumber = 1;   
    }
};

two.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 2;
        screennumber = 2 + screennumber*10;
    } else {
        screen.textContent = 2;
        screennumber = 2;   
    }
};

three.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 3;
        screennumber = 3 + screennumber*10;
    } else {
        screen.textContent = 3;
        screennumber = 3;   
    }
};

four.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 4;
        screennumber = 4 + screennumber*10;
    } else {
        screen.textContent = 4;
        screennumber = 4;   
    }
};

five.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 5;
        screennumber = 5 + screennumber*10;
    } else {
        screen.textContent = 5;
        screennumber = 5;   
    }
};

six.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 6;
        screennumber = 6 + screennumber*10;
    } else {
        screen.textContent = 6;
        screennumber = 6;   
    }
};

seven.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 7;
        screennumber = 7 + screennumber*10;
    } else {
        screen.textContent = 7;
        screennumber = 7;   
    }
};

eight.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 8;
        screennumber = 8 + screennumber*10;
    } else {
        screen.textContent = 8;
        screennumber = 8;   
    }
};

nine.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 9;
        screennumber = 9 + screennumber*10;
    } else {
        screen.textContent = 9;
        screennumber = 9;   
    }
};

zero.onclick = () => {
    if (screen.textContent != 0)
    {
        screen.textContent += 0;
        screennumber = 0 + screennumber*10;
    } else {
        screen.textContent = 0;
        screennumber = 0;   
    }
};

clear.onclick = () => {
    screennumber = 0;
    total = 0;
    temp = 0;
    op_counter = 0;
    screen.textContent = initial;
}

plus_sign.onclick = () => {
    plus_sign.setAttribute("class", "active");
    if (op_counter == 0)
    {
        temp = screennumber;
    } 
    
    screennumber = 0;
    screen.textContent += "+";
}

minus_sign.onclick = () => {
    minus_sign.setAttribute("class", "active");
    if (op_counter == 0)
    {
        temp = screennumber;
    } 
    screennumber = 0;
    screen.textContent += "–";
}

mult_sign.onclick = () => {
    mult_sign.setAttribute("class", "active");
    if (op_counter == 0)
    {
        temp = screennumber;
    } 
    screennumber = 0;
    screen.textContent += "×";
}

div_sign.onclick = () => {
    div_sign.setAttribute("class", "active");
    if (op_counter == 0)
    {
        temp = screennumber;
    } 
    screennumber = 0;
    screen.textContent += "÷";
}

power_sign.onclick = () => {
    power_sign.setAttribute("class", "active");
    if (op_counter == 0)
    {
        temp = screennumber;
    } 
    screennumber = 0;
    screen.textContent += "^";
}

result_sign.onclick = () => {
    total = operate(temp, screennumber);
    screen.textContent += "=" + total;
    temp = total;
    screennumber = 0;
    op_counter++;
}

function operate(temp, screennumber){
    if (plus_sign.hasAttributes("active")){
        
        total = temp + screennumber;
        plus_sign.removeAttribute("class", "active");
    } else if (minus_sign.hasAttributes("active")){
        minus_sign.removeAttribute("class", "active");
        total = temp - screennumber;
    } else if (mult_sign.hasAttributes("active")){
        mult_sign.removeAttribute("class", "active");
        total = temp * screennumber;
    } else if (div_sign.hasAttributes("active")){
        div_sign.removeAttribute("class", "active");
        total = temp / screennumber;
    } else if (power_sign.hasAttributes("active")){
        power_sign.removeAttribute("class", "active");
        total = 1;
        while (screennumber > 0 )
        {
            total = total * temp;
            screennumber--;
        }
    }
    console.log(total);
    return total;
}