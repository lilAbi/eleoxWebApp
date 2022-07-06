import EmpInfo from '../parts/EmpInfo';
import { useState, useEffect } from 'react';
import {handleFetchRequest, returnHTTPHeader, makeRequestOption, getUrlExtension } from '../utility/utility';


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

    //force update this component to render after deleting a comment
    async function useForceUpdate(){
        let arrData;
        await fetchEmpData(token).then((data)=>{
            arrData = data;
        });
        setEmpArr(arrData);
    }

    const[empArr, setEmpArr] = useState([]);
    const forceUpdate = useForceUpdate;

    //fetch data from api to populate list of employees
    useEffect(()=>{
        const getData = async ()=>{
            await fetchEmpData(token).then((data)=>{
                setEmpArr(data);
            });
        }
        getData();
    });

    return(
        <div className="listContainer">
            {drawEmployee(empArr, token, forceUpdate)}
        </div>
    )
}



//draw employlee info 
function drawEmployee(empArr, token, forceUpdate){

    if(empArr.length === 0){
        return(null);
    }

    const empList = empArr.map((emp)=>{
        let empObj = emp;
        return(
            <EmpInfo handleDelete={forceUpdate} key={empObj.id} empObj={empObj} token={token}/>
        );
    });

    return empList;
}





export default DisplayEmpLayout;