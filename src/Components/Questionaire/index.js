import React from "react";
import "./style.css";


const Questionaire = ({handleAnswer, data: {question, correct_answer, incorrect_answers}}) => {
    
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort();
    
    return(
        <div>
            <div className="content-title">
                <h2 dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className="content-buttons">
                {shuffledAnswers.map((answer, key) => (
                    <button key={key} className="button" onClick={() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{ __html: answer }}/>
                ))}
            </div>
        </div>
        
    );

}
export default Questionaire;