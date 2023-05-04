"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var display = document.getElementById("output");
var buttons = document.getElementsByClassName("button");
Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
        if (button.textContent != "=" &&
            button.textContent != "C" &&
            button.textContent != "x" &&
            button.textContent != "÷" &&
            button.textContent != "2√x" &&
            button.textContent != "mod" &&
            button.textContent != "<=" &&
            button.textContent != "⌫" &&
            button.textContent != "+/-" &&
            button.textContent != "sin" &&
            button.textContent != "cos" &&
            button.textContent != "tan" &&
            button.textContent != "sinh" &&
            button.textContent != "cosh" &&
            button.textContent != "tanh" &&
            button.textContent != "log" &&
            button.textContent != "ln" &&
            button.textContent != "^" &&
            button.textContent != "n!" &&
            button.textContent != "π" &&
            button.textContent != "exp" &&
            button.textContent != "degrees" &&
            button.textContent != "10^x" &&
            button.textContent != "DEG" &&
            button.textContent != "RAD" &&
            button.textContent != "x^y" &&
            button.textContent != "1/x" &&
            button.textContent != "x²" &&
            button.textContent != "|x|" &&
            button.textContent != "rand" &&
            button.textContent != "MS" &&
            button.textContent != "MC" &&
            button.textContent != "M+" &&
            button.textContent != "M-" &&
            button.textContent != "MR" &&
            button.textContent != "F-E" &&
            button.textContent != "e") {
            display.value += button.textContent;
        }
        else if (button.textContent === "=") {
            equals();
        }
        else if (button.textContent === "C") {
            clear();
        }
        else if (button.textContent === "x") {
            multiply();
        }
        else if (button.textContent === "÷") {
            divide();
        }
        else if (button.textContent === "+/-") {
            plusMinus();
        }
        else if (button.textContent === "<=") {
        }
        else if (button.textContent === "⌫") {
            backspace();
        }
        else if (button.textContent === "π") {
            pi();
        }
        else if (button.textContent === "2√x") {
            squareRoot();
        }
        else if (button.textContent === "mod") {
            mod();
        }
        else if (button.textContent === "sin") {
            sin();
        }
        else if (button.textContent === "cos") {
            cos();
        }
        else if (button.textContent === "tan") {
            tan();
        }
        else if (button.textContent === "sinh") {
            sinh();
        }
        else if (button.textContent === "cosh") {
            cosh();
        }
        else if (button.textContent === "tanh") {
            tanh();
        }
        else if (button.textContent === "log") {
            log();
        }
        else if (button.textContent === "ln") {
            ln();
        }
        else if (button.textContent === "x^y") {
            exponent();
        }
        else if (button.textContent === "10^x") {
            power();
        }
        else if (button.textContent === "n!") {
            factorial();
        }
        else if (button.textContent === "e") {
            e();
        }
        else if (button.textContent === "exp") {
            exp();
        }
        else if (button.textContent === "1/x") {
            oneByx();
        }
        else if (button.textContent === "x²") {
            xPow();
        }
        else if (button.textContent === "DEG") {
            degrees();
        }
        else if (button.textContent === "RAD") {
            radians();
        }
        else if (button.textContent === "|x|") {
            absolute();
        }
        else if (button.textContent === "rand") {
            random();
        }
        else if (button.textContent === "MS") {
            memory_store();
        }
        else if (button.textContent === "MC") {
            memory_clear();
        }
        else if (button.textContent === "M+") {
            memoryPlus();
        }
        else if (button.textContent === "M-") {
            memoryMinus();
        }
        else if (button.textContent === "MR") {
            memory_read();
        }
        else if (button.textContent === "F-E") {
            f_e();
        }
    });
});
// ***button functions***
function checkLength() {
    if (display.value.length >= 23) {
        display.value = "Overload Error";
    }
}
function syntaxError() {
    if (eval(display.value) == SyntaxError) {
        display.value = "Syntax Error";
    }
}
function equals() {
    if (display.value.indexOf("^") > -1) {
        var base = display.value.slice(0, display.value.indexOf("^"));
        var exponent = display.value.slice(display.value.indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent + ")");
    }
    else {
        display.value = eval(display.value);
        checkLength();
        syntaxError();
    }
}
function clear() {
    display.value = "";
}
function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
}
function multiply() {
    display.value = display.value + "*";
}
function divide() {
    display.value = display.value + "/";
}
function plusMinus() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    }
    else {
        display.value = "-" + display.value;
    }
}
function factorial() {
    var result = 1;
    if (Number(display.value) === 0) {
        display.value = "1";
    }
    else if (Number(display.value) < 0) {
        display.value = "undefined";
    }
    else {
        var result = 1;
        for (var i = +display.value; i > 0; i--) {
            result = result * i;
        }
        display.value = "".concat(result);
    }
}
function pi() {
    display.value = (+display.value * Math.PI).toString();
}
function e() {
    display.value = (+display.value * Math.E).toString();
}
function squareRoot() {
    display.value = Math.sqrt(+display.value).toString();
}
function mod() {
    display.value = display.value + "%";
}
function sin() {
    display.value = Math.sin(+display.value).toString();
}
function cos() {
    display.value = Math.cos(+display.value).toString();
}
function tan() {
    display.value = Math.tan(+display.value).toString();
}
function sinh() {
    display.value = Math.sinh(+display.value).toString();
}
function cosh() {
    display.value = Math.cosh(+display.value).toString();
}
function tanh() {
    display.value = Math.tanh(+display.value).toString();
}
function log() {
    display.value = Math.log10(+display.value).toString();
}
function ln() {
    display.value = Math.log(+display.value).toString();
}
function power() {
    display.value = Math.pow(10, +display.value).toString();
}
function exponent() {
    display.value = display.value + "^";
}
function exp() {
    display.value = Math.exp(+display.value).toString();
}
function oneByx() {
    display.value = 1 + "/" + display.value;
}
function xPow() {
    display.value = Math.pow(+display.value, 2).toString();
}
function degrees() {
    display.value = (+display.value * (180 / Math.PI)).toString();
}
function radians() {
    display.value = (+display.value * (Math.PI / 180)).toString();
}
function absolute() {
    display.value = Math.abs(+display.value).toString();
}
function random() {
    display.value = Math.random().toString();
}
var ms = "0";
function memory_store() {
    ms = display.value;
    display.value = "";
    console.log(ms);
}
function memory_clear() {
    ms = "";
    display.value = "";
}
function memoryPlus() {
    display.value = (Number(display.value) + Number(ms)).toString();
    ms = display.value;
}
function memoryMinus() {
    display.value = Math.abs(Number(display.value) - Number(ms)).toString();
    ms = display.value;
}
function memory_read() {
    display.value = ms;
}
function f_e() {
    display.value = Number(display.value).toExponential();
}
