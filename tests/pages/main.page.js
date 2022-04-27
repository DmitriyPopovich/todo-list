const Page = require("./page");

class MainPage extends Page {
  get loadingApp() {
    return $(".todo-app");
  }
  get recordsList() {
    return $("#todo-list-records");
  }
  get recordsItems() {
    return $$(".items-todo");
  }
  get doneItems() {
    return $$(".todo-list-item.done");
  }
  get importantItems() {
    return $$(".todo-list-item.important");
  }
  get inputRecord() {
    return $("#input-addform");
  }
  get buttonAdd() {
    return $("#btn-addform");
  }
  async loadData() {
    try {
      await this.open();
      await this.loadingApp.waitForDisplayed({ timeout: 200 });
      await this.recordsList.waitForDisplayed({ timeout: 200 });
    } catch (e) {
      throw new Error("Can't load records");
    }
  }
  async addRecord(record) {
    try {
      const recordsCountBeforeAdd = await this.recordsItems.length;
      await this.inputRecord.setValue(record);
      await this.buttonAdd.click();
      const recordsCountAfterAdd = await this.recordsItems.length;
      if (recordsCountAfterAdd - recordsCountBeforeAdd !== 1) {
        throw new Error("Error add record or add more then one record");
      }
    } catch (e) {
      throw new Error("Error add record. " + e.message);
    }
  }
  async deleteRecord() {
    try {
      const recordsCount = await this.recordsItems.length;
      if (!recordsCount) {
        throw new Error("Can't find records");
      }
      await this.recordsItems[0].$("button.button-remove").click();
      const recordsCountAfterDelete = await this.recordsItems.length;
      if (recordsCount - recordsCountAfterDelete !== 1) {
        throw new Error("Error delete record or delete more then one record");
      }
    } catch (e) {
      throw new Error("Error delete record. " + e.message);
    }
  }
  async toogleDone() {
    try {
      const recordsDoneCount = await this.doneItems.length;
      await this.recordsItems[0].$("button.button-toggle-done").click();
      const recordsCountAfterDone = await this.doneItems.length;
      if (recordsCountAfterDone - recordsDoneCount !== 1) {
        throw new Error("Error toggle record or toggle more then one record");
      }
    } catch (e) {
      throw new Error("Error toggle record. " + e.message);
    }
  }
  open() {
    return super.open("");
  }
}
module.exports = new MainPage();
