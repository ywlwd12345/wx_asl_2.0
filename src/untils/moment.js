const moments = require('./moment.min.js');
export function moment(timestamp) {
    moments.locale('en', {
        longDateFormat: {
            l: "YYYY-MM-DD",
            L: "YYYY-MM-DD HH:mm:ss"
        }
    });
    return moments(timestamp).format('L');
}

export function momentMs(timestamp) {

    moments.locale('en', {
        longDateFormat: {
            l: "YYYY-MM-DD",
            L: "HH:mm:ss"
        }
    });
    return moments(timestamp).format('l');
}


export function momentTime(timestamp) {
    moments.locale('en', {
        longDateFormat: {
            l: "YYYY-MM-DD",
            // L: "YYYY-MM-DD "
            L: "YYYY/MM/DD "

        }
    });
    return moments(timestamp).format('L');
}