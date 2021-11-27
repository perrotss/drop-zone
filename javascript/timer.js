// Option B

class Timer {
    endDate = new Date("Jan 01, 2022 00:00:00").getTime();

    constructor(){
        this.isOn = false;
    }
    start(){
        const currentDate = new Date()
        const now = new Date().getTime();
        const remaining = this.endDate - currentDate;
        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

    }
}

new Timer().start();