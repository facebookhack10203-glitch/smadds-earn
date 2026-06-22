let coins =
Number(localStorage.getItem("coins") || 0);

let referrals =
Number(localStorage.getItem("referrals") || 0);

updateUI();

generateUser();

loadJoinDate();

function updateUI(){

document.getElementById("coin").innerHTML =
coins;

document.getElementById("profileCoins").innerHTML =
coins;

document.getElementById("refCount").innerHTML =
referrals;

document.getElementById("homeRef").innerHTML =
referrals;

localStorage.setItem(
"coins",
coins
);

}

function showPage(pageId){

document
.querySelectorAll(".page")
.forEach(page => {

page.classList.remove("active");

});

document
.getElementById(pageId)
.classList.add("active");

}

function claimReward(){

alert(
"বিজ্ঞাপন দেখুন, ৫০ টাকা পাবেন"
);

setTimeout(()=>{

coins += 50;

updateUI();

alert(
"✅ ৫০ টাকা যোগ হয়েছে"
);

},5000);

}

function dailyBonus(){

let today =
new Date().toDateString();

if(
localStorage.getItem("daily")
=== today
){

alert(
"আজকের বোনাস নেওয়া হয়েছে"
);

return;

}

coins += 100;

localStorage.setItem(
"daily",
today
);

updateUI();

alert(
"🎉 ১০০ Coins Added"
);

}

function telegramTask(){

window.open(
"https://t.me/+IxOmY7N9Z91kYzU1",
"_blank"
);

coins += 50;

updateUI();

alert(
"+50 Coins Added"
);

}

function youtubeTask(){

window.open(
"https://youtube.com/@dingerboy100k",
"_blank"
);

coins += 30;

updateUI();

alert(
"+30 Coins Added"
);

}

function copyReferral(){

let code =
document.getElementById("refCode")
.innerHTML;

navigator.clipboard.writeText(code);

alert(
"Referral Code Copied"
);

}

function withdraw(){

let amount =
document.getElementById("withdrawAmount")
.value;

let number =
document.getElementById("withdrawNumber")
.value;

if(amount < 500){

alert(
"Minimum Withdraw 500"
);

return;

}

if(number === ""){

alert(
"Enter Number"
);

return;

}

coins -= Number(amount);

updateUI();

let history =
localStorage.getItem(
"withdrawHistory"
) || "";

history +=
"<p>৳" +
amount +
" → Pending</p>";

localStorage.setItem(
"withdrawHistory",
history
);

document.getElementById(
"historyBox"
).innerHTML =
history;

alert(
"Withdraw Submitted"
);

}

function generateUser(){

let user =
localStorage.getItem(
"userId"
);

if(!user){

user =
"USER" +
Math.floor(
1000 +
Math.random()*9000
);

localStorage.setItem(
"userId",
user
);

}

document.getElementById(
"userId"
).innerHTML =
user;

document.getElementById(
"refCode"
).innerHTML =
user;

}

function loadJoinDate(){

let date =
localStorage.getItem(
"joinDate"
);

if(!date){

date =
new Date()
.toLocaleDateString();

localStorage.setItem(
"joinDate",
date
);

}

document.getElementById(
"joinDate"
).innerHTML =
date;

}

window.onload = function(){

let history =
localStorage.getItem(
"withdrawHistory"
);

if(history){

document.getElementById(
"historyBox"
).innerHTML =
history;

}

updateUI();

};
// Loading Screen

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 2000);

});
