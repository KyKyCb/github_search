import API from "../../api/mainApi";
import {
    USER_CLEAR_ERROR,
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

export const clearUserErrorAction = () => {
    return {
        type: USER_CLEAR_ERROR,
    };
};

export const userLoadingAction = () => {
    return { type: USER_LOADING };
};

export const setFindUsersAction = (findUsers, searchValue) => {
    return {
        type: USER_SET_FIND_USERS,
        payload: { users: findUsers, searchValue: searchValue },
    };
};

export const clearUsersAction = () => {
    return { type: USER_CLEAR_FIND_USERS };
};

export const setSelectedUserAction = (selectedUser) => {
    return { type: USER_SET_SELECTED, payload: selectedUser };
};

export const setFindReposAction = (findRepos, searchValue) => {
    return {
        type: USER_SET_FIND_REPOS,
        payload: { repos: findRepos, searchValue: searchValue },
    };
};

export const asyncChangeFindUsers = (userName = "") => {
    return async (dispatch) => {
        dispatch(userLoadingAction());
        try {
            const result = await API.searchUsers(userName, 1);

            if (result.status === 200) {
                dispatch(setFindUsersAction(result.data.items, userName));
            }
        } catch (error) {
            dispatch(
                setUserErrorAction(
                    "Something went wrong. Please try again later."
                )
            );
            console.error("User action error: ", error);
        }
    };
};

export const asyncSetSelectedUser = (userName = "") => {
    return async (dispatch) => {
        dispatch(userLoadingAction());
        try {
            const result = await API.getUser(userName);

            if (result.status === 200) {
                dispatch(setSelectedUserAction(result.data));
            }
        } catch (error) {
            dispatch(
                setUserErrorAction(
                    "Something went wrong. Please try again later."
                )
            );
            console.error("User action error: ", error);
        }
    };
};

export const asyncSetFindRepos = (repoName = "", userName = "") => {
    return async (dispatch) => {
        dispatch(userLoadingAction());
        try {
            if (!repoName) {
                const result = await API.getAllUserRepos(userName);
                if (result.status === 200) {
                    dispatch(setFindReposAction(result.data.items, repoName));
                } else {
                    dispatch(setFindReposAction([], repoName));
                }
                return;
            }
            const result = await API.searchUserRepos(userName, repoName);

            if (result.status === 200) {
                dispatch(setFindReposAction(result.data.items, repoName));
            } else {
                dispatch(setFindReposAction([], repoName));
            }
        } catch (error) {
            dispatch(
                setUserErrorAction(
                    "Something went wrong. Please try again later."
                )
            );
            console.error("User action error: ", error);
        }
    };
};
