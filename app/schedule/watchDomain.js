var cheerio = require('cheerio')
module.exports = (app) => {
    return {
        schedule: {
            interval: '1s',
            type: 'all'
        },

        async task(ctx) {
            const url = 'http://news.baidu.com'
            const res = await ctx.service.spider.requestUrl(url)
            const data = res.data.toString()
            const $ = cheerio.load(data, {
                decodeEntities: false
            })
            let title = $('title').html()
            console.log('res', title)
            $('.hotnews a').each(function() {
                console.log($(this).html())
            })

        }

    }
}