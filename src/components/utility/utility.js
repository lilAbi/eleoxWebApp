
const url = "https://eleox-interview-api-7n5su.ondigitalocean.app/";


export function getUrlExtension(type, id){
    switch(type){
        case "login":
            return (url+'login');

        case "people":
            return (url+'people');
        
        case "id":
            return (url+'people/'+id);
        default:
            return url;
    }
}


export function makeRequestOption(methodType, headerContent, bodyContent){

    let request = {};
    request.method = methodType;
    request.headers = headerContent;

    if(bodyContent !== undefined){
        request.body = JSON.stringify(bodyContent);
    }

    return request;
}

export function returnHTTPHeader(token){

    let header = {};
    header["Content-Type"] = 'application/json';
    header["Accept"] = 'application/json';
    if(token !== undefined){
        header["Authorization"] = "Bearer " + token;
    }
    return header;
}

export async function handleFetchRequest(incomingUrl, req){

    let login = true;
    let dataResponse = undefined;

    await fetch(incomingUrl, req)
    .then(response=>{

        if(!response.ok){
            login = false;
        }
        return response.json();
    }
    ).then((data)=>{
        if(login){
            dataResponse = data;
        }
    })
    .catch((error)=>{console.log('Error:',error);});

    return [dataResponse, login];
}