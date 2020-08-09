This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Problem Statement: 
Create a react  component with the following specification
1) Input field and a search button.
2) Drop down showing the list of employees.(Should be Arranged in alphabetical order)- Use the above sample API( http://dummy.restapiexample.com/api/v1/employees ) .
3) A component to show the details of selected employee from the list
Actions to be handled
1) On click of search button or enter key press , just highlight the matching item in the drop down list. 2) On click of any item in the list the details of that employee should be visible in the content area (Refer 3rd point of specification)
 
Add on :
•        Good to have a nice look and feel
•        Styling using css library
•        Unit Testing

Submission Documentation:
UI Mock up URL: 
Using Invision freehand tool
https://projects.invisionapp.com/freehand/document/yOLGT5EbE

UI Feature List: 
1.	Search bar to type in the employee name
2.	On type- a scrollable drop down of employee list with matching ‘type string’ (case insensitive, matching string anywhere in the name).
3.	Click on any of the employee to see a Card of employee details
4.	Can also maneuver the list by keyboard keys- Arrow up/down and press enter to see the highlighted row’s employee card. 

Performance/implementation details and future scope: 
1.	Employee list fetched only once at the initial land of the page since it’s a small list of employees.

Scope for improvement for different use-case: 
- If employee list is huge, make the API call “onChange” in the input field, i.e, as and when employee string is typed in (can add debouncing on string search). 
2.	Further abstract components from the UI to make the code more modular and independent of the response json.
3.	A minor bug acknowledged- On keyup/down when the highlighted row goes beyond the scope of the visible dropdown list, the scroll position doesn’t change automatically. Can be fixed. 

Running in local:
For viewing production build UI:
Unzip build.zip and open index.html
Or
./employee-search/build/index.html
To deploy in development mode:
(Where ever the package.json of the project recides)
npm install (if node_modules not already present)
npm run start (need port 3000 avl)


