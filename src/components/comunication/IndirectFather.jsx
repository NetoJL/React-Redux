import React from "react";

import IndirectSon from "./IndirectSon";

export default props => {

    let name = '?'
    let age = 0
    let nerd = false

    function provideInfos(name, age, nerd){
        console.log(name,age,nerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span>{age} </span>
                <span>{nerd ? 'True' : 'False'}</span>
            </div>
            <IndirectSon onClick={provideInfos}></IndirectSon>
        </div>
    )
}