// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from './page_objects/mainPage';
import { SignInPage } from './page_objects/signInPage';

test('SignIn Page: E-mail field do not allow non-email inputs', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goToPage()
  await mainPage.clickOnSignInBtn()

  const signInPage = new SignInPage(page)
  await signInPage.verifyPageIsDisplayed()
  await signInPage.fillEmailField("testuser")
  await signInPage.clickOnNextButton()
  await signInPage.verifyInvalidEmailErrorIsDisplayed()
});

test('SignIn Page: User cannot sign in with a non-registered email', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goToPage()
  await mainPage.clickOnSignInBtn()

  const signInPage = new SignInPage(page)
  await signInPage.verifyPageIsDisplayed()
  await signInPage.fillEmailField("test@email.com")
  await signInPage.clickOnNextButton()
  await signInPage.waitForPasswordFieldToBeVisible()
  await signInPage.fillPasswordField("testpassword")
  await signInPage.clickOnSignInBtn()
  await signInPage.checkFailedAuthenticationAlertShowsUp()
});

test('SignIn Page: Password field gets clean up when User clicks on Clear Email button', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goToPage()
  await mainPage.clickOnSignInBtn()

  const signInPage = new SignInPage(page)
  await signInPage.verifyPageIsDisplayed()
  await signInPage.fillEmailField("test@email.com")
  await signInPage.clickOnNextButton()
  await signInPage.waitForPasswordFieldToBeVisible()
  await signInPage.fillPasswordField("testpassword")
  await signInPage.clickOnClearEmailButton()
  await signInPage.fillEmailField("test@email.com")
  await signInPage.clickOnNextButton()
  await signInPage.waitForPasswordFieldToBeVisible()
  await signInPage.verifyPasswordFieldIsEmpty()
});

test('SignIn Page: User sees an error when try to put a very long email account', async ({ page }) => {
  const veryLongString = "a".repeat(1_000_000)
  const veryLongEmail =  `${veryLongString}@email.com`
  
  const mainPage = new MainPage(page)
  await mainPage.goToPage()
  await mainPage.clickOnSignInBtn()

  const signInPage = new SignInPage(page)
  await signInPage.verifyPageIsDisplayed()
  await signInPage.fillEmailField(veryLongEmail)
  await signInPage.clickOnNextButton()
  await signInPage.verifyFailedToFetchAlertIsVisible()
});
