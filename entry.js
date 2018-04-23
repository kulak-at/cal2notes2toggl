const {generateTime, generateDate} = require('./utils');

module.exports = class Entry {
    constructor(start, end, description) {
        this.start = start;
        this.end = end;
        this.description = description;
    }

    getDateString() {
        return generateDate(this.start);
    }

    getTimeString() {
        return `[${generateTime(this.start)} - ${generateTime(this.end)}]`
    }

    toEntryString() {
        return `${this.getTimeString()} ${this.description}`
    }

    static fromIcalcEvent(event) {
        return new Entry(+event.start, +event.end, event.summary);
    }
}