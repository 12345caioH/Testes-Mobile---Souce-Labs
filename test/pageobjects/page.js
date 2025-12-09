export default class Page {

    async waitAndClick(element) {
        await element.waitForDisplayed({ timeout: 15000 })
        await element.click()
    }

    async waitAndType(element, text) {
        await element.waitForDisplayed({ timeout: 15000 })
        await element.setValue(text)
    }

}
