import React, { useState } from "react";

export default props =>{

    const [number, setNumber] = useState(0)

    function numberAtt(initialNumber){
        setNumber(initialNumber)
    }

    return(
        <div>
            <h2>Counter</h2>
            <p>Initial number: {number}</p>
        </div>
    )
}