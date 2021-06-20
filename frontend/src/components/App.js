import React from 'react';
import Home from '../components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Events from '../components/Events/Events';
import Membership from '../components/Membership/Membership';
import Resources from '../components/Resources/Resources';
import Careers from '../components/Careers/Careers';
import ContactUs from '../components/ContactUs/ContactUs';
import AboutUs from '../components/AboutUs/AboutUs';
import Gallery from '../components/Gallery/Gallery';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import AdminLogin from '../components/AdminLogin/AdminLogin';
import AdminSignup from '../components/AdminSignup/AdminSignup';
import EditEvents from '../components/EditEvents/EditEvents';
import EditCareers from '../components/EditCareers/EditCareers';
import Logout from '../components/Logout/Logout';
import TokenExpiration from '../components/TokenExpiration/TokenExpiration';
import AdminRestPass from '../components/AdminResetPass/AdminResetPass';
import ResetSuccess from '../components/ResetSuccess/ResetSuccess';

const App = () => {
    return (
        <div>
            <ScrollToTop>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Events" component={Events} />
                    <Route exact path="/AboutUs" component={AboutUs} />
                    <Route exact path="/Membership" component={Membership} />
                    <Route exact path="/Resources" component={Resources} />
                    <Route exact path="/Careers" component={Careers} />
                    <Route exact path="/ContactUs" component={ContactUs} />
                    <Route exact path="/Gallery" component={Gallery} />
                    <Route exact path="/Admin" component={AdminLogin} />
                    <Route exact path="/AdminSignup" component={AdminSignup} />
                    <Route exact path="/EditEvents" component={EditEvents} />
                    <Route exact path="/EditCareers" component={EditCareers} />
                    <Route exact path="/Logout" component={Logout} />
                    <Route
                        exact
                        path="/TokenExpiration"
                        component={TokenExpiration}
                    />
                    <Route
                        exact
                        path="/AdminResetPass"
                        component={AdminRestPass}
                    />
                    <Route
                        exact
                        path="/ResetSuccess"
                        component={ResetSuccess}
                    />
                </Switch>
                <Footer />
            </ScrollToTop>
        </div>
    );
};

export default App;
