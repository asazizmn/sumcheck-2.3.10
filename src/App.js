import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



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
   * ... please note that `setState` is not to be called in the constructor
   * ... instead, use `this.state` directly
   * 
   * also note that the constructor is only run once, 
   * ... when the component is first created
   */
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     numQuestions: 0,
  //     numCorrect: 0,

  //     value1: 0,
  //     value2: 0,
  //     value3: 0,

  //     proposedAnswer: 0
  //   }
  // }


  // using the ESnext field declarations proposal syntax
  // ... in order to write less code
  state = {
    numQuestions: 0,
    numCorrect: 0,

    value1: 0,
    value2: 0,
    value3: 0,

    proposedAnswer: 0
  }



  /*
   * this method is executed after the first render
   * it can be used to run statements like
   * ... calling an API, to load data, as it is first called after render()
   * 
   * here we are using it to generate a proposed answer
   * pls note that it could NOT be generated along with the values altogether
   * ... as it depends on the values already being pre-existent
   */
  componentDidMount() {
    this.setEquationValues();
  }


  /*
   * generates and returns a random number with the max value equalling the argument
   */
  getRandomValue = (max) => {
    return Math.floor(Math.random() * max);
  }


  /*
   * returns the actual sum of the equation
   */
  getActualAnswer = () => {
    return this.state.value1 + this.state.value2 + this.state.value3;
  }


  /*
   * generates random values for the equation
   * and stores the values in the state
   */
  setEquationValues = () => {

    // generate the equation
    const value1 = this.getRandomValue(100);
    const value2 = this.getRandomValue(100);
    const value3 = this.getRandomValue(100);
    const proposedAnswer = this.getRandomValue(3) + value1 + value2 + value3;

    // now set it in the state
    this.setState({
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: proposedAnswer
    })
  }


  /*
   * add a point to the state
   */
  addPoint = () => {
    this.setState(state => ({
      numCorrect: state.numCorrect + 1
    }))
  }


  /*
   * increase the number of questions answered, by 1
   */
  addQuestionsAnswered = () => {
    this.setState(state => ({
      numQuestions: state.numQuestions + 1
    }))
  }


  /*
   * checks to see if button true is correct
   * and then resets the equation for the next question
   */
  isTrue = () => {
    this.getActualAnswer() === this.state.proposedAnswer && this.addPoint();
    this.addQuestionsAnswered();
    this.setEquationValues();
  }


  /*
   * checks to see if button false is correct
   * and then resets the equation for the next question
   */
  isFalse = () => {
    this.getActualAnswer() !== this.state.proposedAnswer && this.addPoint();
    this.addQuestionsAnswered();
    this.setEquationValues();
  }


  /*
   * the UI method called everytime the state changes
   *
   * it should be pure 
   * ... avoid modifying state directly
   * ... and return the same result with every invoke
   * 
   * please note that it should not directly call `setState`
   * ... as it makes it a contender for producing infinite loops
   */
  render() {
    return (
      <div className="App">

        <TopHeader
          logo={logo}
          title={'ReactND - Coding Practice'} />

        <MentalMathGame
          value1={this.state.value1}
          value2={this.state.value2}
          value3={this.state.value3}
          proposedAnswer={this.state.proposedAnswer}
          numCorrect={this.state.numCorrect}
          numQuestions={this.state.numQuestions}
          isTrue={this.isTrue}
          isFalse={this.isFalse} />

      </div>
    );
  }
}

export default App;
