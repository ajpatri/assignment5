# Restaurant

## Zero

1. Change `About` to `My Info`
2. Change `Awards` to `Sign Up`

## Task One

1. Create Sign Up View (for newsletter)
   * Fields
     * first name
     * last name
     * email address
     * phone number
     * favorite_dish (menu short name)
2. Use AngularJS validation
   * Disable submit until valid
   * After the user presses submit, verify that the short-name exists
   * All valid? Save the user's preferences in a service
   * Saved? Display message below the form:
     * `Your information has been saved`

## Task Two

1. Create `My Info` view, showing them their registered information
  * Including their favorite menu item, with the picture as well as its title and description
2. Not signed up?
  * `Not Sign Up Yet. Sign up Now!`
  * `Sign up Now!` should be a link to the `Sign Up` view

## Bonus (not graded)

**Bonus Task 3:**
We haven't covered this, so do some research and figure out how to setup the validation of the user's choice for the favorite item BEFORE the user hits the `Submit` button. This way, the message `No such menu number exists` should show up pretty soon after the user types something into the favorite menu item textbox and it loses focus.

(Yes, I realize, it may be better to simply present the user with the list of items, but this is an exercise, after all.)

**Bonus Task 4:**
Write a simple test which exercises the function that will determine if the favorite item exists in the menu or doesn't exist. Note, that you will need to use the $httpBackend service (and probably look up the docs for it as well) to achieve this test properly.


### Rules
Do it the Angular way... We've covered this enough in the previous assignments and having the restaurant codebase the way it is, it would simply be more "painful" for you to try to do this without AngularJS, so I trust that you will pretty much be forced to do things the Angular way.

### Steps
I will not detail the steps in this assignment simply because pretty much all of them have been listed in the previous assignments. At this point, you have done the tasks I am asking you to do in this assignment in the previous assignments (with the exclusion of form validation, which you should just look up the lecture and sample code for.)


#### Important Implementation Notes
1. Make sure all of your Javascript code is inside of an IIFE. (*If you don't know what that is or why we'd want to use it, brush up on it by looking through module 4 of [HTML, CSS, and Javascript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers/) course I teach.*)
2. Make sure all of your dependency injections are protected from minification.
3. After you are done and satisfied with your solution, don't forget to add/commit/push your code to your repository.

## **IMPORTANT REMINDERS:**
* Closely follow the submission guidelines for this assignment on Coursera.org
* Make **sure** you provide the correct URL in your submission (it should be GitHub<b>.io</b>, *not* GitHub<b>.com</b>)
* Make **sure** to TEST your assignment not just on your local machine, but ALSO once you deploy it on GitHub, using the URL you are providing as part of your submission.
* This assignment will be peer-reviewed (and graded). The guidance will be given such that if submission instructions are not followed, the assignment is to be failed. This includes providing the wrong URL for your deployment. Following instructions is very much part of software development. After all, that's what software requirements are - instructions to follow.