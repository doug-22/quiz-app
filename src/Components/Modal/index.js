import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Modal = ({id = "modal", onClose = () => {}, location, sendData = () => {}}) => {

    return (
        <div id={id} className="modal">
            <div className="modal-container">
                
                {location ? 
                    <div className="modal-buttons">
                        <div className="continue">DO YOU WANT TO CONTINUE?</div>
                        <div>
                            <Link to="/home">
                                <button className="button-start">Start</button>
                            </Link>
                            <button className="button-cancel" onClick={onClose}>Cancel</button>
                        </div> 
                    </div>
                : 
                    <div className="modal-buttons">
                        <Link to="/report">
                            <button className="button-start" onClick={() => sendData()}>Finalizar</button>
                        </Link>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Modal;