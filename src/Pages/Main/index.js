import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import "./style.css";

import Modal from "../../Components/Modal";

const Main = () => {

    const [value, setValue] = useState(1)
    const handleInputChange = (e) => {
        setValue(e.target.value);
        localStorage.setItem("amountQuestions", e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
         // eslint-disable-next-line
        const data = Object.fromEntries(formData);
    };

    const [modalVisible, setModalVisible] = useState(false);

    const location = useLocation();

    const questionsLocalStorage = JSON.parse(localStorage.getItem("questionsClicked"));

    return (
        <div className="container">
            <h2>How many questions do you want to answer?</h2>
            <form onSubmit={handleSubmit} className="buttons">
                <input type="number" name="number" min="1" onChange={handleInputChange} value={value}/>
                <button type="submit" onClick={() => setModalVisible(true)}>Start</button>
            </form>
            {modalVisible ? <Modal onClose={() => setModalVisible(false)} location={location.pathname}/> : null}
            {questionsLocalStorage && 
                <Link to="/report">
                    <button className="button-previous">Previous result</button>
                </Link>
            }
            
        </div>
    );
}

export default Main;