const Entry = require('./entry');
const {expect} = require('chai');

const date1 = +(new Date('2018-05-05T18:00:00'));
const date2 = +(new Date('2018-05-05T20:00:00'));

describe('class Entry', () => {
    it('should generate proper dates for entries', () => {
        const entry = new Entry(date1, date2, 'Description');
        expect(entry.getDateString()).to.equal('05.05.2018');
    });

    it('should generate proper times for entries', () => {
        const entry = new Entry(date1, date2, 'Description');
        expect(entry.getTimeString()).to.equal('18:00 - 20:00');
    });

    it('should generate proper entry string', () => {
        const entry = new Entry(date1, date2, 'Description');
        expect(entry.toEntryString()).to.equal('18:00 - 20:00 Description');
    })
});