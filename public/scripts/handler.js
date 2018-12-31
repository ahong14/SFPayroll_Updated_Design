
//send email using gmail api
function sendMessage(headers_obj, message,callback)
{
    var email = '';

    for(var header in headers_obj)
        email += header += ": "+headers_obj[header]+"\r\n";

    email += "\r\n" + message;
    console.log(email);

    var sendRequest = gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
        'raw': window.btoa(email)
        }
    });
    sendRequest.execute(callback);

}

function success(){
    console.log("message sent");
}


//send job post in careers section
function sendJobPost(){
    var position_title = document.getElementById('position');
    var city = document.getElementById('city');
    var state  = document.getElementById('state');
    var payroll_position = document.getElementById('payroll_position');
    var job_description = document.getElementById('job_description');
    var invalid_input = false;
    

    //check for invalid inputs
    if(position_title.value == ""){
        alert("Empty Position Title: Please enter a position title.");
        invalid_input = true;
    }
  
    else if (city.value == ""){
        alert("Empty City: Please enter a city location");
        invalid_input = true;
    }
  
    else if (state.value == ""){
        alert("Empty State: Please enter a state");
        invalid_input = true;
    }
  
    else if (job_description.value == ""){ 
        alert("Empty Job Description: Please enter a job description");
        invalid_input = true;
    }

    //if valid inputs, send email
    if(invalid_input == false){

        //create job posting object
        var jobPosting = {};

        jobPosting.position = position_title.value;
        jobPosting.city = city.value;
        jobPosting.state = state.value;
        jobPosting.description = job_description.value;

        //send job posting with ajax request
        var xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'http://localhost:8080/sendJob', true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(jobPosting));    
    }
  
}

//send contact us info 
function sendContactInfo(){
    var contact_name = document.getElementById('name');
    var contact_email = document.getElementById('email');
    var contact_message = document.getElementById('message');

    var invalid_input = false;

    //check to for invalid inputs
    if (contact_name.value == ""){
        alert("Empty Name: Please enter name.");
        invalid_input = true;
    }

    else if (contact_email.value == ""){
        alert("Empty Email: Please enter email.");
        invalid_input = true;
    }

    else if (contact_message.value == ""){
        alert("Empty Message: Please enter message.");
        invalid_input = true;
    }


    if(invalid_input == false){

        //create object for contact information
        var contactInfo = {};

        contactInfo.name = contact_name.value;
        contactInfo.email = contact_email.value;
        contactInfo.message = contact_message.value;

        //send ajax request for contact information
        var xhttp = new XMLHttpRequest();
        xhttp.open('POST', 'http://localhost:8080/contactUs', true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(contactInfo));
    }

}