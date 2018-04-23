const { doubleDigit, generateDate, generateTime } = require('./utils');

const {expect} = require('chai');

describe('doubleDigit', () => {
    it('should generate proper values for single digit numbers', () => {
        expect(doubleDigit(1)).to.equal('01');
        expect(doubleDigit(9)).to.equal('09');
        expect(doubleDigit(0)).to.equal('00');
    });

    it('should generate proper values for double digit numbers', () => {
        expect(doubleDigit(55)).to.equal('55');
        expect(doubleDigit(20)).to.equal('20');
        expect(doubleDigit(13)).to.equal('13');
    });
});

describe('generateTime', () => {
    it('should generate proper times', () => {
        expect(generateTime('2018-05-05T13:24:00')).to.equal('13:24');
        expect(generateTime('2018-05-02T20:22:00')).to.equal('20:22');
        expect(generateTime('2018-05-01T05:04:00')).to.equal('5:04');
        expect(generateTime('2018-05-01T01:00:00')).to.equal('1:00');
    });
});

describe('generateDate', () => {
   it('should generate proper dates', () => {
       expect(generateDate('2018-04-03T05:30:00')).to.equal('03.04.2018');
       expect(generateDate('2018-05-20T15:55:00')).to.equal('20.05.2018');
   })
});