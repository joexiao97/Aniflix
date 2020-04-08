import React from "react";
import SessionForm from "./loginpage/session_form";
import Homepage from "./homepage/homepage";
import { Route } from "react-router-dom";
import login_form_container from "./loginpage/login_form_container";
import signup_form_container from "./loginpage/signup_form_container";
import mainpage_container from "./mainpage/mainpage_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import homepage_container from "./homepage/homepage_container";


const App = () => (
    <div>
        <header>
        {/* <Homepage/>
        <SessionForm /> */}
        </header>
        <AuthRoute exact path ="/" component={mainpage_container}/>
        <AuthRoute exact path="/login" component={login_form_container} />
        <AuthRoute exact path="/signup" component={signup_form_container} />
        <ProtectedRoute exact path="/browse" component={homepage_container} />
    </div>
);

export default App;