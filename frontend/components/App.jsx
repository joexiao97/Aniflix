import React from "react";
import SessionForm from "./loginpage/session_form";
import Homepage from "./homepage/homepage";
import { Route } from "react-router-dom";
import login_form_container from "./loginpage/login_form_container";
import signup_form_container from "./loginpage/signup_form_container";
import mainpage_container from "./mainpage/mainpage_container";
import { AuthRoute } from "../util/route_util";


const App = () => (
    <div>
        <header>
        {/* <Homepage/>
        <SessionForm /> */}
        </header>
        <Route exact path ="/" component={mainpage_container}/>
        <AuthRoute exact path="/loginUser" component={login_form_container} />
        <AuthRoute exact path="/signupUser" component={signup_form_container} />
    </div>
);

export default App;