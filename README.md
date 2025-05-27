# YourCorp Automation

## Description

This is a proof of concept of Playwright use for automate the SignIn page of [YouCorp - Alumni](https://yourcorp.alumni-stage.com/)

## Test Cases

1. Verify that the e-mail field validation do not allow non-email inputs

1. Verify that the user cannot connect with an non-registered e-mail.

1. Verify that the password field is empty when The User clicks on the X button on the filled E-mail field

1. Verify that the Login page throws an error if The User try to insert a very long e-mail

## Prepare your environment

1. Node 20.16.0

```bash
# Install the required packages
npm install
```

## How to run the tests

```bash
npx playwright test
```
