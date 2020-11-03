import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducer/profileReducer";
import messageReducer from "./reducer/messageReducer";
import usersReducer from "./reducer/usersReducer";
import authReducer from "./reducer/authReducer";
import appReducer from "./reducer/appReducer"
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;

