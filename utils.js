function generateDate(timestamp) {
    const d = new Date(timestamp);
    return [doubleDigit(d.getDate()), doubleDigit(d.getMonth() + 1), d.getFullYear()].join('.');
}

function doubleDigit(x) {
    return x < 10 ? '0' + x : x.toString();
}

function generateTime(timestamp) {
    const d = new Date(timestamp);
    return [d.getHours(), doubleDigit(d.getMinutes())].join(':');
}

module.exports = {
    generateDate, doubleDigit, generateTime
};