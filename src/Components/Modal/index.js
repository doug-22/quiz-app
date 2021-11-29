import React from "react";
import "./style.css";

const Modal = ({id = "modal", onClose = () => {}}) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose()
    }

    return (
        <div id={id} className="modal">
            <div className="modal-container">
                <div className="modal-buttons">
                    <button className="button-start">Start</button>
                    <button className="button-cancel" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;