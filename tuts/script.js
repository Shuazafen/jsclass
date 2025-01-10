const seconds = document.querySelector(".seconds, .number");
const minutes = document.querySelector(".minutes, .number");
const hours = document.querySelector(".hours, .number");
const days = document.querySelector(".days, .number");
const years = document.querySelector(".years, .number");


console.log (seconds,minutes,hours,days,years)

let secValue = 60,
     minValue = 60,
     hourValue = 5,
     dayValue = 9,
     yearValue = 4;

     const timeFunction = setInterval(() => {
       secValue--;
       if (secValue === 0){
       minValue--;
       secValue = 60;
       }
    
       if (minValue === 0){
        hourValue--;
        minValue = 60;
       }

       if (hourValue === 0){
        dayValue--;
        hourValue = 5;
       }

       if (dayValue === 0){
        yearValue--;
        dayValue = 9;
       }

       if (yearValue === 0){
        clearInterval(timeFunction)
       }



       console.log(secValue);
       seconds.textContent = secValue < 10? `0${secValue}` : secValue;
       minutes.textContent = minValue < 10? `0${minValue}` : minValue;
       hours.textContent = hourValue < 10? `0${hourValue}` : hourValue;
       days.textContent = dayValue < 10? `0${dayValue}` : dayValue;
       years.textContent = yearValue < 10? `0${dayValue}` : dayValue;

    }, 1000); //1000ms = 1s
