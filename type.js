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
const textarea = document.getElementById("input-text");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const timeover = document.querySelector(".timeover");
const result = document.querySelector(".result");
const timer = document.querySelector(".timer");
textarea.addEventListener("keydown", start);
let newtext = [];
let minute = 1;
let second = 60;
var called = 0;
let Interval;

function checkspeed() {}
function random() {
  randomtxt = text[Math.floor(Math.random() * text.length)];
  newtext.push(paragragh.innerText);
  word = newtext.toString().split(" ").length;
  paragragh.innerHTML = randomtxt;
  
  
}
function start() {
  if (called == 0) {
    Interval = setInterval(starttime, 999);
  }
  called++;
}

function starttime(item) {
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
    result.innerHTML = `Your typing speed is : ${word} WPM`;
    document.getElementById("input-text").disabled = true;
    clearInterval(Interval);
    if (textarea.value == "") {
      result.innerHTML = `Your typing speed is : 0 WPM`;
    }
  }

  if (paragragh.innerHTML == textarea.value) {
    random();
    textarea.value = " ";
  }
  console.log(word)

}

random();
