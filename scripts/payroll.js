//set date for events section
function setDate(){
    var date = new Date();
    var date_div = document.getElementById('time_date');
    date_div.textContent = date.toDateString();
}

//check mobile site window width
var largeWindow = window.matchMedia("(min-width: 500px)");
var mediumWindow = window.matchMedia("(max-width: 480px)");
var smallWindow = window.matchMedia("(max-width: 360px)")

//check mediaquery for desktop or mobile
function checkWindow(x) {
    if (x.matches) { // If media query matches
        return true;
    } else {
        return false;
    }
}

setDate();

//toggle about sections 
function showHistory(){
    var history_content = document.getElementById('history_section');
    
    var history_content_div = document.createElement('div');
 

    history_content_div.id = 'history_content';

    var blockquote_content = document.createElement('div');
    blockquote_content.className = 'blockquote_caption bold';
    blockquote_content.id = 'history_blockquotes';

    var blockquote1 = document.createElement('blockquote');
    var blockquote2 = document.createElement('blockquote');
    var hide_info = document.createElement('p');

    //create blockquotes
    blockquote1.textContent = "Thank you for stopping by our site. The San Francisco Bay Area Chapter (SFBAC) of the American Payroll Association was formed in 1983 to provide educational and networking opportunities for local Payroll Professionals, as well as to support the goals of the National Organization. Payroll is a demanding profession, and deserves to be recognized as such.Payroll Professionals are called upon to constantly update their education and skills, to produce work that conforms to the highest technical standards, and to maintain the highest level of professional ethics. SFBAC holds regular meetings featuring speakers on topics ranging from taxation and regulation to personal and professional development. Continuing Education Units (CEUs) are available for all meetings."
    blockquote2.textConent = "In 2010, the Chapter provided a scholarship to attend the Annual APA Congress. We also awarded 3 scholarships to the California Payroll Conference. We intend to continue this scholarship program, so keep an eye out for announcements! 2003 was our 20th Anniversary year. We celebrated with a half-day meeting at the Fairmont Hotel in San Francisco , with special guest, Michael Hall, CPP, APA President-Elect.SFBAC conducts two annual study groups to help candidates prepare for the Certified Payroll Professional Exam. This exam is offered twice a year, in the Spring and Fall. The Chapter holds its eight weeks CPP Study Group in the spring and summer, beginning in February and July respectively, in time for candidates to take the Spring and Fall exam. The Facilitators are all CPPs and all volunteers. Professionals who are already CPPs can earn CEUs by facilitating or participating in the Study Group sessions. New Payroll Practitioners not eligible to take the CPP Exam can take the recently established Fundamental Payroll Certification Exam. The CPP Study Group is also an excellent learning resource for this exam. We hope to see you at one of our meetings in the near future. Please refer to our Calendar of Events. You can also apply for membership online, or look through the latest Job Postings we have received.";

    //create button to hide info
    hide_info.textContent = "Hide Info";
    hide_info.onclick = hideHistory;
    hide_info.className = 'text-center font-italic toggle_info';

    //add elements to div
    blockquote_content.appendChild(blockquote1);
    blockquote_content.appendChild(blockquote2);
    blockquote_content.appendChild(hide_info);

    history_content_div.appendChild(blockquote_content);

    // //vanilla js way
    // history_content.appendChild(history_content_div);

    //jquery way
    $(history_content_div).hide().appendTo(history_content).fadeIn(500);

    var more_info = document.getElementById('history_more_info');
    more_info.style.visibility = 'hidden';
}


function hideHistory(){
    var history_content = document.getElementById('history_content');
    while(history_content.hasChildNodes()){
        history_content.removeChild(history_content.lastChild);
    }

    history_content.remove();
    // $(history_content).fadeOut(500, function() {
    //     $(this).remove();    
    // });

    var more_info = document.getElementById('history_more_info');
    more_info.style.visibility = 'visible'; 
 
}

