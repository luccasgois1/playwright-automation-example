export class MainPage {
    constructor(page) {
        this.page = page
    }

    async goToPage() {
        return this.page.goto("https://yourcorp.alumni-stage.com/")
    }

    async clickOnSignInBtn(){
        const locator = this.page.getByRole('link', { name: 'Sign In' })
        return locator.click()
    }
}
