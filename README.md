# System Requirement to run application
Node JS and NPM package manager latest version

# Below are the steps need to follow to run the application
1) Take the clone of the project anywhere in your system
2) Go to root folder of the project and run "npm install" command
3) Install typescript globally using command "npm install -g typescript"


# Constants files for data.
I have added two constant sample data files one for real application and one for unit testing purpose. If you want to make any change in sample data you can simply make changes in "sample.data.ts" file and for unit testing we have "unit-test-sample.data.ts" file available in same constants folder. 

Currently In cart products I have added only 1 data. So you can add as many data as you want to calculate amount on multiple data.

# Understanding of problem.
Mandatory discount : $5 on every $100 sell 
Conditional Discount : On basis of employee type "Employee","Affiliate","Customer" for 2 years with different percentage of discount application on every category.

So for example if total amount is : 950 then as per calculation if user is "Employee" type then total final amount will be (If its not in grocerry product category)

total amount = 950
total discount = 45 + (950-45)*30/100 = 315.3
total charge amount = 634.7;


# Commands to run application (All commands need to run on project root folder only)

# To compile code
tsc index.ts
# To run code
node index.js
# To run unit test
npm run test

It will also generate the code coverage on same console window.. Currently I have only tried to cover a single file and there was no mocking required anywhere so I have not mocked the code.

# Eslinting

Eslinting is also setup but eslint errors are not resolved in this application.. need to resolve that also. but setup is done for eslinting we can do setup some rules as per project requirement also in .eslintrc.js file
