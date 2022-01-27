const calculator = document.getElementById("calculator");

//section creation
const screen = document.createElement("div");
const top_screen = document.createElement("div");
const bottom_screen = document.createElement("div");
const button_area = document.createElement("div");

screen.setAttribute("id", "screen");
top_screen.setAttribute("id", "top_screen");
bottom_screen.setAttribute("id", "bottom_screen");
button_area.setAttribute("id", "button_area");

calculator.appendChild(screen);
calculator.appendChild(button_area);
screen.appendChild(top_screen);
screen.appendChild(bottom_screen);

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
result_sign.setAttribute("id", "result_sign");
result_sign.textContent = "=";

zero.textContent = "0";
zero.setAttribute("value", "0");

one.textContent = "1";
one.setAttribute("value", "1");

two.textContent = "2";
two.setAttribute("value", "2");

three.textContent = "3";
three.setAttribute("value", "3");

four.textContent = "4";
four.setAttribute("value", "4");

five.textContent = "5";
five.setAttribute("value", "5");

six.textContent = "6";
six.setAttribute("value", "6");

seven.textContent = "7";
seven.setAttribute("value", "7");

eight.textContent = "8";
eight.setAttribute("value", "8");

nine.textContent = "9";
nine.setAttribute("value", "9");

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

top_screen.textContent = initial;
let screennumber = initial;
let temp = 0;
let total = 0;
let op_counter = 0;
let decimal_counter = 1;

one.onclick = () => {
    number_click(one.getAttribute("value"));
};

two.onclick = () => {
    number_click(two.getAttribute("value"));
};

three.onclick = () => {
    number_click(three.getAttribute("value"));
};

four.onclick = () => {
    number_click(four.getAttribute("value"));
};

five.onclick = () => {
    number_click(five.getAttribute("value"));
};

six.onclick = () => {
    number_click(six.getAttribute("value"));
};

seven.onclick = () => {
    number_click(seven.getAttribute("value"));
};

eight.onclick = () => {
    number_click(eight.getAttribute("value"));
};

nine.onclick = () => {
    number_click(nine.getAttribute("value"));
};

zero.onclick = () => {
    number_click(zero.getAttribute("value"));
};

clear.onclick = () => {
    clear_click();
}

backspace.onclick = () => {
    backspace_click();
}

dot.onclick = () => {
    dot_click();
}

plus_sign.onclick = () => {
    plus_click();
}

minus_sign.onclick = () => {
    minus_click();
}

mult_sign.onclick = () => {
    mult_click();
}

div_sign.onclick = () => {
    div_click();
}

power_sign.onclick = () => {
    power_click();
}

result_sign.onclick = () => {
    result_click();
}

document.addEventListener("keydown", (e) => {
/*     console.log(e.key); */
    if (e.key == 0)
    {
        number_click(zero.getAttribute("value"));
    } else if (e.key == 1)
    {
        number_click(one.getAttribute("value"));
    } else if (e.key == 2)
    {
        number_click(two.getAttribute("value"));
    } else if (e.key == 3)
    {
        number_click(three.getAttribute("value"));
    } else if (e.key == 4)
    {
        number_click(four.getAttribute("value"));
    } else if (e.key == 5)
    {
        number_click(five.getAttribute("value"));
    } else if (e.key == 6)
    {
        number_click(six.getAttribute("value"));
    } else if (e.key == 7)
    {
        number_click(seven.getAttribute("value"));
    } else if (e.key == 8)
    {
        number_click(eight.getAttribute("value"));
    } else if (e.key == 9)
    {
        number_click(nine.getAttribute("value"));
    } else if (e.key == "Delete")
    {
        clear_click();
    } else if (e.key == "Backspace")
    {
       backspace_click();
    } else if (e.key == "+")
    {
        plus_click();
    } else if (e.key == "-")
    {
        minus_click();
    } else if (e.key == "*")
    {
        mult_click();   
    } else if (e.key == "/")
    {
        div_click();
    } else if (e.key == "Enter")
    {
        result_click();   
    } else if (e.key == ".")
    {
        dot_click();
    } else if (e.shiftKey && e.key == "^")
    {
        power_click();
    }
})

function number_click(input){

    number = parseInt(input);

    if ((top_screen.textContent != 0) && (!dot.hasAttribute("class", "active")))
    {
        top_screen.textContent += number.toLocaleString("en");
        screennumber = number + screennumber*10;
    } else if ((dot.hasAttribute("class", "active"))) {
        top_screen.textContent += number.toLocaleString("en");
        let temp_decimal_counter = decimal_counter;
        let add = number;
        while(temp_decimal_counter > 0){
            add /= 10;
            temp_decimal_counter--;
        }
        decimal_counter++;
        screennumber += add;
    } else  {
        top_screen.textContent = number.toLocaleString("en");  
        screennumber = number;   
    }
}

function post_click(){
    op_counter_zero_check();
    screennumber = 0;
    dot.removeAttribute("class", "active");
    decimal_counter = 1;
}

function clear_click(){
    screennumber = 0;
    total = 0;
    temp = 0;
    op_counter = 0;
    top_screen.textContent = initial;
    bottom_screen.textContent = "";
}

function backspace_click(){
    top_screen.textContent = top_screen.textContent.slice(0,-1);
    screennumber = Math.floor(screennumber / 10);
}

function plus_click(){
    plus_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "+";
}

function minus_click(){
    minus_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "–";
}

function mult_click(){
    mult_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "×";
}

function div_click(){
    div_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "÷";
}

function result_click(){
    total = operate(temp, screennumber);
    top_screen.textContent += "=";
    bottom_screen.textContent = total.toLocaleString("en");
    temp = total;
    screennumber = 0;
    op_counter++;
    decimal_counter = 1;
}

function power_click(){
    power_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "^";
}

function dot_click(){
    dot.setAttribute("class", "active");
    /* if (op_counter == 0)
    {
        temp = screennumber/10;
    }  */
    top_screen.textContent += "."
}

function op_counter_zero_check(){
    if (op_counter == 0)
    {
        temp = screennumber; //caching the previous result
    } else {
        top_screen.textContent = total.toLocaleString("en");
    }
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
        if (screennumber == 0)
        {
            alert("Cannot divide by 0!");
            return NaN;
        }   
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
    total = parseFloat((total.toFixed(5)));
    console.log(total);
    dot.removeAttribute("class", "active");
    return total;
}