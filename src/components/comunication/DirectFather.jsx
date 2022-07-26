import React from "react";

import DirectSon from "./DirectSon";

export default props => {
    return (
        <div>
            <DirectSon name={'Marcus'} age={20} nerd={true}></DirectSon>
            <DirectSon name={'Johnson'} age={17} nerd={false}></DirectSon>
        </div>
    )
}