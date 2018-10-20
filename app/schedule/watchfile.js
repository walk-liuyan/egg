const Subscription = require('egg').Subscription
let i = 0;
class WatchFile extends Subscription {
    static get schedule() {
        return {
            interval: '2s',
            type: 'all'
        }
    }

    async subscribe() {
        i++
        console.log(i);
    }

}
module.exports = WatchFile