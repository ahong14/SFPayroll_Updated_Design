//react components for contact us section
//image information for social media accounts

const twitter = {
    siteName: "Twitter",
    siteId: "twitter",
    source: "https://twitter.com/SFBAC_APA",
    image: "photos/twitter_logo.png"
}

const facebook = {
    siteName: "Facebook",
    siteId: "facebook",
    source: "https://www.facebook.com/payrollpeeps/",
    image_id: "facebook_logo",
    image: "photos/facebook_logo.png"
}

const linkedin = {
    siteName: "LinkedIn",
    siteId: "linkedin",
    source: "https://www.linkedin.com/in/sfbac-apa-74bb7421/",
    image: "photos/linkedin_logo.png"
}


class FollowContainer extends React.Component{
    render(){
        return(
            <div class = "follow_us_container" id = {this.props.siteId}>
                <h3 class = "font-weight-bold"> {this.props.site} </h3>
                <a href = {this.props.src} target = "_blank" ><img className = "follow_image" id = {this.props.imageId} src = {this.props.imagesrc}/>
                </a>
            </div>
        )
    }
}

class ContactUs extends React.Component{
    render(){
        return(
            <div className = "align_center" id = "contact_info">
                    <p> General Information/Government Update: <a href="mailto:info@sfpayroll.org" target = "_blank"> info@sfpayroll.org </a> </p>
                    <p> Reservation: <a href = "mailto:RSVP@sfpayroll.org" target = "_blank"> RSVP@sfpayroll.org </a> </p>
                    <p> Membership: <a href = "mailto:member@sfpayroll.org" target = "_blank" > member@sfpayroll.org </a> </p>
                    <p> Study Group: <a href = "mailto:studygroup@sfpayroll.org" target = "_blank"> studygroup@sfpayroll.org </a> </p>
                    <p> Job Posting/Webmaster: <a href = "mailto:admin@sfpayroll.org" target = "_blank"> admin@sfpayroll.org </a> </p>
                    <FollowContainer siteId = {linkedin.siteId} site = {linkedin.siteName} src = {linkedin.source} imagesrc = {linkedin.image}/>
                    <FollowContainer siteId = {twitter.siteId} site = {twitter.siteName} src = {twitter.source} imagesrc = {twitter.image}/>
                    <FollowContainer siteId = {facebook.siteId} site = {facebook.siteName} src = {facebook.source} imagesrc = {facebook.image } imageId = {facebook.image_id}/>

            </div>
        )
    }
}

class SubmitButton extends React.Component{
    render(){
        return(
            <div id = "submit_container">
                <button type="button" class="btn btn-outlined btn-primary" id = "submit_button" onClick = {sendContactInfo}>  Submit </button>
            </div>
        )
    }
}

class HearFrom extends React.Component{
    render(){
        return(
            <div className = "align_center" id = "hear_from_container">
                <h3 class = "text-center"> We would love to hear from you! </h3>
                <p id = "hear_content">We want to know how we can serve you better. Feel free to drop us a note, ask a question about our Chapter, or join us a sponsor. We will get back to you right away.</p>
                <div className = "form-group" id = "hear_from_form">
                    <label for="usr">Name: </label>
                    <input type="text" class="form-control" id="name"/>

                    <label for="usr">Email: </label>
                    <input type="text" class="form-control" id="email"/> 

                    <label for="usr">Message:</label>
                    <textarea class="form-control" rows="5" id="message"></textarea>
                </div>
                <SubmitButton/>
            </div>
        )
    }
}


const contactContainer = (
    <div className = "flex_column">
        <h3 class = "section_header"> Contact Us </h3>
        <br/>

        <ContactUs/>
        <br/>

        <HearFrom/> 
    </div>
)

ReactDOM.render(
    contactContainer,
    document.getElementById('contact_us_container')
)

