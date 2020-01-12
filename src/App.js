import React from "react";
import logo from "./logo.svg";
import Quiz from "./quizSplit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className = "Quiz-question-heading">Start:</h1>
        <Quiz/>
      {/* <div className="Quiz-btn-div">
      <button className="Quiz-btn">Quiz 1</button>
      </div>

      <div className="Quiz-btn-div">
        <button className="Quiz-btn">Quiz 2</button>
      </div> */}
      </header>
    </div>
  );
}

export default App;
