module.exports = {
    getHost(){
        // this 就是ctx
        return this.request.host;
    }
}