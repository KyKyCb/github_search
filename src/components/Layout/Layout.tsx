import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseLogo from "../../assets/svgComponents/CloseLogo";
import { clearUserErrorAction } from "../../redux/actions/userActions";
import { selectUserError } from "../../redux/selectors/selectUserState";
import Modal from "../Modal/Modal";

const Layout: FC = (props) => {
    const error = useSelector(selectUserError);
    const dispatch = useDispatch();

    const [activeModal, setActiveModal] = useState<boolean>(false);

    const closeModalHandler = () => {
        setActiveModal(false);
        dispatch(clearUserErrorAction());
    };
    useEffect(() => {
        if (error) {
            setActiveModal(true);
        }
    }, [error]);
    return (
        <div className="layout">
            <h1 className="layout__title">GitHub Searcher</h1>

            {props.children}
            <Modal active={activeModal} setActive={closeModalHandler}>
                <div className="error">
                    <div className="error__heading">
                        <div className="error__title">Error</div>

                        <CloseLogo
                            className="error__close-icon"
                            onClick={closeModalHandler}
                        />
                    </div>

                    <p className="error__info">{error}</p>
                </div>
            </Modal>
        </div>
    );
};

export default Layout;
