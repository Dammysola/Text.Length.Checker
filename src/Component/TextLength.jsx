import './Input.css'

function NewLength (Props){

    return(
        <div>
            <h4> Your Text Length is {Props.Text_length}</h4>
            <h5>{Props.output}</h5>
        </div>
    )
}
export default NewLength