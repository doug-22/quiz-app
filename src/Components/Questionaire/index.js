import React from "react";
import "./style.css";

import Button from "../Button";

const Questionaire = ({data: {question, correct_answer, incorrect_answers}}) => {
    return(
        <div>
            <div className="content-title">
                <h2 dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div>
                <Button onClick={() => handleAnswer(true)} answer={correct_answer} />
                <Button onClick={() => handleAnswer(false)} answer={incorrect_answers[0]}/>
                <Button onClick={() => handleAnswer(false)} answer={incorrect_answers[1]}/>
                <Button onClick={() => handleAnswer(false)} answer={incorrect_answers[2]}/>
            </div>
        </div>
        
    );
}
export default Questionaire;