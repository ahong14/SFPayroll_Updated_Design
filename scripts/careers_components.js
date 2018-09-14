"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//react component for careers section


var OpenPositions = function (_React$Component) {
    _inherits(OpenPositions, _React$Component);

    function OpenPositions() {
        _classCallCheck(this, OpenPositions);

        return _possibleConstructorReturn(this, (OpenPositions.__proto__ || Object.getPrototypeOf(OpenPositions)).apply(this, arguments));
    }

    _createClass(OpenPositions, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "learning_resources underline", id: "open_positions" },
                React.createElement(
                    "h3",
                    null,
                    " Open Positions "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/Payroll__Benefits___HRIS_Manager_0808.pdf", target: "_blank" },
                        " Payroll, Benefits & HRIS Manager "
                    ),
                    " San Rafael, EAH Housing, 8/08/2018 "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "https://segment.com/jobs/1280505-Global-Payroll-Lead", target: "_blank" },
                        " Senior Global Payroll "
                    ),
                    " San Francisco, Meltwater, 07/19/2018     "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/DeWinter_Associates_-_Global_Payroll_Lead_-_San_Francisco.pdf", target: "_blank" },
                        " Global Payroll Lead "
                    ),
                    " San Francisco, Dewinter Associates, 06/17/2018 "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/Payroll_Specialist_061518.pdf", target: "_blank" },
                        " Payroll Specialist"
                    ),
                    " Alameda, Penumbra, 06/15/2018  "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/AppDirect_-_Global_Payroll_Manager_052318.pdf", target: "_blank" },
                        " Global Payroll Manager"
                    ),
                    " San Francisco, AppDirect, 05/23/2018 "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/Payroll_Administrator_052218.pdf", target: "_blank" },
                        " Payroll Administrator"
                    ),
                    " San Francisco -- The Arc San Francisco -- 05/22/2018   "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "https://themomproject.com/projects/payroll-executive-4598d0d85a", target: "_blank" },
                        " Payroll Executive"
                    ),
                    " San Francisco -- the Mom Project -- 05/09/2018   "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/Payroll_Manager_in_Alamo.pdf", target: "_blank" },
                        " Payroll Manager"
                    ),
                    " Alamo -- Robert Half International -- 05/09/2018   "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/Payroll_Manager_050918.pdf", target: "_blank" },
                        " Payroll Manager"
                    ),
                    " San Francisco -- CFStaffing -- 05/09/2018   "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/Payroll_Supervisor_050718.pdf", target: "_blank" },
                        " Payroll Supervisor"
                    ),
                    " Petaluma -- Amy's Kitchen -- 05/07/2018   "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/Assistant_Payroll_Manager_021918.pdf", target: "_blank" },
                        " Assistant Payroll Manager"
                    ),
                    " San Francisco -- California College of the Arts -- 05/03/2018  "
                ),
                React.createElement(
                    "li",
                    null,
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://www.sfpayroll.org/JobPosting/2018/UCSF_Health_-_HBS_Payroll_Supervisor.pdf", target: "_blank" },
                        " HBS Payroll Supervisor (15310)"
                    ),
                    " San Francisco -- UCSF Health -- 04/02/2018  "
                )
            );
        }
    }]);

    return OpenPositions;
}(React.Component);

var CareerHelpSites = function (_React$Component2) {
    _inherits(CareerHelpSites, _React$Component2);

    function CareerHelpSites() {
        _classCallCheck(this, CareerHelpSites);

        return _possibleConstructorReturn(this, (CareerHelpSites.__proto__ || Object.getPrototypeOf(CareerHelpSites)).apply(this, arguments));
    }

    _createClass(CareerHelpSites, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "career_help_sites" },
                React.createElement(
                    "h3",
                    { className: "text-center underline_header" },
                    " Career Help Sites "
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://www.americanpayroll.org/membership/career-advancement", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " APA- Career Center  "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " APA- Job Board "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "https://gecd.mit.edu/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Resume Tips  "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Interview Tips  "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.livecareer.com/career/advice/jobs/career-assessment", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Employment Assessments "
                        ),
                        " "
                    )
                )
            );
        }
    }]);

    return CareerHelpSites;
}(React.Component);

var JobSearchSites = function (_React$Component3) {
    _inherits(JobSearchSites, _React$Component3);

    function JobSearchSites() {
        _classCallCheck(this, JobSearchSites);

        return _possibleConstructorReturn(this, (JobSearchSites.__proto__ || Object.getPrototypeOf(JobSearchSites)).apply(this, arguments));
    }

    _createClass(JobSearchSites, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "job_search_sites" },
                React.createElement(
                    "h3",
                    { className: "text-center underline_header" },
                    " Other Job Search Sites "
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://sanfrancisco.jobing.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Jobing.com "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://hiring.monster.com/?wt.mc_n=skr_www_intercept", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Monster.com"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.careerbuilder.com/?cbrecursioncnt=1&cbsid=9dcb8ee8ba45473bb15baa8d13e881f6-229153885-VE-4", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Career Builder"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://www.international-job-search.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " International Job Search"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://www.juju.com/about/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " JuJu.com "
                        )
                    )
                )
            );
        }
    }]);

    return JobSearchSites;
}(React.Component);

