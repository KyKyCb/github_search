import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserItemInterface } from "../../constants/interfaces";
import {
    asyncChangeFindUsers,
    clearUsersAction,
} from "../../redux/actions/userActions";
import { selectFindUsers, selectSearchUserValue } from "../../redux/selectors/selectUserState";
import useDebounce from "../../utils/hooks/useDebounce";
import InputComponent from "../InputComponent/InputComponent";
import SearchResultList from "../SearchResult/SearchResultList";
import UserListItem from "../UserListItem/UserListItem";

import './Main.scss'

const Main: FC = () => {
    const dispatch = useDispatch();
    const findUsers = useSelector(selectFindUsers);
    const searchUsersValue = useSelector(selectSearchUserValue)

    const searchUsers = useDebounce((value: string) => {
        if (!value) {
            clearUserList();
        } else if(searchUsersValue !== value){
            dispatch(asyncChangeFindUsers(value));
        }
    }, 600);

    const clearUserList = () => {
        dispatch(clearUsersAction());
    };
    return (
        <div className="main">
            <InputComponent
                placeholder="Search for Users"
                searchFunction={searchUsers}
                storeValue = {searchUsersValue}
            />
            <SearchResultList
                items={findUsers}
                renderItem={(item: UserItemInterface) => (
                    <UserListItem
                        imageUrl={item.avatar_url}
                        title={item.login}
                        reposCount={item.detailed_data?.public_repos}
                        key={item.id}
                    />
                )}
            />
        </div>
    );
};

export default Main;
