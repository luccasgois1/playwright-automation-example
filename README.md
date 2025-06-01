# YourCorp Automation

## Description

This is a proof of concept of Playwright use for automate the SignIn page of [YouCorp - Alumni](https://yourcorp.alumni-stage.com/)

## Test Cases

1. Verify that the e-mail field validation do not allow non-email inputs

1. Verify that the user cannot connect with an non-registered e-mail.

1. Verify that the password field is empty when The User clicks on the X button on the filled E-mail field

1. Verify that the Login page throws an error if The User try to insert a very long e-mail

## Prepare your environment

1. [Install Node 20.16.0](https://nodejs.org/pt/download)
1. Clone this repository to your local machine: `git clone https://github.com/luccasgois1/playwright-automation-example.git`
1. Install the required packages
```bash
# Install the required packages
npm install
# Make sure playwright drivers and dependencies are installed
npx playwright install --with-deps
```

## How to run the tests

```bash
npx playwright test
```
