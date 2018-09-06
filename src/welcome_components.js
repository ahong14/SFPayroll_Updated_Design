class PageHeader extends React.Component{
    render(){
        return(
            <div className = "text-center" id = "page_header">
                <div className = "centered" id = "header_text">
                    <h1> San Francisco Bay Area Chapter </h1>
                    <h1> American Payroll Association   </h1>
                </div>
                <img src = "photos/golden_gate_bridge.jpg" id = "golden_gate_background"/>
            </div>
        )
    }
}


class WelcomeJoin extends React.Component{
    render(){
        return(
            // <!-- div to hold welcome text, award lists, and join button -->
            <div id = "welcome_awards_join"> 
                <h3 className = "text-center" id = "welcome_text" > Welcome to the San Francisco Bay Area Chapter
                    of the American Payroll Association
                </h3>

                {/* <!-- carousel for image slideshow --> */}
                <div  className="carousel slide" id="myCarousel" data-ride="carousel" data-interval = "5000">
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            {/* <!-- <li data-target="#myCarousel" data-slide-to="4"></li> --> */}
                        </ol>

                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">

                            {/* <!-- <div class="carousel-item active">
                                <img class= "slide_image" class = "img-responsive" src="photos/about_us_6.JPG" alt="first image">
                            </div> --> */}

                            <div className="carousel-item active">
                                <img className= "slide_image img-responsive" src="photos/about_us_1.JPG" alt="second image"/>
                            </div>

                            <div className="carousel-item">
                                <img className= "slide_image img-responsive" src="photos/about_us_2.JPG" alt = "third image"/>
                            </div>

                            <div className="carousel-item">
                                <img className= "slide_image img-responsive" src="photos/about_us_4.JPG" alt="fourth image"/>
                            </div>

                            <div className="carousel-item">
                                <img className= "slide_image img-responsive" src="photos/carousel_image.jpg" alt="fifth image"/>
                            </div>
                        </div>
                </div> 
                {/* <!-- end of carousel --> */}
             
                {/* <!-- list of chapter awards --> */}
                <div id = "awards">
                    <img className = "award_image" alt = "2018 first chapter pictorial " src = "photos/award7.jpg"/> 
                    <img className = "award_image" alt = "first npw photo contest" src = "photos/award8.jpg"/> 
                    <img className = "award_image" alt = "gavel award innovator" src = "photos/award5.jpg"/> 
                    <img className = "award_image" alt = "2018 participant regional/statewide meeting" src = "photos/award6.jpg"/> 
                    <img className = "award_image" alt = "2017 participant" src = "photos/award2.jpg"/> 
                    <img className = "award_image" alt = "2017 chapter pictorial particpant" src = "photos/award4.jpg"/> 
                    <img className = "award_image" alt = "honorable mention chapter of the year" src = "photos/award1.jpg"/> 
                </div>

                {/* <!-- list of chapter sponsors --> */}
                <div id = "sponsors">
                    <p className = "text-center font-weight-bold font-italic" > Sponsors: </p>

                    <div  className = "text-center" id = "sponsor_logos">
                        <a href = "https://www.mckesson.com/" target = "_blank"> <img className = "sponsor_images" id = "mckesson" src = "photos/mckesson_logo.gif" alt = "mckesson_logo"/> </a>
                        <a href = "https://www.clifbar.com/" target = "_blank"> <img className = "sponsor_images" src = "photos/clif_logo.jpg" alt = "clif-logo"/> </a>
                        <a href = "https://www.iipay.com/" target = "_blank"> <img className = "sponsor_images" src = "photos/iipay_logo.jpg" alt = "iipay_logo"/> </a>
                    </div>
                </div>

                {/* <!-- join button --> */}
                <div id = "join">
                    <h3 className = "text-center"> Not a member yet?  </h3>

                    <a className = "text-center" id="join_link" href = "https://www.cvent.com/events/ContactPortal/Login.aspx?cwstub=e9b2ed48-33d2-4d6c-bd0e-f6459cd30d89" target="_blank"> 
                        <button type="button" class="btn btn-outlined btn-primary" id = "join_button">  Join/Login </button>  
                    </a>

                    <h3 className = "text-center"> Click to join! </h3>
                </div>
               
                <br/>

            </div> 
            /* <!-- end of welcome awards join --> */

        )
    }
}


//put multiple class components as one
const welcomeContainer = (
    <div>
        <PageHeader/>
        <WelcomeJoin/>
    </div>  
);


//render to DOM
ReactDOM.render(
    welcomeContainer,
    document.getElementById('welcome_container')
)

