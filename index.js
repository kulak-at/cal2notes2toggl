const ical = require('node-ical');
const EntriesCollection = require('./entriesCollection');
const Entry = require('./entry');
const optimist = require('optimist');

const DAY_MILLISECONDS = 86400000;


const argv = optimist
    .usage('Generates notes for notes2toggl')
    .alias('date', 'd')
    .describe('d', 'Date for which to generate entries')
    .argv;

const url = argv._[0];

ical.fromURL(url, {}, function(err, data) {
        let entries = new EntriesCollection();
        Object.values(data)
            .sort((e1, e2) => +e1.start - e2.start)
            .filter(event => {
                    return !!event.start && +(event.end) - +(event.start) < DAY_MILLISECONDS;
            })
            .forEach(event => {
                entries.push(Entry.fromIcalcEvent(event));
            });

        if (argv.date) {
                entries = entries.filterByDate(argv.date);
        }

        console.log(entries.toNotesString());
});