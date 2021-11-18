import { AuthActionType } from "../actions";

const authErorr = {
    message: "",
}


const authErrorReducer = (state = authErorr, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_FAILURE:
            return {
                ...state,
                message: action.payload,
            };
        case AuthActionType.LOGIN_FAILURE:
            return {
                ...state,
                message: action.payload,
            };
        case AuthActionType.LOGOUT_FAILURE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}

export default authErrorReducer;