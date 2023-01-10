# Password-Generator

## Description

This is an application that a user can use to generate a random password based on user choices including the length of the password and different types of characters (lowercase, uppercase, numeric, special character).

## Screenshot

![Main page view](/assets/Screenshot-main-page.png)
![User's option view](/assets/Screenshot-prompt-window-for-user.png)
![Generated password view](/assets/Screenshot-generated-password.png)

## Usage

Users should be able to see the Password Generator Application with the field "Your Secure Password" and with the red "Generate Password" button after loaded the page.

Users should be able to click the "Generate Password" button.

Users should be able to see a series of prompts for password criteria including:

- Length of password, at least 10 characters but no more than 64.
- Character types: Lowercase, Uppercase, Numeric and Special characters. Validate for each input and at least one character type should be selected.

User
Once all prompts are answered, Users should be able to see the generated password written on the page.


Additionally:

When Users provided an incorrect length of password then an error should be displayed in an alert and logged to the Chrome DevTools and should no password be generated.

When Users have not selected any character type then an error should be displayed in an alert and logged to the Chrome DevTools and should no password be generated.

To open the Chrome DevTools by pressing Command+Option+I (MacOS) or Control+Shift+I (Windows). A console panel should open either below or to the side of the webpage in the browser. There you will see a list of computes.

## Links

GitHub URL: https://github.com/OlgaFelczak/Password-Generator

Live Site URL: https://olgafelczak.github.io/Password-Generator/
