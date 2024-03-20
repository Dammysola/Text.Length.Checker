import { Component } from "react";
import InputV from "./InputTask";
import NewLength from "./TextLength";




class InputT extends Component{


    state={
        // Text_length: "damiiiiiiii" 
        Text_length: 0
    }

    

    ChangeState(event){
        this.setState({
         Text_length: event.target.value  
        })
    }

    
    

    render(){

        let {Text_length} = this.state

        let length = Text_length.length

       const  Change = ()=>{

            if (length < 10) {
                return "Text too short"         
            }
        
            if (length > 40) {
                return "Text too long"
            }

            else return "Text length is normal"
            
    
        }
    
        

        return(
            <div id="main_div">

                <InputV value ={()=>{ this.ChangeState(event)}}
                Text_length ={this.state.Text_length}></InputV>


                <NewLength Text_length ={length}
                output ={ Change()}></NewLength>


            </div>
        )
    }
}
export default InputT