const nut = document.getElementById("disp");
const apage = document.getElementById("something");
function workit() 
{
    let x = document.getElementById("movex").value;
    let y = document.getElementById("movey").value;
    apage.style.top = `${y}%`;
    apage.style.left = `${x}%`;
    nut.innerHTML=`|X=${x},Y=${y}|`;
}

document.addEventListener("keydown",event=>{
	if(event.key=="Enter")
    {
     workit();
    }
})

const action=document.getElementById("action");

action.addEventListener("click",(event)=>{
event.target.style.backgroundColor="red";
event.target.textContent="HO MY GOD OUCH! 🤕😵";
});

action.addEventListener("mouseover",(event)=>{
event.target.style.backgroundColor="yellow";
event.target.textContent="NO! DON'T CLICK ME! 😮😨😱🫨";
});

action.addEventListener("mouseout",(event)=>{
event.target.style.backgroundColor="green";
event.target.textContent="hi user what's up! 🙂😉😃😎";
});

function myFunction() 
{ 
  let img = document.getElementById("testi");
  if (img.src.endsWith("loading.gif")) 
  {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  } 
  else 
  {
    img.src = "https://www.onlinegdb.com/public/img/loading.gif";
  }
}
let count=0;
function time()
{
	if(count%2==0)
    {
		document.getElementById("demo").innerHTML = Date();
    }
    else
    {
    	document.getElementById("demo").innerHTML="";
    }
    count++;
}
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId; 
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if (paused) 
    {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    if (!paused) 
    {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

resetBtn.addEventListener("click", () => {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime() 
{
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
	
    if(mins==hrs&&secs==hrs)
    {
    	console.log(hrs,mins,secs);
    }
	
    function pad(unit) 
    {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}