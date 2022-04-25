const MainPage = require('../pages/main.page');

describe('Main page', () => {
    it('load data', async () => {
        await MainPage.loadData()
    })
    it('delete record', async () => {
        await MainPage.loadData()
        await MainPage.deleteRecord()
    })
    it('add record', async () => {
        await MainPage.loadData()
        await MainPage.addRecord('Test')
    })
    it('toogle done record', async () => {
        await MainPage.loadData()
        await MainPage.toogleDone()
    })
})