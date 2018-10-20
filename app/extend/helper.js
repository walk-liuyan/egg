var sd = require('silly-datetime');
module.exports = {
    formatTime(param) {
        sd.format(new Date(param), 'YYYY-MM-DD')
    },
    getHelperDate() {
        return '我是helper'
    }
}