import {getAuthUserData} from "./authReducer";


const SET_INITIALIZATION = 'SET_INITIALIZATION'

const initState = {
    isInitialization: false,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                isInitialization: true
            }
        default:
            return state
    }
}

export const setInitialization = () => ({type: SET_INITIALIZATION})
export const initialization = () => (dispatch) => {
    const promiseAuth = dispatch(getAuthUserData())
    // const promiseExample = dispatch(getExample())
    // const promiseExample = dispatch(getExample())

    // Promise.all - когда все промисы выполнятся, возвращает свой промис
   Promise.all([promiseAuth/*, promiseExample*/]).then(() =>
        dispatch(setInitialization())
    )
}

export default appReducer