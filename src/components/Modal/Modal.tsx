import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUserErrorAction } from "../../redux/actions/userActions";

import './Modal.scss'

interface ModalInterface {
    active: boolean;
    setActive: () => void;
}

const Modal: FC<ModalInterface> = ({ active, setActive, children }) => {

    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={setActive}
        >
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
