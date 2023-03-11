const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

const updateClock = () => {
    const currentDate = new Date();
    
    // get the current date
    let currentHour = currentDate.getHours();
    // if(currentHour >= 12) currentHour -= 12;
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    
    // rotate the hands according to the date
    
    hourHand.style.transform = "rotate(" + (currentHour * 30 + currentMinute/2) + "deg)";
    minuteHand.style.transform = "rotate(" + currentMinute * 6 + "deg)";
    secondHand.style.transform = "rotate(" + currentSecond * 6 + "deg)";
    
};

window.addEventListener("load", () => {
    const updateFunc = setInterval(updateClock, 1000);
})


