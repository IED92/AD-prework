import React, { Component } from "react";
import data from "./quiz.json";

const { quizzes } = data

class Quiz extends Component {
  constructor() {
      super()
      this.state = {
          isLoading: true,
          abstractData: null,
          devData: null,
          score: 0
      }
  }

  componentDidMount() {
    console.log(quizzes)  
    setTimeout(() => {
        this.setState({
            isLoading: false,
            abstractData: { title: quizzes[0].title, questions: quizzes[0].questions },
            devData: { title: quizzes[1].title, questions: quizzes[1].questions }
        })
    }, 1000)
  }  
  render() {
    console.log(this.state)
    return this.state.isLoading ? <p>Is Loading...</p> : 
    <div className = "Quiz-btn-div">
        <button onClick={this.showQuiz} className="Quiz-btn">{this.state.abstractData.title}</button>
        <button onClick={this.showQuiz} className="Quiz-btn">{this.state.devData.title}</button>
    </div>
  }
}
export default Quiz