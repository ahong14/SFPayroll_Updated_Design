"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//react components for welcome section of webpage


//page header
var PageHeader = function (_React$Component) {
    _inherits(PageHeader, _React$Component);

    function PageHeader() {
        _classCallCheck(this, PageHeader);

        return _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).apply(this, arguments));
    }

    _createClass(PageHeader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "text-center", id: "page_header" },
                React.createElement(
                    "div",
                    { className: "centered", id: "header_text" },
                    React.createElement(
                        "h1",
                        null,
                        " San Francisco Bay Area Chapter "
                    ),
                    React.createElement(
                        "h1",
                        null,
                        " American Payroll Association   "
                    )
                ),
                React.createElement("img", { src: "photos/golden_gate_bridge.jpg", id: "golden_gate_background" })
            );
        }
    }]);

    return PageHeader;
}(React.Component);

//div containing image carousel, awards, sponsors


var WelcomeJoin = function (_React$Component2) {
    _inherits(WelcomeJoin, _React$Component2);

    function WelcomeJoin() {
        _classCallCheck(this, WelcomeJoin);

        return _possibleConstructorReturn(this, (WelcomeJoin.__proto__ || Object.getPrototypeOf(WelcomeJoin)).apply(this, arguments));
    }

    _createClass(WelcomeJoin, [{
        key: "render",
        value: function render() {
            return (
                // <!-- div to hold welcome text, award lists, and join button -->
                React.createElement(
                    "div",
                    { id: "welcome_awards_join" },
                    React.createElement(
                        "h3",
                        { className: "text-center", id: "welcome_text" },
                        " Welcome to the San Francisco Bay Area Chapter of the American Payroll Association"
                    ),
                    React.createElement(
                        "div",
                        { className: "carousel slide", id: "myCarousel", "data-ride": "carousel", "data-interval": "5000" },
                        React.createElement(
                            "ol",
                            { className: "carousel-indicators" },
                            React.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "0", className: "active" }),
                            React.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "1" }),
                            React.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "2" }),
                            React.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "3" })
                        ),
                        React.createElement(
                            "div",
                            { className: "carousel-inner" },
                            React.createElement(
                                "div",
                                { className: "carousel-item active" },
                                React.createElement("img", { className: "slide_image img-responsive", src: "photos/about_us_1.JPG", alt: "second image" })
                            ),
                            React.createElement(
                                "div",
                                { className: "carousel-item" },
                                React.createElement("img", { className: "slide_image img-responsive", src: "photos/about_us_2.JPG", alt: "third image" })
                            ),
                            React.createElement(
                                "div",
                                { className: "carousel-item" },
                                React.createElement("img", { className: "slide_image img-responsive", src: "photos/about_us_4.JPG", alt: "fourth image" })
                            ),
                            React.createElement(
                                "div",
                                { className: "carousel-item" },
                                React.createElement("img", { className: "slide_image img-responsive", src: "photos/carousel_image.jpg", alt: "fifth image" })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "awards" },
                        React.createElement("img", { className: "award_image", alt: "2018 first chapter pictorial ", src: "photos/award7.jpg" }),
                        React.createElement("img", { className: "award_image", alt: "first npw photo contest", src: "photos/award8.jpg" }),
                        React.createElement("img", { className: "award_image", alt: "gavel award innovator", src: "photos/award5.jpg" }),
                        React.createElement("img", { className: "award_image", alt: "2018 participant regional/statewide meeting", src: "photos/award6.jpg" }),
                        React.createElement("img", { className: "award_image", alt: "2017 participant", src: "photos/award2.jpg" }),
                        React.createElement("img", { className: "award_image", alt: "2017 chapter pictorial particpant", src: "photos/award4.jpg" }),
                        React.createElement("img", { className: "award_image", alt: "honorable mention chapter of the year", src: "photos/award1.jpg" })
                    ),
                    React.createElement(
                        "div",
                        { id: "sponsors" },
                        React.createElement(
                            "p",
                            { className: "text-center font-weight-bold font-italic" },
                            " Sponsors: "
                        ),
                        React.createElement(
                            "div",
                            { className: "text-center", id: "sponsor_logos" },
                            React.createElement(
                                "a",
                                { href: "https://www.mckesson.com/", target: "_blank" },
                                " ",
                                React.createElement("img", { className: "sponsor_images", id: "mckesson", src: "photos/mckesson_logo.gif", alt: "mckesson_logo" }),
                                " "
                            ),
                            React.createElement(
                                "a",
                                { href: "https://www.clifbar.com/", target: "_blank" },
                                " ",
                                React.createElement("img", { className: "sponsor_images", src: "photos/clif_logo.jpg", alt: "clif-logo" }),
                                " "
                            ),
                            React.createElement(
                                "a",
                                { href: "https://www.iipay.com/", target: "_blank" },
                                " ",
                                React.createElement("img", { className: "sponsor_images", src: "photos/iipay_logo.jpg", alt: "iipay_logo" }),
                                " "
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "join" },
                        React.createElement(
                            "h3",
                            { className: "text-center" },
                            " Not a member yet?  "
                        ),
                        React.createElement(
                            "a",
                            { className: "text-center", id: "join_link", href: "https://www.cvent.com/events/ContactPortal/Login.aspx?cwstub=e9b2ed48-33d2-4d6c-bd0e-f6459cd30d89", target: "_blank" },
                            React.createElement(
                                "button",
                                { type: "button", "class": "btn btn-outlined btn-primary", id: "join_button" },
                                "  Join/Login "
                            )
                        ),
                        React.createElement(
                            "h3",
                            { className: "text-center" },
                            " Click to join! "
                        )
                    ),
                    React.createElement("br", null)
                )
                /* <!-- end of welcome awards join --> */

            );
        }
    }]);

    return WelcomeJoin;
}(React.Component);

//put multiple class components as one


var welcomeContainer = React.createElement(
    "div",
    null,
    React.createElement(PageHeader, null),
    React.createElement(WelcomeJoin, null)
);

//render to DOM
ReactDOM.render(welcomeContainer, document.getElementById('welcome_container'));