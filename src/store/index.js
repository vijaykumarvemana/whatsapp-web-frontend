import { createStore } from 'redux';
import reducer from '../reducers'; 

export const initialStore = {
    users: {
        data: []
    },
}

const configureStore = createStore(
    reducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore