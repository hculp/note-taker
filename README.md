# Note Taker App 
![Github License](https://img.shields.io/badge/license-ISC-brightgreen)

## Description

  This is a deployable web based application for note taking to keep track of a user's notes. It requires a user to be able to setup and connect to a live app service like Heroku, which is what will be used for reproducing here.
  When a user opens the Note Taker app, they are introduced to a landing page with a link to the notes page. When a user clicks on the notes page, they are presented with a page that has any existing notes on the left side and empty inputs fields (title and text) on the right side to put new notes. After making a new note with a title and text, a user can save the note by clicking on the Save icon next to the plus icon, which when then save the new note and put in the list of existing notes on the left side column of the page. When a user clicks on an existing note, then it pops up on the right side column of the page, where the user can change the title or text of the note in order to save again. A user can delete a note by pressing the trashcan icon next to the existing note in the left side column of the page, which will remove the selected note from the list. When a user clicks on the write icon (plus symbol) at the top right of the page, then empty fields for the note title and text pops  up on the right side of the page.
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  1. To install just clone this repo:
  ```
  git clone git@github.com:hculp/SVG-logo-maker.git
  ```
  2. Install express and mysql with npm:
  ```
  npm i express
  npm i mysql2
  ```
  3. If you wish to use a live service app like what's used here, then follow the appropriate guidelines from your choosen app service. For this example Heroku's setup will be used, which requires your heroku account to be linked to your github account. If you're already using heroku and linked your github then proceed:
  ```
  heroku create
  ```
  4. Then make sure any repository changes are commited and deployed to your heroku app:
  ```
  git add -A
  git commit -m "Pushing to Heroku"
  git push heroku main 
  ```
  5. Then access the deployed app through your heroku account.

  ## Usage

  To use the this Note Taker app, just open the heroku app page [here](https://note-taker-hculp.herokuapp.com/). If you wish to test the app locally then do:
  ```
  npm start
  ```
  Here are some examples of what the app looks like. 
  ![example 1](./assets/demo-01.png)
  ![example 2](./assets/demo-02.png)
  ## Contribution

  Contribution falls under open ISC license.

  ## Tests

  N/A

  ## Questions

  Send any questions or feedback to the following contacts:

  * GitHub: [https://github.com/hculp](https://github.com/hculp)
  * Email: [howacul@gmail.com](mailto:howacul@gmail.com)
  
  ## License

    Copyright (C) 2023 Houston Culpepper.     
    
    Distributed under the ISC License.
  [Link to ISC license](https://choosealicense.com/licenses/isc)