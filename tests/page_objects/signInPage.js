import { expect } from '@playwright/test';

export class SignInPage {
    constructor(page) {
        this.page = page
    }

    async verifyPageIsDisplayed(){
        const locatorSignInTitle = this.page.getByRole('heading', { name: 'Sign in' });
        return expect(locatorSignInTitle).toBeVisible()
    }

    async fillEmailField(text){
        const locator = this.page.getByRole('textbox', { name: 'Email*' });
        return locator.fill(text)
    }

    async clickOnNextButton(){
        const locator = this.page.getByTestId('continue-btn');
        return locator.click()
    }

    async verifyInvalidEmailErrorIsDisplayed(){
        const locator = this.page.getByText('Please enter a valid email')
        return expect(locator).toBeVisible()
    }

    async fillPasswordField(text){
        const locator = this.page.getByRole('textbox', { name: 'Password*' })
        return locator.fill(text)
    }

    async clickOnSignInBtn(){
        const locator = this.page.getByTestId('continue-btn')
        return locator.click()
    }

    async waitForPasswordFieldToBeVisible(){
        const locator = this.page.getByRole('textbox', { name: 'Password*' })
        return expect(locator).toBeVisible()
    }

    async checkFailedAuthenticationAlertShowsUp(){
        const locator = this.page.getByRole('alert').filter({ hasText: 'Authentication failed' })
        return expect(locator).toBeVisible()
    }

    async clickOnTogglePasswordVisibilityOn(){
        const locator = this.page.getByRole('button', { name: 'toggle password visibility on' })
        return locator.click()
    }

    async clickOnTogglePasswordVisibilityOn(){
        const locator = this.page.getByRole('button', { name: 'toggle password visibility off' })
        return locator.click()
    }

    async clickOnClearEmailButton(){
        const locator = this.page.getByRole('button', { name: 'clear email' })
        return locator.click()
    }

    async verifyPasswordFieldIsEmpty(){
        const locator = this.page.getByRole('textbox', { name: 'Password*' })
        return expect(locator).toBeEmpty()
    }

    async verifyFailedToFetchAlertIsVisible(){
        const locator = this.page.getByRole('alert').filter({ hasText: 'Failed to fetch' })
        return expect(locator).toBeVisible()
    }
}
