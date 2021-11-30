import React, { useEffect, useState } from "react";
import "./style.css";

import Api from "../../api";

import Questionaire from "../../Components/Questionaire";

const Home = () => {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const questionsClicked = questions

    useEffect(() => {
        
        const loadApi = async () => {
            let qtdQuestions = parseInt(localStorage.getItem("qtdQuestoes"));
            let list = await Api.getQuestions(qtdQuestions);
            setQuestions(list.questions.results)
        }

        loadApi();
      }, []);

      const handleAnswer = (answer) => {
        if(questionsClicked.length > 0){
            questionsClicked[currentIndex]['clicked_answer'] = answer
          }
          
        setCurrentIndex(currentIndex + 1);

      }
      
      
    return (
        <div className="container-home">
            {questions.length > 0 ? 
            <>
                <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer}/>
            </>
            :
            <h2>Carregando...</h2>}
        </div>
    );
}

export default Home;