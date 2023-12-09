# King of the Kop

![Mockup image](/assets/testing/multi_device.png)

[Live webpage](https://spudos.github.io/King-of-the-Kop/)

## Table of Contents

- [1.0 Introduction](#10-introduction)
- [2.0 User Stories](#20-user-stories)
  - [2.1 As a User](#21-as-a-user)
  - [2.2 As the Site Owner](#22-as-the-site-owner)
- [3.0 Website Concept, Structure and Wireframe](#30-website-concept-and-wireframe)
  - [3.1 Game](#31-game)
  - [3.2 Quiz](#32-quiz)
  - [3.3 Feedback](#33-feedback)
- [4.0 Features](#40-features)
  - [4.1 Colour Scheme and Font](#41-colour-scheme-and-font)
  - [4.2 Navigation](#42-navigation)
  - [4.3 Game Instructions](#43-game-instructions)
  - [4.4 Game Play](#44-game-play)
  - [4.5 Game Try Again](#45-game-try-again)
  - [4.6 Quiz Instructions](#46-quiz-instructions)
  - [4.7 Quiz Play](#47-quiz-play)
  - [4.8 Quiz Try Again](#48-quiz-try-again)
  - [4.9 Feedback](#49-feedback)
  - [4.10 Feedback Validation](#410-feedback-validation)
  - [4.11 Feedback Summary](#411-feedback-summary)
  - [4.12 Feedback Email](#411-feedback-email)
- [5.0 Testing](#50-testing)
  - [5.1 Tests on Various Devices](#51-tests-on-various-devices)
  - [5.2 JSHINT, HTML and CSS](#52-jshint-html-and-css)
  - [5.3 Accessibility](#53-accessibility)
  - [5.4 Performance](#54-performance)
  - [5.5 Browser Compatibility](#55-browser-compatibility)
  - [5.6 Test User Stories](#56-test-user-stories)
- [6.0 Unresolved Bugs](#60-unresolved-bugs)
- [7.0 Deployment](#70-deployment)
- [8.0 Credits](#80-credits)
  - [8.1 Media](#81-media)
- [9.0 Criteria Checklist](#90-criteria-checklist)

## 1.0 Introduction

This site was designed to be an interactive and fun football themed game and quiz

The site is to be fully responsive and pass all accessibility tests

The game will feature a penalty shoot out where javascript is used to play out the game to a outcome

The quiz will be a short test of knowledge that notifies the user if they are right or wrong after each answer

The feedback for will allow users to contact the site owner with any comments they would like to make.  This form will perform validations for each input field and feedback to the user if they have made a mistake or omitted something

## 2.0 User Stories

### 2.1 As a User

1. Play a fun, interactive football based game multiple times with simple to understand rules and see the outcome

2. Take part in a quiz multiple times and see if they get more answers right than wrong

3. Be able to learn about Liverpool FC

4. Send comments to the Site Owner related to the game or quiz

### 2.2 As the Site Owner

5. Present an interesting game that is fun to play

6. Provide interactive content

7. The site should be designed in a user-friendly, accessible and simple way

8. The site should be fully responsive

9. Receive validated feedback from the user should they wish to submit them

## 3.0 Website Concept and Wireframe

The site will have 3 pages - the game, a quiz and a feedback form

### 3.1 Game

The game takes the form of a penalty shoot out with the user taking the role of the home team goalkeeper  

The home team will take a penalty and the user will be informed whether they score or not.  

If they score, the home team score is increased by one.  

The user will then get the chance to save a penalty.  The user clicks on the goal where they think the away team will shoot.  The user is then told if they saved the shot or not.

Once all the penalties have been taken the final score will be advised with the chance to play again

User Stories covered - 1,5,6,7,8

![Wireframes](https://share.balsamiq.com/c/1q3jnLgFTwBx8bccErH6Wa.png)

### 3.2 Quiz

This will be a 10 question quiz about Liverpool FC

The questions will be multiple choice and will be accompanied by a relevant image

If you answer correctly you score a goal and if you are incorrect it is a goal for the opposition

A scoreboard is updated throughout the game and the final score advised at the end

User Stories covered - 2,3,6,7,8

![Wireframes](https://share.balsamiq.com/c/uqHHej3wZrWDNNdKundqU2.png)

### 3.3 Feeedback

This feedback form enables the user to contact the Site Owner should they wish to do so

It will include full validation of all the fields in the form

The user will be advised that their message has been sent and what information was sent

The site will send an email to the Site Owner using emailjs.com so that the user is aware the feedback has been submitted

User Stories covered - 4,6,7,8,9

![Wireframes](https://share.balsamiq.com/c/op82QpvADVAN2PJ3MTuwAn.png)

## 4.0 Features

### 4.1 Colour Scheme and Font

The colors associated with Liverpool Football Club are red, white, green and yellow.

Therefore, most these colours will be featured on the site

'Red' was deemed to be too bright so 'darkred' has been used along with 'darkgreen' and 'whitesmoke'

The fonts used are:

Titillium web which was obtained from google fonts and is used for general site styling

Scoreboard which was obtained from fontspace.com and is used for the scoreboard display in the quiz

### 4.2 Navigation

The navigation function must exist on all pages and be fully responsive

This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button

It will be identical on each page

### 4.3 Game Instructions

Clear instructions are given with a start game button so the user knows what to do

User Stories covered - 1,5,6,7,8

![Mockup image](/assets/features/game_rules.png)

### 4.4 Game Play

Intuitive design and in game messaging lets the user know what they should do and what the various outcomes are

User Stories covered - 1,5,6,7,8

![Mockup image](/assets/features/game_live.png)

### 4.5 Game Try Again

A try again button is shown at the end of the game to allow multiple tries

User Stories covered - 1,5,6,7,8

![Mockup image](/assets/features/game_try_again.png)

### 4.6 Quiz Instructions

Clear instructions are given with a start quiz button so the user knows what to do

User Stories covered - 2,3,6,7,8

![Mockup image](/assets/features/quiz_rules.png)

### 4.7 Quiz Play

Intuitive design and in quiz messaging lets the user know what they should do and what the various outcomes are

User Stories covered - 2,3,6,7,8

![Mockup image](/assets/features/quiz_live.png)

### 4.8 Quiz Try Again

A try again button is shown at the end of the game to allow multiple tries

User Stories covered - 2,3,6,7,8

![Mockup image](/assets/features/quiz_try_again.png)

### 4.9 Feedback

A simple feedback form is provided

User Stories covered - 4,6,7,8,9

![Mockup image](/assets/features/feedback_empty.png)

### 4.10 Feedback Validation

All fields must pass validation to allow the form to be submitted

User Stories covered - 4,6,7,8,9

![Mockup image](/assets/features/feedback_validation.png)

### 4.11 Feedback Summary

A summary is shown so the user knows what has been submitted

User Stories covered - 4,6,7,8,9

![Mockup image](/assets/features/feedback_summary.png)

### 4.12 Feedback Email

A email is sent to the site owner so that they are aware that information has been submitted

User Stories covered - 4,6,7,8,9

![Mockup image](/assets/features/feedback_email.png)

## 5.0 Testing

The site has been tested manually on all formats from 360px wide (commonly used on iphones) up to full desktop sizes over 1800px using using browser web developer tools

### 5.1 Tests on Various Devices

The website was checked on

- Iphone 12
- Iphone 14
- Ipad Mini
- Ipad Pro 12.9"
- Macbook Pro
- Desktop PC

### 5.2 JSHINT, HTML and CSS

JSHINT was used to validate the js code

<details><summary>index.html</summary>
<img src="/assets/testing/game_jshint.png">
</details>
<details><summary>quiz.html</summary>
<img src="/assets/testing/quiz_jshint.png">
</details>
<details><summary>feedback.html</summary>
<img src="/assets/testing/feedback_jshint.png">
</details>

The W3C validation service was used to validate the HTML and CSS code with no errors reported

<details><summary>CSS</summary>
<img src="/assets/testing/css_test.png">
</details>
<details><summary>index.html</summary>
<img src="/assets/testing/game_html_test.png">
</details>
<details><summary>quiz.html</summary>
<img src="/assets/testing/quiz_html_test.png">
</details>
<details><summary>feedback.html</summary>
<img src="/assets/testing/feedback_html_test.png">
</details>

### 5.3 Accessibility

The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards

index.html [results](https://wave.webaim.org/report#/https://spudos.github.io/King-of-the-Kop/)

quiz.html [results](https://wave.webaim.org/report#/https://spudos.github.io/King-of-the-Kop/quiz.html)

feedback.html [results](https://wave.webaim.org/report#/https://spudos.github.io/King-of-the-Kop/feedback.html)

### 5.4 Performance

Chrome lighthouse tools were used to verify that all performance ratings were satisfactory

<details><summary>index.html</summary>
<img src="/assets/testing/game_lighthouse.png">
</details>
<details><summary>quiz.html</summary>
<img src="/assets/testing/quiz_lighthouse.png">
</details>
<details><summary>feedback.html</summary>
<img src="/assets/testing/feedback_lighthouse.png">
</details>

### 5.5 Browser compatibility

The website was tested on the these browsers:

- Google Chrome
- Apple Safari
- Mozilla Firefox

### 5.6 Test User Stories

### As a User

1. Play a fun, interactive football based game multiple times with simple to understand rules and see the outcome

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| game | Read the instructions then start the game following the simple interface | all criteria satisfied |

2. Take part in a quiz multiple times and see if they get more answers right than wrong

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| Quiz | Read the instructions then start the quiz following the simple interface | all criteria satisfied |

3. Be able to learn about Liverpool FC

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| Quiz | Questions and associated answer provide interesting knowledge about the club | all criteria satisfied |

4. Send comments to the site owner related to the game or quiz

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| Feedback form | Complete the validated fields to submit your feedback | all criteria satisfied |

### As the Site Owner

5. Present an interesting game that is fun to play

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
|  Game | Play the game and try to bneat your score! | all criteria satisfied |
|  Quiz | Play the quiz and try to beat your score whilst learning about LFC | all criteria satisfied |

6. Provide interactive content

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| All elements | The site is highly interactive responding to buttton clicks and other inputs | all criteria satisfied |

7. The site should be designed in a user-friendly, accessible and simple way

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| All | Easy navigation and the site passed all accessibility tests | all criteria satisfied |

8. The site should be fully responsive

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| All | Tested on various platforms and confirmed as fully functional on all of them | all criteria satisfied |

9. Receive validated feedback from the user should they wish to submit them

| **Feature** | **Action** | **Result** |
|-------------|------------|---------------------|
| Feedback form | Form cannot be submitted until answers have been given in the correct format | all criteria satisfied |
| Feedback email | email sent to site owner to alert them about the feedback submission | all criteria satisfied |

## 6.0 Unresolved Bugs

All bugs were resolved as they were discovered

## 7.0 Deployment

The website was deployed using GitHub Pages by following these steps:

1. In the GitHub repository navigate to the Settings tab
2. On the left-hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automatically you will see a ribbon on the top saying: Your site is live at [https://spudos.github.io/King-of-the-Kop/]

You can for fork the repository by following these steps:

1. Go to the GitHub repository
2. Click on Fork button in upper right-hand corner

You can clone the repository by following these steps:

1. Go to the GitHub repository
2. Locate the Code button above the list of files and click it
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter to create your local clone.

## 8.0 Credits

### 8.1 Media

andy-bell.co.uk was used as a css reset

google fonts and fontspace.com were used as a font resource

seeklogo.com was used for the liverpool fc logo

emailjs.com was used for the email feedback form

Special thanks to my mentor, Mo Shami, for his help and advice

### 9.0 PP2 Criteria Checklist

[PP2 criteria checklist](https://docs.google.com/spreadsheets/d/1L7anoSV1es7mZ9_QBbMOPKH1VK296K22U-9ktfeY_qg/edit?usp=sharing)