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

## /pdfs: Sends back pdf files hosted on server, file name based on query param
Params:
    pdfName: File name of pdf to send back to client
          