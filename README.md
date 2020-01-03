# SFPayroll_Updated_Design
## Redesigned SF Payroll Website.
### Link: www.sfpayroll.org
#### Homepage Banner Image Source: https://www.pexels.com/photo/architecture-bay-bridge-construction-417236/

## Description:
Full-stack web application that shows information, events, career
openings etc. for San Francisco Payroll Association. Built using
Node.js, Express.js, React.js, HTML/CSS, MongoDB, and Bootstrap.

## Backend:
Used Express.js for server logic and APIs.
Used MongoDB on mLab to store events and career postings.
Used Mongoose.js to connect backend and mLab.

## APIs:
## /contact/contactUs: send contact information and message
   Params: 
          Name:
          Email:
          Message:
    
## /events: Retrieve events from database

## /sendJob: Send job posting to email
   Params: 
          Email: Email of user
          Title: Job position title
          City: City of job
          State: State of job
          Position: Type of position (paid, fulltime)
          Description: Description of job
          
## Frontend: 
   HTML/CSS, JavaScript, React.js, Bootstrap
    
   Rendered components using React.js and designed
   with Boostrap. Used React Routing to link different
   sections of single-page application.
    
## Components:
  ## Home
  ## Home: 
   Main landing page, 
  ## Carousel: 
   Component containing Bootstrap carousel
  ## Awards: 
   Component containing award images
  ## Sponsors: 
   Component containing sponsors
  ## JoinButton: 
   Component that contains button to link to login site
  
  ## Navigation Bar
  ## NavBar: 
   Component that consists of Navigation bar, for both regular/mobile
  ## NavElement: 
   Component that is used in NavBar to display links
  
  ## Events
  ## Events: 
   Component that displays events
  ## EventItem: 
   Component that contains event information
  
  ## About Us
  ## AboutUs: 
   Component that contains information about company
  ## AboutSections: 
   Component that displays blockquotes about different aspects
  ## Members: 
   Component that displays officers of company
  ## President: 
   Component that displays president info
  ## OfficerMember: 
   Component that displays officer info
  
  ## Membership
  ## Membership:  
   Component that holds membership info
  ## Benefits: 
   Component that displays different benefits
  ## Corporate: 
   Component that displays different plans
  ## StudyGroup: 
   Component that displays study group info
  
  ## Resources
  ## LearningGroupResources: 
   Displays learning group resources info
  ## StudyGroupResources: 
   Displays study group resources info
  
  ## Careers
  ## HelpSites: 
   Component that displays help website links
  ## OpenPositions: 
   Component that displays job information, rendered dynamically
  ## JobForm: 
   Component that allows user to input job posting info
  
  
  ## Contact Us
  ## ContactUs: 
   Displays site/company contact info
  ## HearFrom: 
   Component that allows user to input contact info/message
  
  ## Footer: 
   Component that displays footer info
   
   
   
