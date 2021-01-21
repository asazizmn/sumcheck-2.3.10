import React from 'react';



/**
 * Equation component containing ...
 * ... value 1 + value 2 + value 3 = propsed answer
 */
function Equation(props) {
    return (
        <div className="equation">
            <p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
        </div>
    )
}



export default Equation;