import { useState } from "react";
import RemoveBtn from "../btn/button";
import AddBtn from "../btn/button";

const Card = ( ) =>{

    const [value, setValue] = useState(0);

    function Add(){
        setValue(value + 1)
    }

    function Remove(){
        setValue(value - 1)
    }
    
    return(
        <div className="card">
            <h5 className="card-header">My Featured Stuff</h5>
            <div className="card-body">
                <h5 className="card-title">Counter</h5>

                <AddBtn                     
                    className="btn btn-success" 
                    onClick={Add}
                >
                    Add
                </AddBtn>

                <RemoveBtn
                    className="btn btn-success" 
                    onClick={Remove}
                >
                    Remove
                </RemoveBtn>

                <p>{value}</p>

            </div>
        </div>
    )
}

export default Card;