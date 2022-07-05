import { useState } from "react";
import LabelWithInput from "../parts/LabelWithInput";
import {handleFetchRequest, returnHTTPHeader, makeRequestOption, getUrlExtension } from '../utility/utility';


function AddEmpPage({token}){
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");


    async function addEmployeeToDatabase(){
        let bodyContent = {}
        bodyContent.first_name = firstname;
        bodyContent.last_name = lastname;
        bodyContent.email = email;
        bodyContent.job_title = job;
        bodyContent.avatar = avatar;

        let request = makeRequestOption('POST',returnHTTPHeader(token), bodyContent);
        await handleFetchRequest(getUrlExtension("people"), request).then(response=>{

            if(response[1] === false){
                alert("Form input is incorrect");
            }
            setLastName("");
            setFirstName("");
            setAvatar("");
            setEmail("");
            setJob("");

        });
    }



    return(
        <div className="formItem">
            <LabelWithInput 
                        labelText={"First Name:"}
                        value={firstname}
                        handleChange={setFirstName}/>
            <LabelWithInput 
                        labelText={"Last Name:"}
                        value={lastname}
                        handleChange={setLastName}/>
            <LabelWithInput 
                        labelText={"Avatar:"}
                        value={avatar}
                        handleChange={setAvatar}/>
            <LabelWithInput 
                        labelText={"Email:"}
                        value={email}
                        handleChange={setEmail}/>
            <LabelWithInput 
                        labelText={"Job Title:"}
                        value={job}
                        handleChange={setJob}/>

            <input className="buttonForm" type="submit" value="Submit" onClick={addEmployeeToDatabase} />

        </div>
    );
}


export default AddEmpPage;