module.exports = (options, app) => {
    return async function printDate(ctx, next) {
        console.log('------options', options);
        console.log('------', new Date());
        await next();
    }
}