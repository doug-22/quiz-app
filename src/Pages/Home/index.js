import React, { useEffect, useState } from "react";
import "./style.css";

import Api from "../../api";

import Questionaire from "../../Components/Questionaire";
import Modal from "../../Components/Modal";

const Home = () => {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const questionsClicked = questions

    useEffect(() => {
        
        const loadApi = async () => {
            let qtdQuestions = parseInt(localStorage.getItem("amountQuestions"));
            let list = await Api.getQuestions(qtdQuestions);
            setQuestions(list.questions.results)
        }

        loadApi();
      }, []);

      
      const handleAnswer = (answer) => {
        if(questionsClicked.length > 0){
            questionsClicked[currentIndex]['clicked_answer'] = answer;
          }

        if(answer === questions[currentIndex].correct_answer) {
            setScore(score + 1);         
        }
        

        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);

        if(newIndex >= questions.length) {
            setGameEnded(true);
            
            
        }

      }

      const sendData = () => {
        localStorage.setItem('score', score);
        localStorage.setItem('questionsClicked', JSON.stringify(questionsClicked));
      }
      
    return ( gameEnded ? (
        <div>
            <Modal sendData={() => sendData()} />
        </div>
        ):
        <>
            <div className="container-home">
                {questions.length > 0 ? 
                <>
                    <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer}/>
                </>
                :
                <h2>Carregando...</h2>}
            </div>
        </>
    );
}

export default Home;