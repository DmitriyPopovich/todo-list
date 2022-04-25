
module.exports = class Page {
    open (path) {
        return browser.url(`http://localhost:8080/${path}`)
    }
}
