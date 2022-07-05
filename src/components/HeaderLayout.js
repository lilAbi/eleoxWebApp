import DisplayLabel from "./DisplayLabel";
import { useState, useEffect, useContext } from "react";
import { UsernameContext } from "./utility/UsernameContext";



function getTimeStamp(updateTimeFunc) {
    //get current timestamp
    let now = new Date();
    let month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let time = now.getHours() + ':' + now.getMinutes();

    // combine to get date
    let date = [now.getDate(), month[now.getMonth()], now.getFullYear()].join(' ');

    updateTimeFunc([date, time].join(' - '));
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