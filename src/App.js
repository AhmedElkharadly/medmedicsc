import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import ShopPage from './pages/shopPage/shop-page'
import HomePage from "./pages/homepage-comp";
import Nav from "./component/Nav/nav";
import signInPage from "./pages/sign-in-up-Page/singpage";

function App() {
    return ( 
    <div>
        <Nav/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/sign' component={signInPage} />
        </Switch>
    </div>
    );
}

export default App;
