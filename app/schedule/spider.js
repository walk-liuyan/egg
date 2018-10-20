let k = 110;
/* module.exports = {
    schedule: {
        interval: '5s',
        type: 'all'
    },

    async task(ctx) {

        k++
        console.log('k', k)
    }

} */

module.exports = (app) => {
    return {
        schedule: {
            interval: '5s',
            type: 'all'
        },

        async task(ctx) {
            const res = await ctx.service.news.getNewsList()
             /* const res = await ctx.curl('http://www.api.com/cache', {
            dataType: 'json'
        })
        ctx.app.cache = res.data */

            k++
            console.log('k', k, res)
        }

    }
}