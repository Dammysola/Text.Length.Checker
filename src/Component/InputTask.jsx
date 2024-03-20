




function InputV (Props){

    return(
        <div>
            <p id="enter_text">Enter Your Text</p>
            <input onChange={Props.value} type="text" />
            <p id="Text">{Props.Text_length}</p>
        </div>
    )
}

export default InputV