import React from "react";
import "./style.css";

const Report = () => {

    const score = localStorage.getItem('score');
    const qtdQuestions = localStorage.getItem('amountQuestions');
    const questions = JSON.parse(localStorage.getItem('questionsClicked'));

    console.log(questions)

    return (
        <div className="report-container">
            <div className="report-top">
                <div>Result: </div>
                <div className="top-result">
                    <div>{score} correct!</div>
                    <div>{qtdQuestions - score} wrong!</div>
                </div>
            </div>
            <div className="report-content-questions">
                <div className="questions-top">
                    <div>Questions</div>
                    <div>Chosen answer</div>
                    <div>Correct answer</div>
                </div>
                {questions.map((item, key) => (
                    <>
                        <div className="questions">
                            {item.clicked_answer === item.correct_answer ?
                            <>
                                
                                <div key={key} dangerouslySetInnerHTML={{ __html: item.question }} className="question"/>
                                <div className="question-clicked">{item.clicked_answer}</div>
                                <div className="question-correct">{item.correct_answer}</div>
                            </>
                            : 
                            <>
                                <div key={key} dangerouslySetInnerHTML={{ __html: item.question }} className="question wrong"/>
                                <div className="question-clicked wrong">{item.clicked_answer}</div>
                                <div className="question-correct wrong">{item.correct_answer}</div>
                            </>
                            }
                        </div>    
                        
                    </>
                ))}
            </div>
        </div>
    );
}

export default Report;