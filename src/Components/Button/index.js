import React from "react";
import "./style.css";

const Button = ({answer, className}) => {
    return (
        <button className={`button ${className}`}>{answer}</button>
    );
}

export default Button;