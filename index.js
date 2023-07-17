const allChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const charNum = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const charSym = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let pswLength = 7;

let btnEl = document.querySelector("#btn-el");
let ans1El = document.querySelector("#ans1-el");
let ans2El = document.querySelector("#ans2-el");
let minusEl = document.querySelector("#minus-el");
let plusEl = document.querySelector("#plus-el");
let pswAmountEl = document.querySelector("#amount-el");
let numYesEl = document.querySelector("#numyes-el");
let symYesEl = document.querySelector("#symyes-el");

let ans1 = "";
let ans2 = "";

let id = null;
let opac = 0.99;
let hitZero = false;

let numStat = true;
let symStat = true;

function generate2Password() {
  ans1 = "";
  ans2 = "";
  for (let i = 0; i < pswLength; i++) {
    if (numStat && symStat) {
      ans1 += allChar[Math.floor(Math.random() * allChar.length)];
      ans2 += allChar[Math.floor(Math.random() * allChar.length)];
    } else if (numStat && !symStat) {
      ans1 += charNum[Math.floor(Math.random() * charNum.length)];
      ans2 += charNum[Math.floor(Math.random() * charNum.length)];
    } else if (!numStat && symStat) {
      ans1 += charSym[Math.floor(Math.random() * charSym.length)];
      ans2 += charSym[Math.floor(Math.random() * charSym.length)];
    } else {
      ans1 += characters[Math.floor(Math.random() * characters.length)];
      ans2 += characters[Math.floor(Math.random() * characters.length)];
    }
  }
  ans1El.textContent = ans1;
  ans2El.textContent = ans2;
}

function subLen() {
  pswLength -= 1;
  pswAmountEl.textContent = pswLength;
  if (pswLength <= 1) {
    minusEl.style.backgroundColor = "gray";
    minusEl.disabled = true;
  }
  if (plusEl.disabled) {
    plusEl.style.backgroundColor = "#10b981";
    plusEl.disabled = false;
  }
}

function addLen() {
  pswLength += 1;
  pswAmountEl.textContent = pswLength;
  if (pswLength > 13) {
    plusEl.style.backgroundColor = "gray";
    plusEl.disabled = true;
  }
  if (minusEl.disabled) {
    minusEl.style.backgroundColor = "#10b981";
    minusEl.disabled = false;
  }
}

function copyAns1() {
  if (ans1 != "") {
    navigator.clipboard.writeText(ans1);
    ans1El.textContent = "copied!";
    doAnim(1);
  }
}

function copyAns2() {
  if (ans2 != "") {
    navigator.clipboard.writeText(ans2);
    ans2El.textContent = "copied!";
    doAnim(2);
  }
}

function doAnim(x) {
  id = null;
  opac = 0.99;
  hitZero = false;
  clearInterval(id);
  id = setInterval(function () {
    fadeOut(x);
  }, 10);
}

function fadeOut(y) {
  if (opac >= 1.0) {
    opac = 0.99;
    if (y === 1) {
      ans1El.style.opacity = opac;
    } else {
      ans2El.style.opacity = opac;
    }
    clearInterval(id);
  } else {
    if (y === 1) {
      ans1El.style.opacity = opac;
    } else {
      ans2El.style.opacity = opac;
    }
    if (opac <= 0.0) {
      hitZero = true;
      ans1El.textContent = ans1;
      ans2El.textContent = ans2;
    }
    if (hitZero) {
      opac += 0.01;
    } else {
      opac -= 0.01;
    }
  }
}

function numStatus() {
  if (numStat) {
    numStat = false;
    numYesEl.textContent = "NO";
    numYesEl.style.backgroundColor = "#f25c54";
  } else {
    numStat = true;
    numYesEl.textContent = "YES";
    numYesEl.style.backgroundColor = "#10b981";
  }
}

function symStatus() {
  if (symStat) {
    symStat = false;
    symYesEl.textContent = "NO";
    symYesEl.style.backgroundColor = "#f25c54";
  } else {
    symStat = true;
    symYesEl.textContent = "YES";
    symYesEl.style.backgroundColor = "#10b981";
  }
}
