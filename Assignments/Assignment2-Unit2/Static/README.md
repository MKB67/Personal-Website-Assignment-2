### Overview

This is an attempt on Asignment by way of incorporating HTML, CSS and JS to improve the interactivity and appearence of the personal portfolio website built up from Assignment 1.

The nav bar on the webpage displays:

- Career profile and education

- Key skills (professional and personal)

- Shop section with dynamic "rose cards"

- Login and account system with session storage

- Interactive navigation and content sections

- Fun fact and contact information

The webpage uses concepts in HTML, CSS, and JavaScript as taught in the learning modules of the program along with some other features like modals, local storage, dynamic DOM manipulation, responsive and interative navigation.

### Technologies Used

- HTML5 – for basic webpage layout

- CSS3 – for styling, responsive design and layout

- Bootstrap 5 – for basic styling and layout support

- Browser localStorage / sessionStorage – for saving quiz progress and login status

- JavaScript – for interactivity:

  -- Dynamic shop cart

  -- Login/account modal

  -- Session storage for user login persistence

  -- DOM manipulation for updates on content

### Project Structure

/Assignment2-Unit2 - Project Folder

- Pages.html/
  │ |- Landing-index.html
  | |- Main.html
  | |- Features.html
  | |- Beer-game.html
  │ |- Work-exp.html
  | |- Reading.html
  │ |- Contact-me.html
  │ |- More-info.html
  │ |- Shop.html
  | |- Tourism-city.html
  │
  |- Styles.css/
  │ |- Main.css
  │ |- Contact-me.css
  │ |- More-info.css
  │ |- Work-expstyles.css
  │ |- Tourism.css
  │
  |- Images
  | |- Blackrose.jpeg
  | |- Blurrose.jpeg
  | |- Lavenderrose.jpeg
  | |- Orangerose.jpeg
  | |- Pinkrose.jpeg
  | |- Redrose.jpeg
  | |- Whiterose.jpg
  | |- Yellowrose.webp
  |
  |- Script.js/
  | |- Landing-quiz.js
  | |- Beer-game.js
  | |- Tourism.js
  |
  |- Static
  | |- README.md

### 🛠 Technologies Used

## Nav Bar

- Sticky navbar with various sections: Work, Info, Hobby, Shop, Features, Account
- Info section opens all portfolio content on one page

## Login & Account

- Login modal with email/password
- Create account stores user email in local storage (`sessionStorage`)
- Displays welcome message with email
- Clicking "Account" after login shows a message: "You are already logged in as [email]"

## Portfolio Sections

- Career Profile, Education, Key Personality & Professional Skills on one page
- Footer navigation to come back to home page

## Fun Math Game

- Random questions using AND (`&&`) and OR (`||`) logical operators
- Real-time feedback and score counting
- Use of conditional logic in JavaScript

### 🚀 How to Run/ Use

1. Open `Landing-index.html` in a browser.
2. You'll be taken to `Main.html` once the quiz is cleared on landing page.
3. Navigate using the navbar:
   - Click **Work** to read about work experience
   - Click **Info** to view portfolio sections
   - Click **Hobby** to read about my interests
   - Click **Account** to login, to register or see login status
   - Click **Shop** to browse dynamic rose shop and add to cart
   - Click **Features** to play the consitional logic AND/OR math game
4. Use modals to login or create an account.
5. Contact page opens in a new tab.

### Notes

- The website only uses HTML, CSS & JS. Webpage is front end and no backend is currently used.
- Passed quiz and Login info is stored in local storage and resets on browser being closed.
- Logical operators (`&&` and `||`) are used in:
  - Checking login inputs (`if (!email || !password)`)
  - Closing modals with `&&` shorthand
  - Validating answers in the math game

### Improvements Required

- Full website with all device responsiveness
- Add various forms or modals for user inputs
- More interactivity and animations for login and notifications prompts
- Include more pictures, expands or enlagements of images, interactive galleries
- Improve shop cart addition function, multiple quantities/ bulk orders and total price
