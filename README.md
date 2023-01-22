# [Nulla Dashboard](https://nulla-316b1.web.app)

## Dashboard Description
Nula is a sustainability platform that educates and engages organizations’ teams to exceed their Net Zero targets and to profit from their ESG goals. their goal with their  platform is to deliver a quadruple win to organizations:
* Increase employee engagement, leading to improved productivity plus attraction and retention rates.
* Save time and money through increased operational efficiency.
* Generate revenue through increased customer loyalty and happiness
* improved impact metrics/ESG performance.

## Purpose
 Many organizations are failing to see the business case for comprehensive sustainable action, despite the critical impact of climate change and future regulations on business activities. The result is lackluster strategies that either greenwash or focus solely on carbon, leading to disengaged employees and decreasing customer loyalty.

## User Story :

#### As an admin :
* You can signup, login, and reset your password.
* You can add information about your company 
* You have a profile and can edit your information.
* You can add a TypeForm Survey link and get the following:
> * Check the stack charts that contain statistics for all of ( Personal, Driver, LEAD) questions
> * Check a graph for the ages of those who completed the survey.
> * Check a graph for the display of the city distribution for those who filled the survey.
>* Check the positions title of people who have filled out the survey.
>* Get the percentage statistics of every answer for every single question.

#### As  a Super Admin (founder): 
> * you can check all companies they signup for and their information.



  
  # Workflow
 ## A typical workflow is described below:
  1- Login the Site


![](https://i.imgur.com/qPlTQ4U.png)
After the user add his email and password will save it in firebase authencation.

![](https://i.imgur.com/umretzo.png)

2- If you dont have a account , will go to Sign up 

![](https://i.imgur.com/ngvvDFo.png)

3- If you forget your password:

![](https://i.imgur.com/mt9gCPz.png),
you will recive a email to reset your password.



4-After you sign up will go to add company information ,and interseted question ,and this data will saved in  firestore Database.

![](https://i.imgur.com/VrliIzc.png)


![](https://i.imgur.com/xxtSPB1.png)


5-Dashboard Page
You should to import the survey link first to see the results.

![](https://i.imgur.com/9qnCUAr.png)


The first thing wil show it in the dashboard page the snapshot compoennts , we have a three questions and will show the persentage for each questions , and it calculated by averaging the number of people that strongly agree and agree.



![](https://i.imgur.com/th4KtUS.png)


You will enter a survey link from typeform and will get a charts for all questions statictics


![](https://i.imgur.com/taHywDY.png)

*  In questions stack chart , we have a type of survey questions and for each type will get the staticts persentage.
 
*  For the Location chart , will show demographics and the percentage distribution of each group.
 
*  For Age chart, will show average age for all empolyees.
* For team chart , will show the persentage for the position title for the employees.
* 
6- Profile Pgae
You will add a infromation about you like :Email,Gender,Postion Title ,and others data.

![](https://i.imgur.com/EdCKpUh.png)
![](https://i.imgur.com/k1ZTqL7.png)

7-All questions page 
In this page will show all questions and all statictics, and will get it from survey link that created using Typeform.


![](https://i.imgur.com/0xrghWe.png)

8- All compnay page 
This page for Nulla admin just, the admin can see all compnaies in the site and infromation about them.

![](https://i.imgur.com/hz1uZvD.png)

----------------
## Installation
* intsall angular using ```npm install -g @angular/cli```
* intsall firebase 
* git clone ```https://github.com/reemsh2000/nulla_dashboard.git```
* npm i 
* cd functions
* npm i 
* cd ../
* npm start
------------
## API documentation 
````
Get      /survey-statistics/:surveyId         
To get survey statistics baes
````

---------------
## Technologies:

FrontEnd: Angular,typescript,PrimeNg,CSS.

BackEnd: Node JS, Express JS &  Cloud functions .

Database: Firebase store.

-----------------------
## How to create Effective typeform survey ?

follow the steps here : [Link](https://docs.google.com/document/d/11hEeZ45TovPKbPjAqRp1BA24WwaDU0VoC0_A1uJuJoE/edit?usp=sharing)
------------------------------------
## what is next?
* Adding company employees to the site.
* Add information about the company's employees.
* Send the survey link using the email of a specific team.
* Add an employee using the CSV upload button.
* Create a team and add information about the team in addition to adding team members.
* Add different types of surveys and choose to whom to send them.
* Add a heatmap for a specific type of question.
* Add more permission for the company manager or human resources
-----------------------------------------
## MVP blockers :
* The way to associate the question with its type on the Typeform.
* Performance issues: because the returned API was so interleaf.
* using firebase cloud functions as backend, because we want to deploy the front end and backend of the website on the same server.
