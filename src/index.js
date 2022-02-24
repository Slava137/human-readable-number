module.exports = function toReadable (number) {
        let value;
        let firstTwelve = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if (number < 20) {
            value = firstTwelve[number];
            return value;
        } else if (number < 100) {
            if (number % 10 == 0) {
                value = dozens[number / 10 - 2];
                return value;
            } else {
                value = dozens[Math.floor(number / 10) - 2] + ' ' + firstTwelve[number % 10];
                return value;
            };            
        } else {
            if (number % 100 == 0) {
                value = firstTwelve[number / 100] + ' hundred';
                return value;
            } else if ((number % 100) < 20) {
                value = firstTwelve[Math.floor(number / 100)] + ' hundred ' + firstTwelve[number % 100];
                return value;
            } else if (number % 10 == 0 && number % 100 !== 0) {
                value = firstTwelve[Math.floor(number / 100)] + ' hundred ' + dozens[(number % 100) / 10 - 2];
                return value;
            } else {
                value = firstTwelve[Math.floor(number / 100)] + ' hundred ' + dozens[Math.floor(Math.floor((number % 100) / 10)) - 2] + ' ' + firstTwelve[number % 10];
                return value;
            }
        } 
    }
