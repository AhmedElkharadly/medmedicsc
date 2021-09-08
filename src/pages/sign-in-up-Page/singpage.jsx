import React from "react";
import './sign-in-up.css'
import SignIn from "../../component/signinComp/signin";
import SignUp from '../../component/signup/signup';

const signInPage = () => (
    <div className='Signin'>
            <SignIn/>
            <SignUp/>
    </div>
    )

export default signInPage;
