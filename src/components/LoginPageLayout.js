import { useState } from 'react';
import ShowImage from "./ShowImage";
import LabelWithInput from "./LabelWithInput";
import "../App.css"
import logoImage from "../assest/Eleox-logo-full-color-reversed.png"

import {handleFetchRequest, returnHTTPHeader, makeRequestOption, getUrlExtension } from './utility/utility';

function LoginPageLayout({updateToken, updateLoginStatus}){

    const [username, setUsername] = useState("int@eleox.com");
    const [password, setPassword] = useState("eleox");

    //Make a Login request
    async function handleClickLoginRequest(event){
        event.preventDefault();

        let login = false;
        let data;

        let bodyContent = {}
        bodyContent.username = username;
        bodyContent.password = password;

        let request = makeRequestOption('POST',returnHTTPHeader(), bodyContent);

        await handleFetchRequest(getUrlExtension("login"), request)
        .then(function(result){
            [data, login] = result;
        });

        if(!login){
            alert("Login Failed");
        } else {
            updateToken(data.access_token);
            updateLoginStatus(login);
        }
    }


    return(
        <div className="loginPage">
            <div className="container">
                
                <ShowImage className="item" imgSrc={logoImage}/>
                <form className="item loginForm" >
                    <LabelWithInput
                        className="item" 
                        labelText={"UserName:"}
                        value={username}
                        handleChange={setUsername}
                    />
                    <LabelWithInput
                        className="item" 
                        labelText={"Password:"}
                        value={password}
                        handleChange={setPassword}
                    />

                    <input type="submit" value="Submit" onClick={handleClickLoginRequest} />

                </form>
            </div>
        </div>
    );
}


export default LoginPageLayout;