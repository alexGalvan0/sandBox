const ClockText = document.getElementById('ClockText');

const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];

const months = [
                'January',
                'Februray',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];

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
        let dateObj = new Date(),
            day = dateObj.getDay(),
            year = dateObj.getFullYear(),
            month = dateObj.getMonth(),
            date = dateObj.getDate(),
            hour = dateObj.getHours(),
            second = dateObj.getSeconds();

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }
        
        ClockText.textContent = `${days[day]} ${months[month]} ${date}, ${year} ${hour.pad(2)}:${second.pad(2)}`;
    }
}
const clock1 = new Clock().updateClock

setInterval(clock1, 1000);