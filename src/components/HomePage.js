import { useState } from "react";

function HomePage({imageArr}){

    const [currentImage, setCurrentImage] = useState(0);
    const maxlength = imageArr.length;

    const nextImage = ()=>{
        if( (currentImage+1) <= (maxlength-1) ){
            setCurrentImage(currentImage+1);
        }else{
            setCurrentImage(0)
        }
    }

    const prevImage = ()=>{
        if( (currentImage-1) >= 0 ){
            setCurrentImage(currentImage-1);
        }else{
            setCurrentImage(maxlength-1)
        }
    }

    return(
        <>
            <button onClick={prevImage}> {'<'} </button>
            <div className="imageContainer">
                <img className="imgItem" src={imageArr[currentImage]} alt="img not loaded"></img>
            </div>
            <button onClick={nextImage}> {'>'} </button>
        </>
    );
}



export default HomePage