


function LabelWithAction({classType, text, handleClick}){

    return(
        <>
          <p className={classType} onClick={handleClick}>{text}</p>  
        </>
    )
}


export default LabelWithAction;