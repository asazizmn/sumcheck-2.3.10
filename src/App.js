import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';



// random whole numbers, generated between 0 - 99
// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);

// real answer plus a random number between 0 - 2
// leaving the probability of correctness to 1/3
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

// default number of questions and answers
// const numQuestions = 0;
// const numCorrect = 0;



/**
 * the total score, comprising of ...
 * ... number of correct answers / total questions asked so far
 */
function Score(props) {
  return (
    <p className="text">
      Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  )
}


/**
 * answer button with provided text as label
 */
function AnswerButton(props) {
  return (
    <button>{props.label}</button>
  )
}


/**
 * the equation comprising of ...
 * ... value 1 + value 2 + value 3 = propsed answer
 */
function Equation(props) {
  return (
    <div className="equation">
      <p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
    </div>
  )
}



class App extends Component {

  // state to be handled by react
  // will allow ui to be rendered automatically upon change
  state = {
    numQuestions: 0,
    numCorrect: 0,

    // random whole numbers, generated between 0 - 99
    value1: 0,
    value2: 0,
    value3: 0
  }



  /*
   * generates a random value between 0 and 100, not inclusive of limits 
   */
  generateRandomValue = () => Math.floor(Math.random() * 100);


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="game">
          <h2>Mental Math</h2>

          <Equation
            value1={this.state.value1}
            value2={this.state.value2}
            value3={this.state.value3} />

          <AnswerButton label={"True"} />
          <AnswerButton label={"False"} />

          <Score
            numCorrect={this.state.numCorrect}
            numQuestions={this.state.numQuestions} />

        </div>
      </div>
    );
  }
}

export default App;
