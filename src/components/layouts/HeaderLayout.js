import DisplayLabel from '../parts/DisplayLabel'
import { useState, useEffect, useContext } from "react";
import { UsernameContext } from "../utility/UsernameContext";



function getTimeStamp(updateTimeFunc) {
    let date = new Date();
    updateTimeFunc(date.toLocaleString());
}



function HeaderLayout(){
    const [time, setTime] = useState('');
    const username = useContext(UsernameContext);


    //update time to the second, 
    useEffect(()=>{
        const clockTick = setInterval(()=>{
            getTimeStamp(setTime)
        }, 1000);

        getTimeStamp(setTime);

        return ()=> clearInterval(clockTick);
    },[]);

    return(
        <div className="HeaderLayout">
            <DisplayLabel classType={"labelText"} text={username}/>
            <DisplayLabel classType={"labelText"} text={time}/>
        </div>
    );
}


export default HeaderLayout;