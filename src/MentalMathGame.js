import React from 'react';
import Score from './Score';
import AnswerButton from './AnswerButton';
import Equation from './Equation';


/**
 * Main Component containing the game structure
 * ... title, equation, buttons, score
 */
function MentalMathGame(props) {
    return (
        <div className="game">

            <h2>Mental Math</h2>

            <Equation
                value1={props.value1}
                value2={props.value2}
                value3={props.value3}
                proposedAnswer={props.proposedAnswer} />

            <AnswerButton
                label={"True"}
                checkAnswer={props.isTrue} />

            <AnswerButton
                label={"False"}
                checkAnswer={props.isFalse} />

            <Score
                numCorrect={props.numCorrect}
                numQuestions={props.numQuestions} />

        </div>
    )
}



export default MentalMathGame;