var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutHeader = function (_React$Component) {
    _inherits(AboutHeader, _React$Component);

    function AboutHeader() {
        _classCallCheck(this, AboutHeader);

        return _possibleConstructorReturn(this, (AboutHeader.__proto__ || Object.getPrototypeOf(AboutHeader)).apply(this, arguments));
    }

    _createClass(AboutHeader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "about_us_header" },
                React.createElement(
                    "h2",
                    { className: "section_header font-italic" },
                    " About Us "
                )
            );
        }
    }]);

    return AboutHeader;
}(React.Component);

var AboutUsFirst = function (_React$Component2) {
    _inherits(AboutUsFirst, _React$Component2);

    function AboutUsFirst() {
        _classCallCheck(this, AboutUsFirst);

        return _possibleConstructorReturn(this, (AboutUsFirst.__proto__ || Object.getPrototypeOf(AboutUsFirst)).apply(this, arguments));
    }

    _createClass(AboutUsFirst, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "flex_column" },
                React.createElement("img", { className: "align_center", id: "about_us_1", src: "photos/about_us_3.JPG", alt: "chapter photo" }),
                React.createElement("br", null),
                React.createElement(
                    "h2",
                    { className: "text-center font-italic " },
                    " San Francisco Bay Area Chapter "
                ),
                React.createElement(
                    "div",
                    { className: "blockquote_caption align_center" },
                    React.createElement(
                        "blockquote",
                        { "class": "font-weight-bold ", id: "about_us_part1_blockquote" },
                        "The SFBAC has been providing educational and networking opportunities for the local Payroll Professional since 1983. Every day, we strive to support the Payroll Professional with member benefits including educational workshops, meetings, payroll legislative update, and scholarship programs. We genuinely care about our members and go above and beyond to provide the best support, as well as to support the goals of the National American Payroll Organization. The San Francisco Bay Area Chapter of the APA supports CurrenC SF in partnership with the City and County of San Francisco\u2019s Office of Financial Empowerment. For more information go to:",
                        React.createElement(
                            "a",
                            { href: "http://currencsf.org " },
                            "http://currencsf.org "
                        )
                    )
                )
            );
        }
    }]);

    return AboutUsFirst;
}(React.Component);

var APASection = function (_React$Component3) {
    _inherits(APASection, _React$Component3);

    function APASection() {
        _classCallCheck(this, APASection);

        return _possibleConstructorReturn(this, (APASection.__proto__ || Object.getPrototypeOf(APASection)).apply(this, arguments));
    }

    _createClass(APASection, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "about_section align_center", id: "apa_section" },
                React.createElement(
                    "h2",
                    { className: "text-center " },
                    " American Payroll Association "
                ),
                React.createElement("img", { className: "section_image ", id: "apa_logo", src: "photos/american_payroll_association_logo.png", alt: "apa logo" }),
                React.createElement(
                    "div",
                    { className: "toggle_info", id: "apa_more_info" },
                    React.createElement(
                        "p",
                        { className: "text-center font-italic", onClick: showAPA },
                        "  ",
                        React.createElement("i", { className: "fa fa-caret-down" }),
                        " More Info "
                    )
                )
            );
        }
    }]);

    return APASection;
}(React.Component);

var GPMISection = function (_React$Component4) {
    _inherits(GPMISection, _React$Component4);

    function GPMISection() {
        _classCallCheck(this, GPMISection);

        return _possibleConstructorReturn(this, (GPMISection.__proto__ || Object.getPrototypeOf(GPMISection)).apply(this, arguments));
    }

    _createClass(GPMISection, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "about_section align_center", id: "gpmi_section" },
                React.createElement(
                    "h2",
                    { className: "text-center" },
                    " Global Payroll Management Institute "
                ),
                React.createElement("img", { className: "section_image", id: "gpmi_logo", src: "photos/GPMILogo.png", alt: "gpmi logo" }),
                React.createElement(
                    "div",
                    { className: "toggle_info", id: "gpmi_more_info" },
                    React.createElement(
                        "p",
                        { className: "text-center font-italic", onClick: showGPMI },
                        " ",
                        React.createElement("i", { className: "fa fa-caret-down" }),
                        " More Info "
                    )
                )
            );
        }
    }]);

    return GPMISection;
}(React.Component);

var HistorySection = function (_React$Component5) {
    _inherits(HistorySection, _React$Component5);

    function HistorySection() {
        _classCallCheck(this, HistorySection);

        return _possibleConstructorReturn(this, (HistorySection.__proto__ || Object.getPrototypeOf(HistorySection)).apply(this, arguments));
    }

    _createClass(HistorySection, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "about_section align_center", id: "history_section" },
                React.createElement(
                    "h2",
                    { className: "text-center " },
                    " San Francisco Bay Area Chapter History "
                ),
                React.createElement("img", { className: "section_image", id: "history_logo", src: "photos/sf_payroll_logo.gif", alt: "sf logo" }),
                React.createElement(
                    "div",
                    { className: "toggle_info", id: "history_more_info" },
                    React.createElement(
                        "p",
                        { className: "text-center font-italic", onClick: showHistory },
                        " ",
                        React.createElement("i", { className: "fa fa-caret-down" }),
                        " More Info "
                    )
                )
            );
        }
    }]);

    return HistorySection;
}(React.Component);

