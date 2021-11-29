import React, { useEffect, useState } from "react";
import "./style.css";

import Api from "../../api";

const Home = () => {

    useEffect(() => {
        const loadApi = async () => {
            let qtdQuestions = parseInt(localStorage.getItem("qtdQuestoes"));
            let list = await Api.getQuestions(qtdQuestions);
            console.log(list)

        }

        loadApi();
      }, []);

    return (
        <div>Eu</div>
    );
}

export default Home;