module.exports = {
    foo(param){
        return this.header.host;
    }
}
// this.ctx.request.foo()
