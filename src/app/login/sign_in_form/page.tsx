import React from 'react';
import GoogleBox from "../../ui/login_components/google_sign_in";
import Header from '../../ui/login_components/header';
import OrDiv from '../../ui/login_components/or_div';
import SignLink from '../../ui/login_components/signup_link';
import TextBox from '../../ui/login_components/text_box';
import Button from '../../ui/login_components/button';

export default function Signin () {
    return (
        <div className="flex items-center justify-between w-2/3 bg-white text-black rounded-lg overflow-hidden">
            <div className="flex-col justify-center px-16 py-16 w-1/2">
                <Header title={"Sign in"}></Header>
                <form>
                    <TextBox title={"Username or Email"}></TextBox>
                    <TextBox title={"Password"}></TextBox>
                </form>
                <Button login={"Sign in"}></Button>
                <OrDiv></OrDiv>
                <GoogleBox login={"in"}></GoogleBox>
                <SignLink
                    login={"Sign up"}
                    link={"/login/sign_up_form"}
                    member={"Not a member?"}
                ></SignLink>
            </div>
            <img src="../Sign_in.png" className="w-1/2 h-auto"></img>
        </div>
    );
}