function showAPA(){
    var apa_content = document.getElementById('apa_section');
    var apa_content_div = document.createElement('div');
    apa_content_div.id = 'apa_content';

    var blockquote_content = document.createElement('div');
    blockquote_content.className = 'blockquote_caption bold';
    blockquote_content.id = 'apa_blockquotes';

    var blockquote1 = document.createElement('blockquote');
    var hide_info = document.createElement('p');

    blockquote1.textContent = "Established in 1982, the American Payroll Association (APA), headquartered in San Antonio , TX , is the nation's leader in payroll education, training, and publications. The nonprofit association conducts more than 300 payroll education conferences and seminars across the country each year and publishes a complete library of resource texts and newsletters. Every year, nearly 18,000 professionals attend APA training sessions. Representing over 22,000 members, APA is the industry's highly respected, collective voice in Washington DC.If you want to become a member of APA National, check out www.americanpayroll.org/members to learn more and join today, or fill out the Membership Application.";

     //create button to hide info
     hide_info.textContent = "Hide Info";
     hide_info.onclick = hideAPA;
     hide_info.className = 'text-center font-italic toggle_info';


     blockquote_content.appendChild(blockquote1);
     blockquote_content.appendChild(hide_info);

     apa_content_div.appendChild(blockquote_content);

    //  apa_content.appendChild(apa_content_div);
       //jquery way
    $(apa_content_div).hide().appendTo(apa_content).fadeIn(500);

     var more_info = document.getElementById('apa_more_info');
     more_info.style.visibility = 'hidden';

}

function hideAPA(){
    var apa_content = document.getElementById('apa_content');
    while(apa_content.hasChildNodes()){
        apa_content.removeChild(apa_content.lastChild);
    }
    apa_content.remove();

    var more_info = document.getElementById('apa_more_info');
    more_info.style.visibility = 'visible';
}

function showGPMI(){
    var gpmi_content = document.getElementById('gpmi_section');
    var gpmi_content_div = document.createElement('div');
    gpmi_content_div.id = "gpmi_content";

    var blockquote_content = document.createElement('div');
    blockquote_content.className = 'blockquote_caption bold';
    blockquote_content.id = 'gpmi_blockquotes';

    var blockquote1 = document.createElement('blockquote');
    var hide_info = document.createElement('p');

    blockquote1.textContent = "The Global Payroll Management Institute (GPMI) is the world’s leading community of payroll leaders, managers, practitioners, researchers, and technology experts. GPMI's mission is to create opportunities and forge a community by providing the education, skills, and resources necessary for global payroll professionals to become successful leaders and strategic partners within their organizations. Subscribe To GPMI Exclusive education, publications, and whitepapers dedicated to global payroll strategies, knowledge, research, employment, and training.";
       
    //create button to hide info
    hide_info.textContent = "Hide Info";
    hide_info.onclick = hideGPMI;
    hide_info.className = 'text-center font-italic toggle_info';
   
    blockquote_content.appendChild(blockquote1);
    blockquote_content.appendChild(hide_info);

    gpmi_content_div.appendChild(blockquote_content);
    // gpmi_content.appendChild(gpmi_content_div);
    
    //jquery way
    $(gpmi_content_div).hide().appendTo(gpmi_content).fadeIn(500);

    var more_info = document.getElementById('gpmi_more_info');
    more_info.style.visibility = 'hidden';

}

function hideGPMI(){
    var gpmi_content = document.getElementById('gpmi_content');
    while(gpmi_content.hasChildNodes()){
        gpmi_content.removeChild(gpmi_content.lastChild);
    }
    gpmi_content.remove();

    var more_info = document.getElementById('gpmi_more_info');
    more_info.style.visibility = 'visible';
}

function showStudy(){
    var study_content = document.getElementById("study_group");

    var study_div = document.createElement("div");

    study_div.id = "study_content";

    var blockquote1 = document.createElement("blockquote");

    blockquote1.className = "bold";
    
    blockquote1.textContent = 
    "This is a special group designed to cater to those who prefer a smaller, more intimate study environment, so limited space is available. Enroll now to ensure your spot is reserved! The APA has several different grant programs to not only help pay for Congress, but will also cover classes and resources. Visit the follow web page for more details: http://www.americanpayroll.org/members/edgrant/. The American Payroll Association website also has  posted all Study Group sessions from other local chapters. Please check out HERE for more education information.";


    study_div.style.width = "50%";
    study_div.style.alignSelf = "center";

    //create button to hide info
    var hide_info = document.createElement("p");
    hide_info.textContent = "Hide Info";
    hide_info.onclick = hideStudy;
    hide_info.className = 'text-center font-italic toggle_info';

    study_div.appendChild(blockquote1);

    study_div.appendChild(hide_info);

    // study_content.appendChild(study_div);
    
    //jquery way
    $(study_div).hide().appendTo(study_content).fadeIn(500);

    var more_info = document.getElementById('study_more_info');
    more_info.style.visibility = 'hidden';

    var membership_container = document.getElementById('membership_container');

    if(checkWindow(largeWindow) == true){
        membership_container.style.minHeight = "1800px";
    }

    else if(checkWindow(mediumWindow)==true){
        membership_container.style.minHeight = "1900px";
    }

    else if(checkWindow(smallWindow)==true){
        membership_container.style.minHeight = "2000px";
    }

    else{
        membership_container.style.minHeight = "1500px";
    }

}

