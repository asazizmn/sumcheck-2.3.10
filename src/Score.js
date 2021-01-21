import React from 'react';



/**
 * Total score component containing ...
 * ... number of correct answers / total questions asked so far
 */
function Score(props) {
    return (
        <p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
        </p>
    )
}



export default Score;