import React, { useState } from "react";

import IndirectSon from "./IndirectSon";

export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function provideInfos(name, age, nerd){
        setName(name)
        setAge(age)
        setNerd(nerd)
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