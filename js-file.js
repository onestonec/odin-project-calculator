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
let clear_img = document.createElement("img");

clear.textContent = "AC";
//backspace.textContent = "DEL";
clear_img.src = "/clear.png"
clear_img.style.height = "20px";
clear_img.style.width = "auto";
clear_img.style.marginTop = "5px";
backspace.appendChild(clear_img);

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

button_area.appendChild(seven);
button_area.appendChild(eight);
button_area.appendChild(nine);
button_area.append(mult_sign);

button_area.appendChild(four);
button_area.appendChild(five);
button_area.appendChild(six);
button_area.append(plus_sign);


button_area.appendChild(one);
button_area.appendChild(two);
button_area.appendChild(three);
button_area.append(minus_sign);

button_area.appendChild(zero);
button_area.appendChild(dot);
button_area.appendChild(result_sign);

//functions area

let initial = 0;
let screennumber = initial;
let temp = null;
let total = 0;
let op_counter = 0;
let decimal_counter = 1;
let negative_on = 1;
let inputted = false;

top_screen.textContent = initial;

one.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(one.getAttribute("value"));
        } 
    } else {
        number_pad_click(one.getAttribute("value"));
    }
    inputted = true;
};

two.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(two.getAttribute("value"));
        }
    } else {
        number_pad_click(two.getAttribute("value"));
    }
    inputted = true;
};

three.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(three.getAttribute("value"));
        }
    } else {
        number_pad_click(three.getAttribute("value"));
    }
    inputted = true;
};

four.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(four.getAttribute("value"));
        }
    } else {
        number_pad_click(four.getAttribute("value"));
    }
    inputted = true;
};

five.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(five.getAttribute("value"));
        }
    } else {
        number_pad_click(five.getAttribute("value"));
    }
    inputted = true;
};

six.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(six.getAttribute("value"));
        }
    } else {
        number_pad_click(six.getAttribute("value"));
    }
    inputted = true;
};

seven.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(seven.getAttribute("value"));
        }
    } else {
        number_pad_click(seven.getAttribute("value"));
    }
    inputted = true;
};

eight.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(eight.getAttribute("value"));
        }
    } else {
        number_pad_click(eight.getAttribute("value"));
    }
    inputted = true;
};

nine.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(nine.getAttribute("value"));
        }
    } else {
        number_pad_click(nine.getAttribute("value"));
    }
    inputted = true;
};

zero.onclick = () => {
    if (temp){
        if (check_can_you_input_second_number())
        {
            number_pad_click(zero.getAttribute("value"));
        }
    } else {
        number_pad_click(zero.getAttribute("value"));
    }
    inputted = true;
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
    if (e.key == 0)
    {
        zero.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            zero.style.background = "";
            zero.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(zero.getAttribute("value"));
            }
        } else {
            number_pad_click(zero.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 1)
    {
        one.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            one.style.background = "";
            one.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(one.getAttribute("value"));
            } 
        } else {
            number_pad_click(one.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 2)
    {
        two.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            two.style.background = "";
            two.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(two.getAttribute("value"));
            }
        } else {
            number_pad_click(two.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 3)
    {
        three.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            three.style.background = "";
            three.removeAttribute("style");
        })
        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(three.getAttribute("value"));
            }
        } else {
            number_pad_click(three.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 4)
    {
        four.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            four.style.background = "";
            four.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(four.getAttribute("value"));
            }
        } else {
            number_pad_click(four.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 5)
    {
        five.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            five.style.background = "";
            five.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(five.getAttribute("value"));
            }
        } else {
            number_pad_click(five.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 6)
    {
        six.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            six.style.background = "";
            six.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(six.getAttribute("value"));
            }
        } else {
            number_pad_click(six.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 7)
    {
        seven.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            seven.style.background = "";
            seven.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(seven.getAttribute("value"));
            }
        } else {
            number_pad_click(seven.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 8)
    {
        eight.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            eight.style.background = "";
            eight.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(eight.getAttribute("value"));
            }
        } else {
            number_pad_click(eight.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == 9)
    {
        nine.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            nine.style.background = "";
            nine.removeAttribute("style");
        })

        if (temp){
            if (check_can_you_input_second_number())
            {
                number_pad_click(nine.getAttribute("value"));
            }
        } else {
            number_pad_click(nine.getAttribute("value"));
        }
        inputted = true;
    } else if (e.key == "Delete")
    {
        clear.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            clear.style.background = "";
            clear.removeAttribute("style");
        })

        clear_click();
    } else if (e.key == "Backspace")
    {
        backspace.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            backspace.style.background = "";
            backspace.removeAttribute("style");
        })

       backspace_click();
    } else if (e.key == "+")
    {
        plus_sign.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            plus_sign.style.background = "";
            plus_sign.removeAttribute("style");
        })
        plus_click();
    } else if (e.key == "-")
    {
        minus_sign.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            minus_sign.style.background = "";
            minus_sign.removeAttribute("style");
        })
        minus_click();
    } else if (e.key == "*")
    {
        mult_sign.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            mult_sign.style.background = "";
            mult_sign.removeAttribute("style");
        })
        mult_click();   
    } else if (e.key == "/")
    {
        div_sign.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            div_sign.style.background = "";
            div_sign.removeAttribute("style");
        })
        div_click();
    } else if (e.key == "Enter")
    {
        result_sign.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            result_sign.style.background = "";
            result_sign.removeAttribute("style");
        })
        result_click();   
    } else if (e.key == ".")
    {
        dot.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            dot.style.background = "";
            dot.removeAttribute("style");
        })

       /*  dot_click(); */
       if (temp){
        if (check_can_you_input_second_number())
        {
            dot_click();
        }
        } else {
            dot_click();
        }
    } else if (e.shiftKey && e.key == "^")
    {
        power_sign.style.background = "rgba(89,89,89,0.7)";
        document.addEventListener("keyup", () => {
            power_sign.style.background = "";
            power_sign.removeAttribute("style");
        })
        power_click();
    }
})

