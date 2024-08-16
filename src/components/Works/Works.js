import React from "react";
import calc from "../../Images/calculator.jpg";
import quiz from "../../Images/quiz.jpg";
import todo from "../../Images/todo.jpg";
import weather from "../../Images/weather.jpg";
import "./Works.css";
// import w3 from "../../Images/w3.jpg";
function Works() {
  return (
    <div className="container-fluid work-dark text-white" id="work">
      <div className="container p-5 work ">
        <h2 className="text-center mb-5 mt-5 work-h2 border-bottom pb-3 text-warning">My recent works</h2>
        <div className="row">
          <div className="col-sm-4 col-md-3  mb-2">
            <img src={quiz} alt="quiz-app" className="rounded"></img>
          </div>
          <div className=" col-sm-4 col-md-3  mb-2">
            <img src={calc} alt="quiz-app " className="rounded"></img>
          </div>
          <div className="col-sm-4 col-md-3  mb-2 ">
            <img src={weather} alt="quiz-app" className="rounded"></img>
          </div>
          <div className="col-sm-4 col-md-3 mb-2">
            <img src={todo} alt="quiz-app" className="rounded"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