var OtherCareerSites = function (_React$Component4) {
    _inherits(OtherCareerSites, _React$Component4);

    function OtherCareerSites() {
        _classCallCheck(this, OtherCareerSites);

        return _possibleConstructorReturn(this, (OtherCareerSites.__proto__ || Object.getPrototypeOf(OtherCareerSites)).apply(this, arguments));
    }

    _createClass(OtherCareerSites, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "job_search_sites" },
                React.createElement(
                    "h3",
                    { className: "text-center underline_header" },
                    " Other Career Help Sites "
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://www.careeronestop.org/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Career One Stop "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.mynextmove.org/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " My Next Move "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://discpersonalitytesting.com", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " DISC Assesment "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://www.grocery-store-applications.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Grocery-store-applications.com "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.learnhowtobecome.org/", target: "_blank" },
                        " ",
                        React.createElement(
                            "li",
                            null,
                            " Learn How To Become "
                        )
                    )
                )
            );
        }
    }]);

    return OtherCareerSites;
}(React.Component);

var FormGroup = function (_React$Component5) {
    _inherits(FormGroup, _React$Component5);

    function FormGroup() {
        _classCallCheck(this, FormGroup);

        return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
    }

    _createClass(FormGroup, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "form-group", id: "job_form_input" },
                React.createElement(
                    "form",
                    { className: "gform", method: "POST",
                        action: "https://script.google.com/macros/s/AKfycbwIDCwkXJ8tTWdub-SUQKxpS4LccZwcp9iSi9DR/exec" },
                    React.createElement(
                        "label",
                        { "for": "title" },
                        "Title of Position:"
                    ),
                    React.createElement("input", { type: "text", "class": "form-control", id: "position" }),
                    React.createElement(
                        "label",
                        { "for": "city" },
                        "City: "
                    ),
                    React.createElement("input", { type: "text", "class": "form-control", id: "city" }),
                    React.createElement(
                        "label",
                        { "for": "state" },
                        "State: "
                    ),
                    React.createElement("input", { type: "text", className: "form-control", id: "state" }),
                    React.createElement(
                        "label",
                        { "for": "position" },
                        "Select Position:"
                    ),
                    React.createElement(
                        "select",
                        { className: "form-control", id: "payroll_position" },
                        React.createElement(
                            "option",
                            null,
                            "Payroll Position- Full Time "
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Payroll Position- Part Time"
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Payroll Position- Temp"
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Non Payroll Position - Full Time "
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Non Payroll Position - Part Time "
                        ),
                        React.createElement(
                            "option",
                            null,
                            "Non Payroll Position - Temp "
                        )
                    ),
                    React.createElement(
                        "label",
                        { "for": "description" },
                        "Job Description:"
                    ),
                    React.createElement("textarea", { className: "form-control", rows: "5", id: "job_description" })
                )
            );
        }
    }]);

    return FormGroup;
}(React.Component);

var SubmitButton = function (_React$Component6) {
    _inherits(SubmitButton, _React$Component6);

    function SubmitButton() {
        _classCallCheck(this, SubmitButton);

        return _possibleConstructorReturn(this, (SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).apply(this, arguments));
    }

    _createClass(SubmitButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "submit_container" },
                React.createElement(
                    "button",
                    { type: "button", "class": "btn btn-outlined btn-primary", id: "submit_button", onClick: sendJobPost },
                    "  Submit "
                )
            );
        }
    }]);

    return SubmitButton;
}(React.Component);

var careersContainer = React.createElement(
    "div",
    null,
    React.createElement(
        "div",
        { id: "career_header" },
        React.createElement(
            "h2",
            { className: "section_header text-center" },
            " Careers "
        ),
        React.createElement("img", { src: "photos/gpmi_background.jpg", id: "career_image" })
    ),
    React.createElement("br", null),
    React.createElement(OpenPositions, null),
    React.createElement("br", null),
    React.createElement(
        "div",
        { id: "help_sites" },
        React.createElement(CareerHelpSites, null),
        React.createElement(JobSearchSites, null),
        React.createElement(OtherCareerSites, null)
    ),
    React.createElement(
        "div",
        { className: "text-center", id: "accountants_international" },
        React.createElement(
            "blockquote",
            null,
            " Accountants International, provides great service to all Finance professionals from Controllers to Payroll Clerks. They even have sister branch that can assist with Human Resources and HRIS Management positions. Visit them at ",
            React.createElement(
                "a",
                { href: "", target: "_blank" },
                " http://www.accountantsinc.com  "
            ),
            "to learn about the Payroll positions available near you! "
        )
    ),
    React.createElement(
        "div",
        { className: "text-center", id: "job_form" },
        React.createElement(
            "h3",
            null,
            " For job posting, please fill out the following form: "
        )
    ),
    React.createElement(FormGroup, null),
    React.createElement("br", null),
    React.createElement(SubmitButton, null)
);

ReactDOM.render(careersContainer, document.getElementById('careers_container'));