import { useState } from 'react';
import ShowImage from "../parts/ShowImage";
import LabelWithInput from "../parts/LabelWithInput";
import logoImage from "../../assest/Eleox-logo-full-color-reversed.png"

import {handleFetchRequest, returnHTTPHeader, makeRequestOption, getUrlExtension } from '../utility/utility';

import { UsernameContext } from '../utility/UsernameContext';

function LoginPageLayout({updateToken, updateLoginStatus, updateUserName}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Make a Login request
    async function handleClickLoginRequest(event){
        event.preventDefault();

        let login = false;
        let data;

        let bodyContent = {}
        bodyContent.username = username;
        bodyContent.password = password;

        updateUserName(username);

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
            <div className="containerLogin">
                
                <ShowImage classType={"itemLogin"} imgSrc={logoImage}/>
                <form className="itemLogin loginForm" >
                    <UsernameContext.Provider value={username}>
                        <LabelWithInput
                            className="itemLogin" 
                            labelText={"UserName:"}
                            value={username}
                            handleChange={setUsername}
                        />
                    </UsernameContext.Provider>
                
                    <LabelWithInput
                        className="itemLogin" 
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