import React from "react";

export default props => {
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e) {
                    props.onClick('José', 49, false)
                }
            }>Fornecer informações</button>
        </div>
    )
}