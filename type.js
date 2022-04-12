const text = [
  "Two common terms used to describe",
  "a salesperson are Farmer and Hunter",
  "The reality is that most professional salespeople have a little of both",
  "A hunter is often associated",
  "with aggressive personalities who use aggressive sales technique",
  "In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals",
  'This process is called "sales capturing"',
  "An example is a commodity sale such as a long distance salesperson",
  "Their job is to find and convert buyer.",
  "A sales farmer is someone who creates sales demand through activities that directly influence and alter the buying process",
];
const paragragh = document.querySelector(".paragragh");
const qoute = document.getElementById("input-text");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const timeover = document.querySelector(".timeover");
const timer = document.querySelector(".timer");
qoute.addEventListener("input", start);
let minute = 1;
let second = 60;
var called = true;
let Interval;

function random() {
  randomtxt = text[Math.floor(Math.random() * text.length)];
  word = randomtxt.split("");
  paragragh.innerHTML = "";
  word.map((item) => {
    const chracterSpan = document.createElement("span");
    chracterSpan.innerText = item;
    paragragh.append(chracterSpan);
  });
}
function start() {
  if (called) {
    Interval = setInterval(starttime, 1000);
    called=false;
  }

  //letters check
  const allSpanChracter = document.querySelectorAll("span");
  const textChracter = qoute.value.split("");

  allSpanChracter.forEach((item, index) => {
    const chracter = textChracter[index];
    if (chracter == null) {
      item.classList.remove("incorrect");
      item.classList.remove("correct");
    } else if (chracter == item.innerText) {
      item.classList.add("correct");
      item.classList.remove("incorrect");
    } else {
      item.classList.add("incorrect");
      item.classList.remove("correct");
    }
  });
}

//Timer
function starttime() {
  second--;
  minute--;
  if (second > 9) {
    sec.innerHTML = second;
  }
  if (second <= 9) {
    sec.innerHTML = "0" + second;
  }
  if (second <= 59) {
    min.innerHTML = "00";
  }
  if (minute > 9) {
    min.innerHTML = minute;
  }

  if (second == 0) {
    sec.innerText = "00";

    timeover.style.display = "block";

    document.getElementById("input-text").disabled = true;
    clearInterval(Interval);
  }

  if (paragragh.innerText == qoute.value) {
    random();
    qoute.value = "";
  }
}

random();
