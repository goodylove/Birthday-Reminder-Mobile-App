// declaration

import birthdayWishes from "./jason.js";

// https://esdiscuss.org/topic/ambiguity-with-default-exports-and-live-bindings

// https://www.google.com/search?client=firefox-b-d&q=how+to+import+in+javascript
const calendar = document.querySelector(".calan");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const save = document.getElementById("save");
const allInput = document.querySelectorAll(".inp");
const reminder = document.querySelector(".reminder");
let notify = document.querySelector(".notify");
const copyBtn = document.querySelector("#copy-text-btn");
const copyMessage = document.querySelector("#text-cop");
const firstArray = [];
let currentAarray = [];
const con = document.querySelector(".con");
const sms = document.querySelector(".sms");

const remindBtn = document.querySelector(".remind-btn");
const drop = document.getElementById("drop");
let unlist = document.querySelector(".unlist");
let celeIcon = document.querySelector(".cele-cake");
let celeCon = document.querySelector(".cele");
let show;
const showDay = document.querySelector(".show-date");
let today = new Date();

let currentDay = today.getDate();
console.log(currentDay);

let currentMonth = today.getMonth() + 1;

let currentYear = today.getFullYear();
console.log(currentYear);
showDay.innerHTML = `${currentDay}/${currentMonth}/${currentYear}`;

function getAge(value) {
  let getYea = new Date();
  let currentYears = getYea.getFullYear();
  let now = currentYears - value;
  return now;
}

function getAllThePersonInfo(show) {
  let allInfo = {
    name: input1.value,
    number: input2.value,
    d: input3.value,
    m: input4.value,
    y: input5.value,
  };
  console.log(input5.value);

  show.push(allInfo);
  localStorage.setItem("birthkey", JSON.stringify(show));
}

save.addEventListener("click", (e) => {
  e.preventDefault();
  if (!localStorage.getItem("birthkey")) {
    getAllThePersonInfo(firstArray);
  } else {
    const got = JSON.parse(localStorage.getItem("birthkey"));
    currentAarray = [...got];
    getAllThePersonInfo(currentAarray);
  }
  form.style.height = "0";

  form.style.transition = "1s";

  allInput.forEach((inp) => {
    inp.value = "";
    // celeCon.style.height = "100%";
  });
  celeCon.style.transform = "translateY(0)";
  celeCon.style.transition = "1s";
  celeCon.style.height = "100%";
  birthDayAlert();
});
btn.addEventListener("click", () => {
  if (celeCon || reminder || con) {
    celeCon.style.transform = "translateY(500px)";
    celeCon.style.transition = "1s";
    celeCon.style.height = "0%";
    reminder.style.transform = "translateY(500px)";
    reminder.style.transition = "1s";
    reminder.style.height = "0%";
    con.style.transform = "translateY(500px)";
    con.style.transition = "1s";
    con.style.height = "0%";
  } else {
  }
  form.style.transform = "translateY(0)";
  form.style.transition = "1s";
  form.style.height = "100%";
});
drop.addEventListener("click", () => {
  form.style.height = "0";
});
remindBtn.addEventListener("click", () => {
  if (celeCon || form || con) {
    celeCon.style.transform = "translateY(500px)";
    celeCon.style.transition = "1s";
    celeCon.style.height = "0%";
    form.style.transform = "translateY(500px)";
    form.style.transition = "1s";
    form.style.height = "0%";
    con.style.transform = "translateY(500px)";
    con.style.transition = "1s";
    con.style.height = "0%";
  } else {
  }
  reminder.style.transform = "translateY(0)";
  reminder.style.transition = "1s";
  reminder.style.height = "100%";
  reminder;
  showReminder();
});
calendar.addEventListener("click", () => {
  if (celeCon || form || reminder) {
    celeCon.style.transform = "translateY(500px)";
    celeCon.style.transition = "1s";
    celeCon.style.height = "0%";
    form.style.transform = "translateY(500px)";
    form.style.transition = "1s";
    form.style.height = "0%";
    reminder.style.transform = "translateY(500px)";
    reminder.style.transition = "1s";
    reminder.style.height = "0%";
  } else {
  }
  con.style.transform = "translateY(0)";
  con.style.transition = "1s";
  con.style.height = "100%";

  showSmS();
});

