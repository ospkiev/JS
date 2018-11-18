`use strict`

// let div = document.querySelector('.stopwatch');

const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const clockIndicator = document.querySelector('.js-time');
let ul = document.querySelector('.js-laps');

const timer = {
    timerId : null,
    active: false,
    startTime: null,
    deltaTime: null,
    min : 0,
    sec : 0,
    ms : 0,
};  

function start(){
    if(!timer.active && startBtn.textContent === 'Start'){
        timer.active = true;
        timer.startTime = Date.now();
        timer.timerId = setInterval(currentTimeMinusStart
        ,100);
        startBtn.textContent = 'Pause';
      } else if (timer.active){
        clearInterval(timer.timerId);
        startBtn.textContent = 'Continue';
        timer.active = false;
     } else if ( startBtn.textContent === 'Continue'){
         timer.active = true;
         timer.startTime = Date.now()- timer.deltaTime;
         timer.timerId = setInterval(currentTimeMinusStart,100);
         startBtn.textContent = 'Pause';      
        }
};

function reset(){
    clearInterval(timer.timerId);
    timer.active = false;
    timer.timerId = null;
    timer.startTime = null;
    timer.deltaTime = null;
    startBtn.textContent = 'Start';
    updateClocIndicator(min=0,sec=0,ms=0);
};

function currentTimeMinusStart(){
    timer.deltaTime= Date.now()-timer.startTime;
    updateClocIndicator();
};

function updateClocIndicator(){
        time = new Date(timer.deltaTime); 
        min = time.getMinutes();
        sec = time.getSeconds();
        ms = Number.parseInt(time.getMilliseconds()/100);  
        clockIndicator.textContent = ` ${min<10 ? `0${min}`: min} : ${sec<10 ? `0${sec}`:sec} : ${ms}`;
};

function lap(){
    let li = document.createElement('li');
    li.textContent = ` Time is : ${min<10 ? `0${min}`: min} : ${sec<10 ? `0${sec}`:sec} : ${ms}`;
    ul.append(li);
}

startBtn.addEventListener('click',start);
resetBtn.addEventListener('click',reset);
lapBtn.addEventListener('click', lap);



