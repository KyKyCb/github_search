import {
    USER_CLEAR_ERROR,
    USER_CLEAR_FIND_USERS,
    USER_LOADING,
    USER_SET_ERROR,
    USER_SET_FIND_REPOS,
    USER_SET_FIND_USERS,
    USER_SET_SELECTED,
} from "../constants/userConstants";

const initialState = {
    selectedUser: null,

    searchUsersValue: "",
    findUsers: [],

    searchReposValue: "",
    findRepos: [],

    isLoading: false,

    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SET_FIND_USERS:
            return {
                ...state,
                findUsers: action.payload.users,
                searchUsersValue: action.payload.searchValue,
                isLoading: false,
            };
        case USER_CLEAR_FIND_USERS:
            return { ...state, findUsers: [], isLoading: false };
        case USER_SET_SELECTED:
            return { ...state, selectedUser: action.payload, isLoading: false };
        case USER_SET_FIND_REPOS:
            return {
                ...state,
                findRepos: action.payload.repos,
                searchReposValue: action.payload.searchValue,
                isLoading: false,
            };
        case USER_LOADING:
            return { ...state, isLoading: true };
        case USER_SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        case USER_CLEAR_ERROR:
            return { ...state, error: null, isLoading: false };

        default:
            return state;
    }
};

export default userReducer;