// birthday reminder
function showReminder() {
  const got = JSON.parse(localStorage.getItem("birthkey"));

  const showItems = got.map((p) => {
    return ` <div class=" p-2 w-full text-white-200 text-md font-bold flex justify-center">
   <div class="flex items-center justify-center w-10/12 border border-slate-100 rounded-lg bg-gray-100 text-blue-400">
    <div>
    <img src="./image/start-the-birthday-countdown-happy-birthday.gif" alt="" class="h-24 w-24">
    </div>
    <div class="flex flex-wrap flex-col items-center p-2 gap-2 w-9/12">
    <p class="text-2xl font-bold ">${p.name}</p>
    <p class="text-black">${p.number}</p>
    <p><span class="day text-black">${p.d}-</span><span class="mon text-black">${p.m}</span>-<span class=" text-black year">${p.y}</span></p>
    </div>
    
   </div>
 </div>`;
  });

  unlist.innerHTML = showItems.join("");
}
// sms
function showSmS() {
  console.log(birthdayWishes);
  const showsSms = birthdayWishes.map((p) => {
    return ` <div class="cursor-pointer p-2">
    <div id="text-cop"> ${p.message}</div>
    <div> ${p.emoji1}${p.cakeEmoji1}</div>
    <div class="flex justify-end pr-3"> <button type="button" class="w-12 text-center hover:text-blue-800 ounded-lg p-2 text-blue-200 font-bold cursor-pointer id="copy-text-btn"><i class="fa fa-clone"></i></button>
    </div>
    </div>`;
  });

  sms.innerHTML = `${showsSms.join("")}`;
}

function birthDayAlert() {
  const getAllBirthInfo = JSON.parse(localStorage.getItem("birthkey"));
  const info = getAllBirthInfo.filter((p) => {
    return p.d == currentDay && p.m == currentMonth;
  });
  const celebrant = info.map((p) => {
    return `<div class="flex flex-col justify-center items-center">
        
    <h1 class="text-bold text-xl animate-pulse text-blue-500"> The Celebrants</h1>
    <div class="flex justify-around items-center w-full py-2">
       <img src="./image/cake-birthday.png" alt="cake"  class="h-11 w-11">
       <div>
          <div class="birth">${p.name}</div>
          <div>turns ${getAge(p.y)} today !!</div>
          
          </div>
          <div>
          <div><a href="tel:+234${
            p.number
          }"><i class="fas fa-phone"></i></a></div>
          <div><a href=" sms:+234${
            p.number
          }"> <i class="fas fa-sms"></i></a></div>
          </div>
          
          </div>
          </div>`;
  });
  if (info.length == 0) {
    notify.style.display = "none";
  } else {
    notify.textContent = info.length;
  }
  celeCon.innerHTML = celebrant.join("");
}
birthDayAlert();
celeIcon.addEventListener("click", () => {
  if (reminder || form || con) {
    reminder.style.transform = "translateY(500px)";
    reminder.style.transition = "1s";
    reminder.style.height = "0%";
    form.style.transform = "translateY(500px)";
    form.style.transition = "1s";
    form.style.height = "0%";
    con.style.transform = "translateY(500px)";
    con.style.transition = "1s";
    con.style.height = "0%";
  }
  celeCon.style.transform = "translateY(0)";
  celeCon.style.transition = "1s";
  celeCon.style.height = "90%";
  reminder;
  birthDayAlert();
});
{
  /* <a href="sms:+18664504185?&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">Click here to text us!</a> */
}
