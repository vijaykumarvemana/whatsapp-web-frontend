import { Email } from "@material-ui/icons";
import axios from "axios";
import { AuthActionType } from "../actions";


const authState = {
    isLoggedIn: false,
    user: {
        username: "",
        password: "",
        email: "",
       
    },
    sucess: false,
    token: "",
}

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try{
        const authObj = JSON.parse(auth);
        const { token } = authObj.user;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return authObj
    } catch(error){
        return authState
    }
}

const newAuth = getAuthState();

const authReducer = (state = newAuth, action) => {
    switch(action.type){
        case AuthActionType.LOGIN_SUCCESS:
            const LoginAuthState = {
                isLoggedIn: true,
                user: action.payload,
            }
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.token}`;
            localStorage.setItem("auth", JSON.stringify(LoginAuthState));
            return LoginAuthState;
        default:
            return state;
    }
}    

export default authReducer;