import React, { useState } from "react";

import "./style.css";

import Modal from "../../Components/Modal";
import Home from "../Home";

const Main = () => {

    const [value, setValue] = useState(1)
    const handleInputChange = (e) => {
        setValue(e.target.value);
        localStorage.setItem("qtdQuestoes", e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
    };

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className="container">
            <h2>Quantas questões você deseja responder?</h2>
            <form onSubmit={handleSubmit} className="buttons">
                <input type="number" name="number" min="1" onChange={handleInputChange} value={value}/>
                <button type="submit" onClick={() => setModalVisible(true)}>START</button>
            </form>
            {modalVisible ? <Modal onClose={() => setModalVisible(false)}/> : null}
        </div>
    );
}

export default Main;