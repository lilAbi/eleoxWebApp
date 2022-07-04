

function LabelWithInput({labelText, value, handleChange}){
    
    //update state based on input 
    function updateValue(event){
        event.preventDefault();
        handleChange(event.target.value);
    }

    return(
        <>
            <label> {labelText}</label>
            <br/>
            <input type="text" value={value} onChange={updateValue}></input>
        </>
    );

}

export default LabelWithInput;