import axios from "axios"


const AuthActionType = {
 
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    
}


const LoginAuthAction = (loginState, history, setErrorHandler) => {

    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3003/whatsapp/login", loginState)
            dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: response.data })
            history.push("/chatroom")
        } catch (error) {
            if(error.response){
                dispatch({ 
                    type: AuthActionType.LOGIN_FAILURE, 
                    payload: error.response.data.message 
                })
            }
            setErrorHandler({
                hasError: true,
                message: error.response.data.message
            })
        }
    }
}



export {  LoginAuthAction, AuthActionType }