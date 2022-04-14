import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
    posts: [],
    users: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USERS_DATA":
            return { ...state, users: action.users }
            break;

        case "SET_POST_DATA":
            return { ...state, posts: action.posts }
            break;

        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
