var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventHeader = function (_React$Component) {
    _inherits(EventHeader, _React$Component);

    function EventHeader() {
        _classCallCheck(this, EventHeader);

        return _possibleConstructorReturn(this, (EventHeader.__proto__ || Object.getPrototypeOf(EventHeader)).apply(this, arguments));
    }

    _createClass(EventHeader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "event_header" },
                React.createElement(
                    "h2",
                    { className: "section_header" },
                    " Events "
                ),
                React.createElement("img", { id: "events_image", src: "photos/events_photo.jpg", alt: "event image" })
            );
        }
    }]);

    return EventHeader;
}(React.Component);

var TimeDate = function (_React$Component2) {
    _inherits(TimeDate, _React$Component2);

    function TimeDate() {
        _classCallCheck(this, TimeDate);

        return _possibleConstructorReturn(this, (TimeDate.__proto__ || Object.getPrototypeOf(TimeDate)).apply(this, arguments));
    }

    _createClass(TimeDate, [{
        key: "render",

        //set date for events section
        value: function render() {
            return React.createElement("div", { id: "time_date" });
        }
    }]);

    return TimeDate;
}(React.Component);

var Events = function (_React$Component3) {
    _inherits(Events, _React$Component3);

    function Events() {
        _classCallCheck(this, Events);

        return _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).apply(this, arguments));
    }

    _createClass(Events, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "events" },
                React.createElement(
                    "div",
                    { className: "event_info" },
                    React.createElement(
                        "h3",
                        { className: "underline" },
                        " NPW Luncheon -  Wage & Hour Law Update "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Date:"
                        ),
                        " September 7th, 2018   "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Speakers:"
                        ),
                        "  Jeanine DeBacker from Partner at McPharlin Sprinkles & Thomas LLP "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Time:"
                        ),
                        "  11:30 am - 3:00 pm"
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Location:"
                        ),
                        " Salesforce East, 350 Mission Street, San Francisco "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Registration:"
                        ),
                        " ",
                        React.createElement(
                            "span",
                            null,
                            "View the ",
                            React.createElement(
                                "a",
                                { href: "http://www.cvent.com/d/1gq63b/1Q", target: "_blank" },
                                "event invitation"
                            ),
                            "."
                        ),
                        "  "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "event_info" },
                    React.createElement(
                        "h3",
                        { className: "underline" },
                        " Summer 2018 Study Group"
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Dates:"
                        ),
                        " July 11 - September 12, Every Wednesday Night"
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Time:"
                        ),
                        " 6:00 pm - 8:00 pm "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Organizer:"
                        ),
                        " Hannah Huneidi - Silicon Valley Chapter "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Supporter:"
                        ),
                        " Iggy Svoboda -- San Francisco Bay Area Chapter"
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Location:"
                        ),
                        " Adobe, 345 Park Ave, San Jose, near Caltrain Station "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " ",
                        React.createElement(
                            "strong",
                            null,
                            "Registration:"
                        ),
                        " ",
                        React.createElement(
                            "a",
                            { href: "https://svapa.org/meetinginfo.php?id=55", target: "_blank" },
                            " Link "
                        ),
                        " "
                    )
                )
            );
        }
    }]);

    return Events;
}(React.Component);

var eventContainer = React.createElement(
    "div",
    { className: "align_center" },
    React.createElement(EventHeader, null),
    React.createElement(TimeDate, null),
    React.createElement(Events, null)
);

ReactDOM.render(eventContainer, document.getElementById('events_container'));