var ByLaws = function (_React$Component6) {
    _inherits(ByLaws, _React$Component6);

    function ByLaws() {
        _classCallCheck(this, ByLaws);

        return _possibleConstructorReturn(this, (ByLaws.__proto__ || Object.getPrototypeOf(ByLaws)).apply(this, arguments));
    }

    _createClass(ByLaws, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "about_section align_center", id: "bylaws_section" },
                React.createElement(
                    "h2",
                    { className: "text-center " },
                    " San Francisco Bay Area Chapter By Laws "
                ),
                React.createElement("img", { className: "section_image", id: "bylaws_logo", src: "photos/bylaws.jpg", alt: "by laws logo" }),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        { className: "text-center font-italic" },
                        " Click here for details: ",
                        React.createElement(
                            "a",
                            { href: "http://www.sfpayroll.org/boardfiles/2014_Bylaws_Constitution.pdf", target: "_blank" },
                            " By Laws "
                        ),
                        " "
                    )
                )
            );
        }
    }]);

    return ByLaws;
}(React.Component);

var AboutSections = function (_React$Component7) {
    _inherits(AboutSections, _React$Component7);

    function AboutSections() {
        _classCallCheck(this, AboutSections);

        return _possibleConstructorReturn(this, (AboutSections.__proto__ || Object.getPrototypeOf(AboutSections)).apply(this, arguments));
    }

    _createClass(AboutSections, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(APASection, null),
                React.createElement(GPMISection, null),
                React.createElement(HistorySection, null),
                React.createElement(ByLaws, null)
            );
        }
    }]);

    return AboutSections;
}(React.Component);

var President = function (_React$Component8) {
    _inherits(President, _React$Component8);

    function President() {
        _classCallCheck(this, President);

        return _possibleConstructorReturn(this, (President.__proto__ || Object.getPrototypeOf(President)).apply(this, arguments));
    }

    _createClass(President, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "officer_info text-center", id: "president" },
                React.createElement("img", { className: "officer_image", src: "photos/owhen_image.jpg" }),
                React.createElement(
                    "p",
                    null,
                    " Owhen Astorga "
                ),
                React.createElement(
                    "p",
                    null,
                    " President "
                ),
                React.createElement(
                    "p",
                    null,
                    " Salesforce.com "
                ),
                React.createElement(
                    "p",
                    null,
                    " Phone: 415-536-4524 "
                ),
                React.createElement(
                    "p",
                    null,
                    " Email: oastorga@salesforce.com "
                )
            );
        }
    }]);

    return President;
}(React.Component);

var OfficerMember = function (_React$Component9) {
    _inherits(OfficerMember, _React$Component9);

    function OfficerMember() {
        _classCallCheck(this, OfficerMember);

        return _possibleConstructorReturn(this, (OfficerMember.__proto__ || Object.getPrototypeOf(OfficerMember)).apply(this, arguments));
    }

    _createClass(OfficerMember, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "officer_info text-center" },
                React.createElement("img", { className: "officer_image", src: this.props.imagesrc }),
                React.createElement(
                    "p",
                    null,
                    " ",
                    this.props.name,
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " ",
                    this.props.position,
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " ",
                    this.props.company,
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " Phone: ",
                    this.props.phone,
                    " "
                ),
                React.createElement(
                    "p",
                    null,
                    " Email: ",
                    this.props.email,
                    " "
                )
            );
        }
    }]);

    return OfficerMember;
}(React.Component);

var Officers = function (_React$Component10) {
    _inherits(Officers, _React$Component10);

    function Officers() {
        _classCallCheck(this, Officers);

        return _possibleConstructorReturn(this, (Officers.__proto__ || Object.getPrototypeOf(Officers)).apply(this, arguments));
    }

    _createClass(Officers, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "officers_container" },
                React.createElement(
                    "h2",
                    { className: "text-center" },
                    " Officers "
                ),
                React.createElement(President, null),
                React.createElement(
                    "div",
                    { id: "officers_content" },
                    React.createElement(OfficerMember, { imagesrc: "photos/erin_image.jpg", name: "Erin Svobada, CPP", position: "First Vice President", company: "Clif Bar",
                        phone: "510-597-3923", email: "isvoboda@clifbar.com" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/darcy_image.jpg", name: "Darcy French, CPP", position: "Second Vice President", company: "Gensler",
                        phone: "", email: "darcy_frecnh@gensler.com" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/rowerna_image.jpg", name: "Rowerna Lau, CPP", position: "Secretary", company: "McKesson",
                        phone: "415-983-8905", email: "rowerna.lau@mckesson.com" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/becky_image.jpg", name: "Becky Ng, CPP", position: "Treasuer", company: "",
                        phone: "415-476-2327", email: "becky.ng@ucsf.edu" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/bill_image.JPG", name: "Bill Schmalle, CPP", position: "Government Liaison Officer", company: "McKesson",
                        phone: "510-597-3923", email: "William.schmalle@mckesson.com" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/christine_image.jpg", name: "Christine Corral, CPP", position: "Membership Chairperson", company: "Bio-Rad Laboratories",
                        phone: "", email: "Chris_Corral@bio-rad.com" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/lois_image.jpg", name: "Lois Fried, CPP", position: "Historian", company: "Consultant",
                        phone: "", email: "Loisfried35@gmail.com" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/kim_image.jpg", name: "Kim Norton, CPP", position: "Bulletin Chairperson", company: "Bio-Rad Laboratories",
                        phone: "510-741-6273", email: "kimberly_norton@bio-rad.com" }),
                    React.createElement(OfficerMember, { imagesrc: "photos/angela_image.jpg", name: "Angela Martin, CPP", position: "Community Service Chairperson", company: "iiPay",
                        phone: "408-712-9873", email: "angela.martin@iipay.com" })
                )
            );
        }
    }]);

    return Officers;
}(React.Component);

var AboutContainer = React.createElement(
    "div",
    null,
    React.createElement(AboutHeader, null),
    React.createElement(AboutUsFirst, null),
    React.createElement(AboutSections, null),
    React.createElement(Officers, null)
);

ReactDOM.render(AboutContainer, document.getElementById('about_us_container'));