import React from 'react';



/**
 * Button component that is provided text as label
 */
function AnswerButton(props) {
    return (
        <button onClick={() => props.checkAnswer()}>{props.label}</button>
    )
}



export default AnswerButton;