import React from "react";
import "./style.css";

const Report = () => {

    const score = localStorage.getItem('score');

    return (
        <h2>Seus ponto {score} </h2>
    );
}

export default Report;