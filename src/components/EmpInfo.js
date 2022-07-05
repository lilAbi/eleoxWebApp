import { useState, useEffect } from 'react';
import CommentBox from './CommentBox';
import {handleFetchRequest, returnHTTPHeader, makeRequestOption, getUrlExtension } from './utility/utility'

//function to get data from api 
async function fetchEmpData(token, id){
    let data;
    let request = makeRequestOption('GET',returnHTTPHeader(token));
    await handleFetchRequest(getUrlExtension("id",id), request)
    .then(function(result){
        data = result[0].person.comments;
    });

    return data;
};

function EmpInfo({empObj, token}){
    const [showComment, setShowComment] = useState(false);
    const[commentArr, setcommentArr] = useState([]);

    //fetch data from api to populate list of employees
    useEffect(()=>{
        const getData = async ()=>{
            await fetchEmpData(token, empObj.id).then((data)=>{
                setcommentArr(data);
            });
        }
        getData();
    },[]);

    //delete user
    const deleteUser=()=>{
        //alert do you really want to delete
        console.log("delete");
    }

    return(
        <>
         <div className="listItem">
            <img src={empObj.avatar} alt="Avatar"></img>
            <div className="textEmp">
                <p>{empObj.first_name + ' '+ empObj.last_name}</p>
                <p>{empObj.id}</p>
                <p>{empObj.email}</p>
                <p>{empObj.job_title}</p>
            </div>
            <div className="buttonItem">
                <button onClick={()=>{setShowComment(!showComment)}}>Show Comments</button>
                <button onClick={deleteUser}>Delete User</button>
            </div>
         </div>
         {showComment && drawComments(commentArr)}
        </>
    );
}

function drawComments(arr){

    if(arr.length === 0){
        return(null);
    }

    let list = arr.map(comment=>{
        return(<CommentBox key={comment.id} id={comment.id} comment={comment.comment}/>)
    });

    return list;
}



export default EmpInfo;