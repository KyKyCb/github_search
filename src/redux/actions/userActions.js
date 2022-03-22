import axios from "axios";
import API from "../../api/mainApi";
import { BASE_URL } from "../../constants/apiConstants";
import {
    USER_CLEAR_FIND_USERS,
    USER_LOADING,
    USER_SET_ERROR,
    USER_SET_FIND_REPOS,
    USER_SET_FIND_USERS,
    USER_SET_SELECTED,
} from "../constants/userConstants";

export const setUserErrorAction = (error) => {
    return {
        type: USER_SET_ERROR,
        payload: error,
    };
};

export const userLoadingAction = () => {
    return { type: USER_LOADING };
};

export const setFindUsersAction = (findUsers) => {
    return { type: USER_SET_FIND_USERS, payload: findUsers };
};

export const clearUsersAction = () => {
    return { type: USER_CLEAR_FIND_USERS };
};

export const setFindReposAction = (findRepos) => {
    return { type: USER_SET_FIND_REPOS, payload: findRepos };
};

export const setSelectedUserAction = (selectedUser) => {
    return { type: USER_SET_SELECTED, payload: selectedUser };
};

export const asyncChangeFindUsers = (userName = "") => {
    return async (dispatch) => {
        dispatch(userLoadingAction())
        try {
            const result = await API.searchUsers(userName, 1);

            if (result.status === 200) {
                dispatch(setFindUsersAction(result.data.items));
            }

            console.log("async change find user: ", result);
        } catch (error) {
            console.error("User action error: ", error);
        }
    };
};
