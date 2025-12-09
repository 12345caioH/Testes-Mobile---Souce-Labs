import { $ } from '@wdio/globals'
import Page from './page.js'


class HomePage extends Page {

    async openMenu(menu){
        await $(`id=tab-profile${menu}`).click()
    }

}

export default new HomePage();


 