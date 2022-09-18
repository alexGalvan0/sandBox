const ClockText = document.getElementById('ClockText')

class Clock {
    constructor (days, year, month, date, day, hour, seconds) {
        this.year = year;
        this.days = days;
        this.month = month;
        this.date = date;
        this.day = day;
        this.hour = hour;
        this.seconds = seconds;
    }
}

class Alarm extends Clock {
    
}


function updateClock(){
    let dateObj = new Date();
    let days = dateObj.getDay();
    let years = dateObj.getFullYear();
    let months = dateObj.getMonth();
    let date = dateObj.getDate();
    let hour = dateObj.getHours();
    let seconds = dateObj.getSeconds();

    let clock1 = new Clock(days ,years, months, date, hour, seconds)
    ClockText.textContent = `${days} ${months} ${date}, ${years},${hour}:${seconds}`
}

setInterval(updateClock, 1000)
