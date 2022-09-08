const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")


function setDate(){

    const now = new Date()
    
    // Seconds
    const sec = now.getSeconds();
    // To convert the seconds into Degrees 
    const secDegrees = ((sec / 60) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`

    // Minutes
    const min = now.getMinutes();
    // To convert the Minutes into Degrees 
    const minDegrees = ((min / 60) * 360 ) + 90;
    minuteHand.style.transform = `rotate(${minDegrees}deg)` 


    // Hour
    const hour = now.getHours();
    // To convert the Minutes into Degrees 
    const hourDegrees = ((hour / 60) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)` 

    // console.log(hour + ":" + min + ":" + ":" + sec)

}


// The setInterval function repeadetly calls a function or executes a code snippet 
//  with a fixed time delay between each call

// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval() 
setInterval(setDate, 1000);