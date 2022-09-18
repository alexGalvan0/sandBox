const ClockText = document.getElementById('ClockText');

class Clock {
    constructor (day, year, month, date, hour, second) {
        this.year = year;
        this.day = day;
        this.month = month;
        this.date = date;
        this.day = day;
        this.hour = hour;
        this.second = second;
    }
    updateClock() {
        let dateObj = new Date()

        let day = dateObj.getDay();
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth();
        let date = dateObj.getDate();
        let hour = dateObj.getHours();
        let second = dateObj.getSeconds();
        
        ClockText.textContent = `${day} ${month} ${date}, ${year},${hour}:${second}`;
    }
}


const clock1 = new Clock().updateClock

setInterval(clock1, 1000);