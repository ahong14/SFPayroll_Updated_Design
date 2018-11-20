"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//react component for resources section


var StudyGroupResources = function (_React$Component) {
    _inherits(StudyGroupResources, _React$Component);

    function StudyGroupResources() {
        _classCallCheck(this, StudyGroupResources);

        return _possibleConstructorReturn(this, (StudyGroupResources.__proto__ || Object.getPrototypeOf(StudyGroupResources)).apply(this, arguments));
    }

    _createClass(StudyGroupResources, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "study_group_resources" },
                React.createElement(
                    "div",
                    { id: "cpp" },
                    React.createElement("img", { id: "cpp_image", src: "photos/cpp.jpg", alt: "cpp logo" }),
                    React.createElement(
                        "p",
                        { className: "font-weight-bold" },
                        " Certified Payroll Professional (CPP) "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " The CPP is a certification credential for those with some experience in payroll"
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.americanpayroll.org/education-certification/certification/certified-payroll-professional-(cpp)", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Overview information "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Content outline "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "" },
                        React.createElement(
                            "p",
                            null,
                            " Handbook "
                        ),
                        " "
                    )
                ),
                React.createElement(
                    "div",
                    { id: "fpc" },
                    React.createElement("img", { id: "fpc_image", src: "photos/fpc.jpg", alt: "fpc logo" }),
                    React.createElement(
                        "p",
                        { className: "font-weight-bold" },
                        " Fundamental Payroll Certification (FPC)"
                    ),
                    React.createElement(
                        "p",
                        null,
                        " The FPC is a certification credential for payroll beginners and service and support for professionals."
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.americanpayroll.org/education-certification/certification/fundamental-payroll-certification-(fpc)", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Overview information "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Content outline "
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "" },
                        React.createElement(
                            "p",
                            null,
                            " Handbook "
                        ),
                        " "
                    )
                )
            );
        }
    }]);

    return StudyGroupResources;
}(React.Component);

var LearningResources = function (_React$Component2) {
    _inherits(LearningResources, _React$Component2);

    function LearningResources() {
        _classCallCheck(this, LearningResources);

        return _possibleConstructorReturn(this, (LearningResources.__proto__ || Object.getPrototypeOf(LearningResources)).apply(this, arguments));
    }

    _createClass(LearningResources, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "learning_resources_container" },
                React.createElement(
                    "div",
                    { className: "learning_resources" },
                    React.createElement(
                        "h3",
                        { className: "text-center underline" },
                        " Learning Resources "
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.americanpayroll.org/news-resources/apa-news?", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Webinar from American Payroll Association"
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.americanpayroll.org/education-certification/education/learning-paths", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " American Payroll Association"
                        ),
                        " "
                    ),
                    React.createElement(
                        "a",
                        { href: "http://www.gpminstitute.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Global Payroll Management Institute "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://californiapayroll.org/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Calfornia Payroll Conference "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://www.nationalpayrollweek.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " National Payroll Week "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.edd.ca.gov/Payroll_Tax_seminars/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Payroll Tax Seminars - EDD "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Study Group "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.americanpayroll.org/news-resources/resource-library?resourcelibary=51ddd56c-da58-4b96-9c28-3f3099421cb3", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " APA News and Resources"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "learning_resources", id: "government_agencies" },
                    React.createElement(
                        "h3",
                        { className: "text-center underline" },
                        " Government Agencies "
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.irs.gov/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Internal Revenue Service "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.ssa.gov/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Social Security Administration "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.frbservices.org/resources/routing-number-directory/index.html", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Federal Reserve E-Payments Routing Directory"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.dol.gov/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Department of Labor- Wage & Hour Division "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://fiscal.treasury.gov/fsservices/gov/debtColl/rsrcsTools/debt_InformationForEmployers.htm", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Administrative Wage Garnishment "
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "learning_resources", id: "california_agencies" },
                    React.createElement(
                        "h3",
                        { className: "text-center underline" },
                        " California/San Francisco Agencies "
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.sco.ca.gov/upd_rptg.html", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " CA Unclaimed Property Division"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.edd.ca.gov/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " California Employed Development Department"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://www.childsup.ca.gov/default.aspx", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " California Department of Child Support "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.dir.ca.gov/DLSE/dlse.html", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " California Division of Labor Standards Enforcement"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.dir.ca.gov/workers'_comp.html", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " California Department of Industrial Relationship"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.calchamber.com/Pages/Default.aspx", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " California Chamber of Commerce"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.ftb.ca.gov/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Franchise Tax Board"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://www.boe.ca.gov/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " California State Board of Equalization"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "http://sftreasurer.org/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " SF Office of Treasuer and Tax Collector"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://sfgov.org/olse/paid-sick-leave-ordinance-pslo", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " SF Paid Sick Leave Ordinance "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://sfgov.org/olse/health-care-security-ordinance-hcso", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " SF Health Care Security Ordinance "
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "learning_resources", id: "payroll_links" },
                    React.createElement(
                        "h3",
                        { className: "text-center underline" },
                        " Payroll Links "
                    ),
                    React.createElement(
                        "a",
                        { href: "https://payrolltalk.symmetry.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Payroll Talk "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.paycheckcity.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " PayCheck City - PayCheck Calculator"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://commuterbenefits.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Commuter Checks "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.xe.com/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Currency Convertor"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.donotcall.gov/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " National No Call Registry "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.worldatwork.org/", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " World at Work "
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "https://www.shrm.org/pages/default.aspx", target: "_blank" },
                        " ",
                        React.createElement(
                            "p",
                            null,
                            " Society for HR Management"
                        )
                    )
                )
            );
        }
    }]);

    return LearningResources;
}(React.Component);

var ResourcesContainer = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        { className: "section_header text-center" },
        " Resources "
    ),
    React.createElement("br", null),
    React.createElement(StudyGroupResources, null),
    React.createElement(LearningResources, null)
);

ReactDOM.render(ResourcesContainer, document.getElementById('resources_container'));