import EmpInfo from './EmpInfo';
import { useState, useEffect } from 'react';
import {handleFetchRequest, returnHTTPHeader, makeRequestOption, getUrlExtension } from './utility/utility';


//function to get data from api 
async function fetchEmpData(token){
    let data;
    let request = makeRequestOption('GET',returnHTTPHeader(token));
    await handleFetchRequest(getUrlExtension("people"), request)
    .then(function(result){
        data = result[0].people
    });
    return data;
}

function DisplayEmpLayout({token}){

    const[empArr, setEmpArr] = useState([]);

    //fetch data from api to populate list of employees
    useEffect(()=>{
        const getData = async ()=>{
            await fetchEmpData(token).then((data)=>{
                setEmpArr(data);
            });
        }
        getData();
    },[]);




    return(
        <div className="listContainer">
            {drawEmployee(empArr,token)}
        </div>
    )
}



function drawEmployee(empArr, token){

    if(empArr.length === 0){
        return(null);
    }

    const empList = empArr.map((emp)=>{
        let empObj = emp;
        return(
            <EmpInfo key={empObj.id} empObj={empObj} token={token}></EmpInfo>
        );
    });

    return empList;
}





export default DisplayEmpLayout;