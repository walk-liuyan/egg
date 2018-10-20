module.exports = (options, app) => {
    return async function forbidip(ctx, next) {
        var forbidips = options.forbidips;
        console.log('forbidips', forbidips);
        const clientIp = ctx.request.ip;
        var hasIp = null;

        forbidips.forEach((val) => {
            if (val == clientIp) {
                hasIp = true;
            }
        })
        if (!hasIp) {
            ctx.status = 403;
            // ctx.body = 'ip error'
            ctx.message = 'ip error'
        } else {
            await next();
        }
        /* var forbidip = '127.0.0.1';// 屏蔽ip
        console.log('ctx.request.ip  客户端的ip', ctx.request.ip)
        if (ctx.request.ip == forbidip) {
            ctx.status = 403;
            // ctx.body = 'ip error'
            ctx.message = 'ip error'
        } else {
            await next();
        } */
    }
}