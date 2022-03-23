import React, { FC } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface UserListItemInterface {
    imageUrl: string;
    title: string;
    reposCount: number | undefined;
}

const UserListItem: FC<UserListItemInterface> = (props) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("users/" + props.title);
    };

    return (
        <div className="list" onClick={onClickHandler}>
            <div className="list__item">
                <div className="list__item__img-container">
                    <img src={props.imageUrl} alt="account_image" />
                </div>
                <div className="list__item__text-container">
                    <p className="list__text__name">{props.title}</p>
                </div>

                {typeof props.reposCount === "number" && (
                    <div className="list__item__text-container">
                        <div className="list__item_text-row">
                            <span className="list__text">
                                Public repositories:
                            </span>
                            <span className="list__text">
                                {props.reposCount}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserListItem;
