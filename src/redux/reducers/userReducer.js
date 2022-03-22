import {
    USER_CLEAR_FIND_USERS,
    USER_LOADING,
    USER_SET_FIND_USERS,
} from "../constants/userConstants";

const initialState = {
    selectedUser: null,

    findUsers: [],
    findRepos: [],

    isLoading: false,

    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SET_FIND_USERS:
            return { ...state, findUsers: action.payload, isLoading: false };
        case USER_CLEAR_FIND_USERS:
            return { ...state, findUsers: [], isLoading: false };
        case USER_LOADING:
            return { ...state, isLoading: true };

        default:
            return state;
    }
};

export default userReducer;
