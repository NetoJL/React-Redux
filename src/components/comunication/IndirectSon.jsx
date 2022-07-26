import React from "react";

import IndirectSon from "./IndirectSon";

export default props => {
    return (
        <div>
            <IndirectSon name={'Marcus'} age={20} nerd={true}></IndirectSon>
            <IndirectSon name={'Johnson'} age={17} nerd={false}></IndirectSon>
        </div>
    )
}