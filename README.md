# Super Heroes App
## Heigh-level Preview
The app's main roll is to let the end users to create, update, and remove their own super heros. And each change users make is locally persisted.
## Low-level Preview
The application is developed with ReactJS. It uses Redux subscriber to sync the heroes data slice on the store to the localStorage whenever somthing changed. Then users would be able to access their data even if they exit the page or the browser. And in the case where the user wants to view a hero, the JSON string on the localstrorage was parsed to convert it back into a JavaScript object.  

I used Redux-form for storing form data on the redux store. It provides great features which would probably take you days to build yourself. One hot feature is that it supports array fields and automatically add a number of levels deep to your JSON.
### The application has three different pages/routes:
  * Super Hero List:  
    This page is where super heroes would be listed. The data was fetched from the localStorage before it gets parsed. Through each super hero item you can either take a view or **delete** action.
  * Super Hero Edit:  
    Two different operations are actually made through this page. The first one is **creating** new super heroes and the second one is **updating** an already created super hero.
  * Super Hero View:  
    The page where you can **read** the data about the super hero you created. And the same place where you can navigate to the hero edit page.

## Installation
1. Clone the repository  
  ``git clone https://github.com/bigfanjs/sanad-tech-test.git``
2. Install the dependencies  
  ``npm install`` or ``yarn install``
3. Start the application  
  ``yarn start``

## Usage
This app is mobile-first so before taking the steps bellow, please toggle the device toolbar on the browser or just manually resize your browser to take the shape of a mobile device.

* Creating a new super hero:
  1. Start the App
  2. Click on the _CREATE NEW_ button on top right corner
  3. Fill in the forms in each step.
  4. You can add and remove fields on the second and the third steps.
* Editing an existent hero:
  1. Start the App
  2. Click on the VIEW button of the hero you want to edit
  3. Click on the EDIT button on the top right corner.
  4. Update the fields you want.
* Removing a super hero.
  1. Start the App.
  2. Click on the _DELETE_ button.
  
  ## See how it works