function hideStudy(){
    var content = document.getElementById('study_content');
    while(content.hasChildNodes()){
        content.removeChild(content.lastChild);
    }
    content.remove();

    var more_info = document.getElementById('study_more_info');
    more_info.style.visibility = 'visible';

    var membership_container = document.getElementById('membership_container');
    membership_container.style.minHeight = "1300px";
}
//end of toggle functions

function sendJobPost(){
    // var position_title = document.getElementById('position');
    // var city = document.getElementById('city');
    // var state  = document.getElementById('state');
    // var payroll_position = document.getElementById('payroll_position');
    // var job_description = document.getElementById('job_description');

    // if(position_title.value == ""){
    //     alert("Empty Position Title: Please enter a position title.");
    // }

    // else if (city.value == ""){
    //     alert("Empty City: Please enter a city location");
    // }

    // else if (state.value == ""){
    //     alert("Empty State: Please enter a state");
    // }

    // else if (job_description.value == ""){
    //     alert("Empty Job Description: Please enter a job description");
    // }

    // else{
    //         var link = "mailto:alexhong681@gmail.com"
    //          + "&subject=" + escape("New Job Position")
    //          + "&body=" + escape("Position Title: " + position_title.value) + escape("City: " + city.value) + escape("State: " + state.value) 
    //                     + escape("Payroll Position: " + payroll_position.value) + escape("Job Description: " + job_description.value);

    //         window.location.href = link;
    //         alert("Job Posting Sent!");

    // }

  


}

//scroll animation functions
function scrollHome(){
    $('html, body').animate(
    {
        scrollTop: $('#welcome_container').position().top-77
    },500);

    if( checkWindow(largeWindow) == true || checkWindow(mediumWindow) == true || checkWindow(smallWindow) == true){
        closeSideNav();
    }
}


function scrollToEvents(){
    // Scroll to a certain element

    $('html, body').animate(
    {
        scrollTop: $('#events_container').position().top-77
    },500);

    if( checkWindow(largeWindow) == true || checkWindow(mediumWindow) == true || checkWindow(smallWindow) == true){
        closeSideNav();
    }
    
}

function scrollToAbout(){
    $('html, body').animate(
    {
        scrollTop: $('#about_us_container').position().top-30
    },500);

    if( checkWindow(largeWindow) == true || checkWindow(mediumWindow) == true || checkWindow(smallWindow) == true){
        closeSideNav();
    }
}

function scrollToMembership(){
    $('html, body').animate(
    {
        scrollTop: $('#membership_container').position().top-77
    },500);

    if( checkWindow(largeWindow) == true || checkWindow(mediumWindow) == true || checkWindow(smallWindow) == true){
        closeSideNav();
    }
}

function scrollToResources(){
    $('html, body').animate(
    {
        scrollTop: $('#resources_container').position().top-77
    },500);

    if( checkWindow(largeWindow) == true || checkWindow(mediumWindow) == true || checkWindow(smallWindow) == true){
        closeSideNav();
    }
}

function scrollToCareers(){
    $('html, body').animate(
    {
        scrollTop: $('#careers_container').position().top-77
    },500);

    if( checkWindow(largeWindow) == true || checkWindow(mediumWindow) == true || checkWindow(smallWindow) == true){
        closeSideNav();
    }
}

function scrollToContacts(){
    $('html, body').animate(
    {
        scrollTop: $('#contact_us_container').position().top-77
    },500);

    if( checkWindow(largeWindow) == true || checkWindow(mediumWindow) == true || checkWindow(smallWindow) == true){
        closeSideNav();
    }
}

function showSideNav(){
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("close_icon").style.display = "block";
}

function closeSideNav(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("close_icon").style.display = "none";
}