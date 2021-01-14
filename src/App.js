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
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

// default number of questions and answers
// const numQuestions = 0;
// const numCorrect = 0;



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


/**
 * Button component that is provided text as label
 */
function AnswerButton(props) {
  return (
    <button onClick={() => props.checkAnswer()}>{props.label}</button>
  )
}


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
        checkAnswer={props.isTrueCorrect} />
      {/* // checkTrue={() => props.addPoint()} /> */}
      {/* // checkTrue={() => console.log('Clicked True')} /> */}

      <AnswerButton label={"False"} />

      <Score
        numCorrect={props.numCorrect}
        numQuestions={props.numQuestions} />

    </div>
  )
}


/**
 * Top header component, provided with logo and title as text
 */
function TopHeader(props) {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.title}</h1>
    </header>
  )
}


/**
 * Main Application Container Component
 */
class App extends Component {

  /*
   * create new app state
   * ... please note that setState is not to be called in the constructor
   * 
   * also note that the constructor is only run once, 
   * ... when the component is first created
   */
  constructor(props) {
    super(props);

    // create new state
    this.state = {
      numQuestions: 0,
      numCorrect: 0,

      value1: this.generateRandomValue(),
      value2: this.generateRandomValue(),
      value3: this.generateRandomValue()
    }

    // now, add the proposed answer
    // note, `proposedAnswer` can NOT be added together, above
    // ... as it depends on the values already being existent
    this.state = {
      ...this.state,
      proposedAnswer: this.generateProposedAnswer()
    }

  }


  /*
   * generates a random value between 0 and 100, not inclusive of limits 
   */
  generateRandomValue = () => {
    return Math.floor(Math.random() * 100);
  }

  /*
   * returns the actual sum of the equation
   */
  getActualAnswer = () => {
    return this.state.value1 + this.state.value2 + this.state.value3;
  }

  /*
   * generates an answer by adding a random value, between 0 and 3, to the sum of the equation
   */
  generateProposedAnswer = () => {
    // return this.getActualAnswer();
    return Math.floor(Math.random() * 3) + this.getActualAnswer(); 
  }

  /*
   * add a point to the state
   */
  addPoint = () => {
    this.setState(state => ({
      numCorrect: state.numCorrect + 1
    }))


    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! REMOVE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log("just added a point to the state and it is " + this.state.numCorrect);
  }

  /*
   * checks to see if button true is correct
   */
  isTrueCorrect = () => {
    if (this.getActualAnswer() === this.generateProposedAnswer()) {
      this.addPoint();

      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! REMOVE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      console.log("just added point");
    }
  }



  render() {
    return (
      <div className="App">

        <TopHeader
          logo={logo}
          title={'ReactND - Coding Practice'}
        />

        <MentalMathGame
          value1={this.state.value1}
          value2={this.state.value2}
          value3={this.state.value3}
          actualAnswer={this.getActualAnswer}
          proposedAnswer={this.state.proposedAnswer}
          numCorrect={this.state.numCorrect}
          numQuestions={this.state.numQuestions}
          addPoint={this.addPoint}


          // need to remove this if necessary !?????
          isTrueCorrect={this.isTrueCorrect}
        />

      </div>
    );
  }
}

export default App;
