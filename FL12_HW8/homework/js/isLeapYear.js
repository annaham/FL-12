let four = 4;
let hund = 100;

function isLeapYear(value){
    let year = new Date(value).getFullYear();

        if (isNaN(year)) {
        return 'Invalid Date';
        }else {
            if(year % four === 0 && year % hund !== 0 || year % (four * hund) === 0) {
            return `${year} is a leap year`;
        } else {
            return `${year} is not a leap year`;
        }
    
    }
    
}
    isLeapYear('2017-01-01 00:00:00');
