const EntriesCollection = require('./entriesCollection');
const Entry = require('./entry');
const {expect} = require('chai');

const date1 = +(new Date('2018-05-05T18:00:00'));
const date2 = +(new Date('2018-05-05T20:00:00'));

const date3 = +(new Date('2018-05-06T09:00:00'));
const date4 = +(new Date('2018-05-06T11:00:00'));

describe('class EntryCollection', () => {
    it('should generate proper notes (one entry)', () => {

        const notes1 = `05.05.2018
[18:00 - 20:00] Description`;
        const collection = new EntriesCollection();
        collection.push(new Entry(date1, date2, 'Description'));
        expect(collection.toNotesString()).to.equal(notes1);
    });

    it('should generate proper notes (two entries on different days)', () => {

        const notes2 = `05.05.2018
[18:00 - 20:00] Description

06.05.2018
[9:00 - 11:00] Description 2`;
        const collection = new EntriesCollection();
        collection.push(new Entry(date1, date2, 'Description'));
        collection.push(new Entry(date3, date4, 'Description 2'));
        expect(collection.toNotesString()).to.equal(notes2);
    });

    it('should generate proper notes (two entries on different days - reverse order)', () => {

        const notes2 = `05.05.2018
[18:00 - 20:00] Description

06.05.2018
[9:00 - 11:00] Description 2`;
        const collection = new EntriesCollection();
        collection.push(new Entry(date3, date4, 'Description 2'));
        collection.push(new Entry(date1, date2, 'Description'));
        expect(collection.toNotesString()).to.equal(notes2);
    });

    it('should generate proper notes (with filtering)', () => {

        const notes2 = `05.05.2018
[18:00 - 20:00] Description`;
        const collection = new EntriesCollection();
        collection.push(new Entry(date3, date4, 'Description 2'));
        collection.push(new Entry(date1, date2, 'Description'));
        expect(collection.filterByDate('05.05.2018').toNotesString()).to.equal(notes2);
    })
});