import React, { FC } from "react";

interface UserListItemInterface {
    imageUrl: string;
    title: string;
    reposCount: number | undefined;
}

const UserListItem: FC<UserListItemInterface> = (props) => {
    return (
        <div>
            <img src={props.imageUrl} alt="account_image" />
            <p>{props.title}</p>
            {!!props.reposCount && <p>Public repositories: {props.reposCount}</p>}
        </div>
    );
};

export default UserListItem;
