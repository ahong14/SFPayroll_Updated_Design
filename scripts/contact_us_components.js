var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('./careers_components'),
    SubmitButton = _require.SubmitButton;

var twitter = {
    siteName: "Twitter",
    siteId: "twitter",
    source: "https://twitter.com/SFBAC_APA",
    image: "photos/twitter_logo.png"
};

var facebook = {
    siteName: "Facebook",
    siteId: "facebook",
    source: "https://www.facebook.com/payrollpeeps/",
    image: "photos/facebook_logo.png"
};

var linkedin = {
    siteName: "LinkedIn",
    siteId: "linkedin",
    source: "https://www.linkedin.com/in/sfbac-apa-74bb7421/",
    image: "photos/linkedin_logo.png"
};

var FollowContainer = function (_React$Component) {
    _inherits(FollowContainer, _React$Component);

    function FollowContainer() {
        _classCallCheck(this, FollowContainer);

        return _possibleConstructorReturn(this, (FollowContainer.__proto__ || Object.getPrototypeOf(FollowContainer)).apply(this, arguments));
    }

    _createClass(FollowContainer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "follow_us_container", id: this.props.siteId },
                React.createElement(
                    "h3",
                    { "class": "font-weight-bold" },
                    " ",
                    this.props.site,
                    " "
                ),
                React.createElement(
                    "a",
                    { href: this.props.src, target: "_blank" },
                    React.createElement("img", { className: "follow_image", src: this.props.imagesrc })
                )
            );
        }
    }]);

    return FollowContainer;
}(React.Component);

var ContactUs = function (_React$Component2) {
    _inherits(ContactUs, _React$Component2);

    function ContactUs() {
        _classCallCheck(this, ContactUs);

        return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
    }

    _createClass(ContactUs, [{
        key: "render",
        value: function render() {
            React.createElement(
                "div",
                { id: "contact_info" },
                React.createElement(
                    "p",
                    null,
                    " General Information/Government Update: ",
                    React.createElement(
                        "a",
                        { href: "mailto:info@sfpayroll.org", target: "_blank" },
                        " info@sfpayroll.org "
                    ),
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " Reservation: ",
                    React.createElement(
                        "a",
                        { href: "mailto:RSVP@sfpayroll.org", target: "_blank" },
                        " RSVP@sfpayroll.org "
                    ),
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " Membership: ",
                    React.createElement(
                        "a",
                        { href: "mailto:member@sfpayroll.org", target: "_blank" },
                        " member@sfpayroll.org "
                    ),
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " Study Group: ",
                    React.createElement(
                        "a",
                        { href: "mailto:studygroup@sfpayroll.org", target: "_blank" },
                        " studygroup@sfpayroll.org "
                    ),
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " Job Posting/Webmaster: ",
                    React.createElement(
                        "a",
                        { href: "mailto:admin@sfpayroll.org", target: "_blank" },
                        " admin@sfpayroll.org "
                    ),
                    " "
                ),
                React.createElement(FollowContainer, { siteId: linkedin.siteId, site: linkedin.siteName, src: linkedin.source, imagesrc: linkedin.image }),
                React.createElement(FollowContainer, { siteId: twitter.siteId, site: twitter.siteName, src: twitter.source, imagesrc: twitter.image }),
                React.createElement(FollowContainer, { siteId: facebook.siteId, site: facebook.siteName, src: facebook.source, imagesrc: facebook.image })
            );
        }
    }]);

    return ContactUs;
}(React.Component);

var HearFrom = function (_React$Component3) {
    _inherits(HearFrom, _React$Component3);

    function HearFrom() {
        _classCallCheck(this, HearFrom);

        return _possibleConstructorReturn(this, (HearFrom.__proto__ || Object.getPrototypeOf(HearFrom)).apply(this, arguments));
    }

    _createClass(HearFrom, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "hear_from_container" },
                React.createElement(
                    "h3",
                    { "class": "text-center" },
                    " We would love to hear from you! "
                ),
                React.createElement(
                    "p",
                    { id: "hear_content" },
                    "We want to know how we can serve you better. Feel free to drop us a note, ask a question about our Chapter, or join us a sponsor. We will get back to you right away."
                ),
                React.createElement(
                    "div",
                    { className: "form-group", id: "hear_from_form" },
                    React.createElement(
                        "label",
                        { "for": "usr" },
                        "Name: "
                    ),
                    React.createElement("input", { type: "text", "class": "form-control", id: "name" }),
                    React.createElement(
                        "label",
                        { "for": "usr" },
                        "Email: "
                    ),
                    React.createElement("input", { type: "text", "class": "form-control", id: "email" }),
                    React.createElement(
                        "label",
                        { "for": "usr" },
                        "Message:"
                    ),
                    React.createElement("textarea", { "class": "form-control", rows: "5", id: "message" })
                ),
                React.createElement(SubmitButton, null)
            );
        }
    }]);

    return HearFrom;
}(React.Component);

var contactContainer = React.createElement(
    "div",
    null,
    React.createElement(
        "h3",
        { "class": "section_header" },
        " Contact Us "
    ),
    React.createElement("br", null),
    React.createElement(ContactUs, null),
    React.createElement("br", null),
    React.createElement(HearFrom, null)
);

ReactDOM.render(contactContainer, document.getElementById('contact_us_container'));