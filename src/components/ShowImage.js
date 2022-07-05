import '../App.css'

function ShowImage({imgSrc, classType}){

    return(
        <>
            <img className={classType} src={imgSrc} alt="eleox"></img>
        </>
    );

}

export default ShowImage;