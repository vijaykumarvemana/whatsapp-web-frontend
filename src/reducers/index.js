import { initialStore } from "../store";

const reducer = (state = initialStore, action) => {

    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: {
                    ...state.users,
                    data: [...state.users.data, action.payload]
                }
            }
        
        case "REMOVE_USER":
            return {
                ...state,
                users: {
                    ...state.users,
                    data: [...state.users.data.slice(0, action.payload), ...state.users.data.slice(action.payload + 1)]
                }
            }
        
    
        default:    
            return state;
    }
}


export default reducer;