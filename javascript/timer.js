// Option B
// Creating a Timer class for a countdown object, using Timer class for better encupsaltion of multiple related methods that could be added in future.
class Timer {
    endDate = new Date("Jan 01, 2022 00:00:00").getTime();

    // When object gets instantiated (start() will only start if its off/false)
    // constructor(){
    //     this.isOn = false;
    // }

    start(){
        const currentDate = new Date()
        const now = new Date().getTime();
        const remaining = this.endDate - currentDate;
        // Time is in milliseconds
        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        // countDay remaining in milliseconds divided by how many milliseconds are in a day
        const countDay = this.#timeFormatter(Math.floor(remaining / days));
        // countHour how many hours in milliseconds are remaining once we remove the days in milliseconds
        const countHour = this.#timeFormatter(Math.floor((remaining % days) / hours))
        const countMinute = this.#timeFormatter(Math.floor((remaining % hours) / minutes))
        const countSecond = this.#timeFormatter(Math.floor((remaining % minutes ) / seconds))
        
        // Select DOM elements and replace with constants
        document.querySelector('.days0').innerText = countDay[0]
        document.querySelector('.days1').innerText = countDay[1]

        document.querySelector('.hours0').innerText = countHour[0]
        document.querySelector('.hours1').innerText = countHour[1]

        document.querySelector('.minutes0').innerText = countMinute[0]
        document.querySelector('.minutes1').innerText = countMinute[1]

        document.querySelector('.seconds0').innerText = countSecond[0]
        document.querySelector('.seconds1').innerText = countSecond[1]
    }

    #timeFormatter(num){
        return (num < 10 ? "0" + num.toString() : num.toString()).split('')
    }
}

const timerObj = new Timer()
setInterval(() => {
    timerObj.start()
}, 1000);    