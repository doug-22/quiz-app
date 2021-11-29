import React from "react";
import "./style.css";

import Button from "../Button";

const Questionaire = ({handleAnswer, data: {question, correct_answer, incorrect_answers}}) => {
    
    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort();
    console.log(shuffledAnswer);
    
    return(
        <div>
            <div className="content-title">
                <h2 dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className="content-buttons">
                <Button className={correct_answer === shuffledAnswer[0] ? "correctAnswer" : ""} onClick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]} />
                <Button className={correct_answer === shuffledAnswer[1] ? "correctAnswer" : ""} onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/>
                <Button className={correct_answer === shuffledAnswer[2] ? "correctAnswer" : ""} onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
                <Button className={correct_answer === shuffledAnswer[3] ? "correctAnswer" : ""} onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/>
            </div>
        </div>
        
    );

}
export default Questionaire;