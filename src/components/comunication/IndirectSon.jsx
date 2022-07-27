import React from "react";

export default props => {
    const min = 40
    const max = 70
    const ageGenerator = () => parseInt(Math.random() * (max-min) + min)
    const nerdGenerator = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button style={{width: 300, height: 40 , borderRadius: 10, backgroundColor: '#000', color: 'white'}} onClick={
                function (e) {
                    props.onClick('José', ageGenerator(), nerdGenerator())
                }
            }>Fornecer informações</button>
        </div>
    )
}