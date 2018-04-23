const os = require('os');

const byTime = (e1, e2) => +e1.start - +e2.start;

module.exports = class EntriesCollection {
    constructor() {
        this.entries = [];
    }

    push(entry) {
        this.entries.push(entry);
    }

    groupByDay() {
        return [...this.entries]
            .sort(byTime)
            .reduce((data, entry) => {
            const date = entry.getDateString();
            if (!data.hasOwnProperty(date)) {
                data[date] = [];
            }
            data[date].push(entry);
            return data;
        }, {});
    }

    filterByDate(date) {
        const entries = new EntriesCollection();
        this.entries
            .filter(e => e.getDateString() === date)
            .forEach(entry => {
                entries.push(entry);
            })
        return entries;
    }

    toNotesString() {
        const grouped = this.groupByDay();
        return Object.keys(grouped).map(key => {
            return [
                key,
                ...grouped[key].map(entry => entry.toEntryString())
            ].join(os.EOL);
        }).join(os.EOL + os.EOL);
    }
}