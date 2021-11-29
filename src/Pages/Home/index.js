import React, { useEffect, useState } from "react";
import "./style.css";

import Api from "../../api";

import Questionaire from "../../Components/Questionaire";

const Home = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        
        const loadApi = async () => {
            let qtdQuestions = parseInt(localStorage.getItem("qtdQuestoes"));
            let list = await Api.getQuestions(qtdQuestions);
            setQuestions(list.questions.results)
        }

        loadApi();
      }, []);

    return (
        <div className="container-home">
            {questions.length > 0 ? 
            <>
                <Questionaire data={questions[0]} />
            </>
            :
            <h2>Carregando...</h2>}
        </div>
    );
}

export default Home;