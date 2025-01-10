let min = document.getElementById('min')
let sec = document.getElementById('sec')
let holder = document.getElementById('holder')
let btn = document.getElementById('btn')


let mins = 40
let time = mins * 60


function countdown() {
  let sMin = Math.floor(time/60) 
  let sSec = time % 60
  min.textContent = sMin
  sec.textContent = sSec
  time--
}

function Start() {
    setInterval(countdown, 1000)
}


function UpdateTime() {
  let TIME = document.getElementById('TIME')
let day = document.getElementById('day')

let today = new Date()

let hr = today.getHours()
let min = today.getMinutes()
let sec = today.getSeconds()

TIME.textContent = `${hr}: ${min}: ${sec}`


let DayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 


let days = today.getDay()
day.textContent = DayArr[days]


}
setInterval(UpdateTime, 1000)