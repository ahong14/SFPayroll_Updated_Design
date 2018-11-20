"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//react component for membership section

var MembershipContent = function (_React$Component) {
    _inherits(MembershipContent, _React$Component);

    function MembershipContent() {
        _classCallCheck(this, MembershipContent);

        return _possibleConstructorReturn(this, (MembershipContent.__proto__ || Object.getPrototypeOf(MembershipContent)).apply(this, arguments));
    }

    _createClass(MembershipContent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "text-center", id: "membership_fees" },
                React.createElement(
                    "h2",
                    { "class": "section_header text-center" },
                    " Membership "
                ),
                React.createElement("img", { src: "photos/membership_photo.jpg", id: "membership_photo" }),
                React.createElement(
                    "h3",
                    null,
                    " Individual Membership - $60 "
                ),
                React.createElement("br", null),
                React.createElement(
                    "h3",
                    null,
                    " ",
                    React.createElement(
                        "u",
                        null,
                        " Corporate Membership "
                    ),
                    " "
                ),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "corporate_type" },
                    React.createElement(
                        "div",
                        { id: "silver" },
                        " "
                    ),
                    React.createElement(
                        "h3",
                        null,
                        " Silver (5 Members) - $225 "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "corporate_type" },
                    React.createElement(
                        "div",
                        { id: "gold" },
                        " "
                    ),
                    React.createElement(
                        "h3",
                        null,
                        " Gold (20 Members) - $900 "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "corporate_type" },
                    React.createElement(
                        "div",
                        { id: "platinum" },
                        " "
                    ),
                    React.createElement(
                        "h3",
                        null,
                        " Platinum (20+ members) - $1500 "
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { id: "benefits" },
                    React.createElement(
                        "h3",
                        null,
                        " ",
                        React.createElement(
                            "u",
                            null,
                            " Membership Benefits "
                        ),
                        " "
                    ),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            " Educational workshops and meetings "
                        ),
                        React.createElement(
                            "li",
                            null,
                            " Informative industry speakers"
                        ),
                        React.createElement(
                            "li",
                            null,
                            " Networking and community service opportunities "
                        ),
                        React.createElement(
                            "li",
                            null,
                            " Certified Payroll Professional program study groups"
                        ),
                        React.createElement(
                            "li",
                            null,
                            " Educational scholarship programs "
                        ),
                        React.createElement(
                            "li",
                            null,
                            " Monthly bulletin including government updates"
                        ),
                        React.createElement(
                            "li",
                            null,
                            " Access to website and job board"
                        ),
                        React.createElement(
                            "li",
                            null,
                            " RCH's and credit hours towards recertification "
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "about_section", id: "study_group" },
                    React.createElement(
                        "h2",
                        { className: "text-center " },
                        " Study Group "
                    ),
                    React.createElement("img", { className: "section_image ", id: "study_group_image", src: "photos/study_group.jpg", alt: "study group logo" }),
                    React.createElement(
                        "div",
                        { className: "toggle_info", id: "study_more_info" },
                        React.createElement(
                            "p",
                            { className: "text-center font-italic", onClick: showStudy },
                            "  More Info "
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    null,
                    " Click here to join! "
                ),
                React.createElement(
                    "a",
                    { className: "text-center", id: "join_link", href: "https://www.cvent.com/events/ContactPortal/Login.aspx?cwstub=e9b2ed48-33d2-4d6c-bd0e-f6459cd30d89", target: "_blank" },
                    React.createElement(
                        "button",
                        { type: "button", className: "btn btn-outlined btn-primary", id: "join_button" },
                        "  Join "
                    )
                )
            );
        }
    }]);

    return MembershipContent;
}(React.Component);

ReactDOM.render(React.createElement(MembershipContent, null), document.getElementById('membership_container'));