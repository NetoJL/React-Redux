import React, { cloneElement, Children } from "react";

export default props => {
    return (
        <div>
            {
                Children.map(props.children,child => {
                    return cloneElement(element, props)
                })
            }
        </div>
    )
}