function number_pad_click(input){
    number = parseInt(input);

    if ((top_screen.textContent != 0) && (!dot.hasAttribute("class", "active"))) //handling non-decimal numbbers
    {
        top_screen.textContent += number;
        screennumber = number + screennumber*10;
    } else if ((dot.hasAttribute("class", "active"))) {         //handling decimals
        top_screen.textContent += number;
        let temp_decimal_counter = decimal_counter;
        let add = number;
        while(temp_decimal_counter > 0){
            add /= 10;
            temp_decimal_counter--;
        }
        decimal_counter++;
        screennumber += add;
    } else  {
        top_screen.textContent = number;  
        screennumber = number;   
    }
}

function clear_click(){
    screennumber = 0;
    total = 0;
    temp = null;
    op_counter = 0;
    negative_on = 1;
    inputted = false;
    top_screen.textContent = initial;
    bottom_screen.textContent = "";
    remove_other_active_signs();
}

function backspace_click(){
    if (top_screen.textContent.at(-1) == '+') {
        plus_sign.removeAttribute("class", "active");
    } else if (top_screen.textContent.at(-1) == '-') {
        minus_sign.removeAttribute("class", "active");
    } else if (top_screen.textContent.at(-1) == '×') {
        mult_sign.removeAttribute("class", "active");
    } else if (top_screen.textContent.at(-1) == '÷') {
        div_sign.removeAttribute("class", "active");
    } else{
        screennumber = Math.floor(screennumber / 10);
    }
    top_screen.textContent = top_screen.textContent.slice(0,-1);    
}

function plus_click(){
    remove_other_active_signs();
    plus_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "+";
}

function minus_click(){
    if (inputted == false)  //detect if the first number is a negative
    {
        console.log("in");
        top_screen.textContent = "-";
        negative_on = -1;
     
    } else{
        remove_other_active_signs();
        minus_sign.setAttribute("class", "active");
        post_click();
        top_screen.textContent += "-";
    }
}

function mult_click(){
    remove_other_active_signs();
    mult_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "×";
}

function div_click(){
    remove_other_active_signs();
    div_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "÷";
}

function result_click(){
    total = operate(temp, screennumber);
    //top_screen.textContent += "=";
    bottom_screen.textContent = total;
    temp = total;   //caching
    screennumber = 0;
    op_counter++;
    decimal_counter = 1;
}

function power_click(){
    remove_other_active_signs();
    power_sign.setAttribute("class", "active");
    post_click();
    top_screen.textContent += "^";
}

function dot_click(){
    if (!dot.hasAttribute("class", "active"))
    {
        dot.setAttribute("class", "active");
        top_screen.textContent += ".";
    }
}

function post_click(){
    /* if (temp == null)
    {
        
    }  */
    op_counter_zero_check();
    screennumber = 0;
    dot.removeAttribute("class", "active");
    decimal_counter = 1;
    negative_on = 1;
}

function op_counter_zero_check(){
    if ((temp == null))
    {
        temp = screennumber * negative_on; //caching the previous result
        negative_on = 1;
    } 
    
    if (op_counter == 0){
        top_screen.textContent = temp;
    } else{
        top_screen.textContent = total;
    }
}

function remove_other_active_signs(){
    plus_sign.removeAttribute("class", "active");
    minus_sign.removeAttribute("class", "active");
    mult_sign.removeAttribute("class", "active");
    div_sign.removeAttribute("class", "active");
    power_sign.removeAttribute("class", "active");
}

function check_can_you_input_second_number(){
    if ((!plus_sign.hasAttributes("class", "active")) && (!minus_sign.hasAttributes("active")) && (!mult_sign.hasAttributes("active")) && (!div_sign.hasAttributes("active")) && (!power_sign.hasAttributes("active")))
    {   
        console.log("all signs are off");
        return false;
    } else{
        return true;
    }
}

function operate(temp, screennumber){
    if (plus_sign.hasAttributes("class", "active")){
        total = temp + screennumber;
    } else if (minus_sign.hasAttributes("active")){
        total = temp - screennumber;
    } else if (mult_sign.hasAttributes("active")){
        total = temp * screennumber;
    } else if (div_sign.hasAttributes("active")){
        if (screennumber == 0)
        {
            alert("Cannot divide by 0!");
            //clear_click();
            return NaN;
        }   
        total = temp / screennumber;
    } else if (power_sign.hasAttributes("active")){
       
        total = 1;
        while (screennumber > 0 )
        {
            total = total * temp;
            screennumber--;
        }
    } else if (screennumber == 0)
    {
        console.log("hello");
        total = parseFloat(top_screen.textContent);
    }
    remove_other_active_signs();
    total = parseFloat((total.toFixed(5)));
    console.log(total);
    dot.removeAttribute("class", "active");
    return total;
}
