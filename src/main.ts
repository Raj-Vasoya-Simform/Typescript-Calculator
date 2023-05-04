import "../src/style.css";

const display = document.getElementById("output") as HTMLInputElement;
const buttons = document.getElementsByClassName("button");

// defining type
type DisplayFn = (display: { value: string }) => void;
type ButtonClickHandler = () => void;

type Display = { value: string };
type FactorialFn = (display: Display) => void;

// ***button functions***
const checkLength: ButtonClickHandler = () => {
  if (display.value.length >= 23) {
    display.value = "Overload Error";
  }
};
const syntaxError: DisplayFn = (display) => {
  try {
    eval(display.value);
  } catch (error) {
    if (error instanceof SyntaxError) {
      display.value = "Syntax Error";
    }
  }
};

const equals: DisplayFn = (display) => {
  if (display.value.indexOf("^") > -1) {
    var base = display.value.slice(0, display.value.indexOf("^"));
    var exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError(display);
  }
};

// Listen for keyup event on the display element
display.addEventListener("keyup", (event) => {
  // Check if the pressed key is the Enter key
  if (event.key === "Enter") {
    equals(display);
  }
});

const clear: ButtonClickHandler = () => {
  display.value = "";
};

// Listen for keyup event on the display element
display.addEventListener("keyup", (event) => {
  // Check if the pressed key is the Backspace key
  if (event.key === "Backspace") {
    clear();
  }
});

const backspace: DisplayFn = (display) => {
  display.value = display.value.substring(0, display.value.length - 1);
};
const multiply: ButtonClickHandler = () => {
  display.value = display.value + "*";
};
const divide: ButtonClickHandler = () => {
  display.value = display.value + "/";
};
const plusMinus: ButtonClickHandler = () => {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
};
const factorial: FactorialFn = () => {
  var result = 1;
  if (Number(display.value) === 0) {
    display.value = "1";
  } else if (Number(display.value) < 0) {
    display.value = "undefined";
  } else {
    var result = 1;
    for (var i = +display.value; i > 0; i--) {
      result = result * i;
    }
    display.value = `${result}`;
  }
};
const pi: ButtonClickHandler = () => {
  display.value = (+display.value * Math.PI).toString();
};
const e: ButtonClickHandler = () => {
  display.value = (+display.value * Math.E).toString();
};
const squareRoot: ButtonClickHandler = () => {
  display.value = Math.sqrt(+display.value).toString();
};
const mod: ButtonClickHandler = () => {
  display.value = display.value + "%";
};
const sin: ButtonClickHandler = () => {
  display.value = Math.sin(+display.value).toString();
};
const cos: ButtonClickHandler = () => {
  display.value = Math.cos(+display.value).toString();
};
const tan: ButtonClickHandler = () => {
  display.value = Math.tan(+display.value).toString();
};
const sinh: ButtonClickHandler = () => {
  display.value = Math.sinh(+display.value).toString();
};
const cosh: ButtonClickHandler = () => {
  display.value = Math.cosh(+display.value).toString();
};
const tanh: ButtonClickHandler = () => {
  display.value = Math.tanh(+display.value).toString();
};
const log: ButtonClickHandler = () => {
  display.value = Math.log10(+display.value).toString();
};
const ln: ButtonClickHandler = () => {
  display.value = Math.log(+display.value).toString();
};
const power: ButtonClickHandler = () => {
  display.value = Math.pow(10, +display.value).toString();
};
const exponent: ButtonClickHandler = () => {
  display.value = display.value + "^";
};
const exp: ButtonClickHandler = () => {
  display.value = Math.exp(+display.value).toString();
};
const oneByx: ButtonClickHandler = () => {
  display.value = 1 + "/" + display.value;
};

const xPow: ButtonClickHandler = () => {
  display.value = Math.pow(+display.value, 2).toString();
};

const degrees: ButtonClickHandler = () => {
  display.value = (+display.value * (180 / Math.PI)).toString();
};

const radians: ButtonClickHandler = () => {
  display.value = (+display.value * (Math.PI / 180)).toString();
};

const absolute: ButtonClickHandler = () => {
  display.value = Math.abs(+display.value).toString();
};

const random: ButtonClickHandler = () => {
  display.value = Math.random().toString();
};

let ms: string = "0";
const memory_store: ButtonClickHandler = () => {
  ms = display.value;
  display.value = "";
  console.log(ms);
};

const memory_clear: ButtonClickHandler = () => {
  ms = "";
  display.value = "";
};

const memoryPlus: ButtonClickHandler = () => {
  display.value = (Number(display.value) + Number(ms)).toString();
  ms = display.value;
};

const memoryMinus: ButtonClickHandler = () => {
  display.value = Math.abs(Number(display.value) - Number(ms)).toString();
  ms = display.value;
};

const memory_read: ButtonClickHandler = () => {
  display.value = ms;
};

const f_e: ButtonClickHandler = () => {
  display.value = Number(display.value).toExponential();
};

// defining dictionary of button text and function names
const buttonFunctions: { [key: string]: () => void} = {
  "=": () => equals(display),
  "C": clear,
  "x": multiply,
  "÷": divide,
  "+/-": plusMinus,
  "⌫": () => backspace(display),
  "π": pi,
  "2√x": squareRoot,
  "mod": mod,
  "sin": sin,
  "cos": cos,
  "tan": tan,
  "sinh": sinh,
  "cosh": cosh,
  "tanh": tanh,
  "log": log,
  "ln": ln,
  "x^y": exponent,
  "10^x": power,
  "n!": () => factorial({ value: display.value }),
  "e": e,
  "exp": exp,
  "1/x": oneByx,
  "x²": xPow,
  "DEG": degrees,
  "RAD": radians,
  "|x|": absolute,
  "rand": random,
  "MS": memory_store,
  "MC": memory_clear,
  "M+": memoryPlus,
  "M-": memoryMinus,
  "MR": memory_read,
  "F-E": f_e,
};

// loop through buttons and attach click event listeners
for (const button of Array.from(buttons)) {
  button.addEventListener("click", () => {
    const textContent = button.textContent;
    const func = textContent ? buttonFunctions[textContent] : null;
    if (func) {
      func();
    } else {
      display.value += textContent;
    }
  });
}
