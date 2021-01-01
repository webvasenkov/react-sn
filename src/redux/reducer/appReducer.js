import {getAuthUserData} from "./authReducer";


const SET_INITIALIZATION = 'SET_INITIALIZATION'
const SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR'

const initState = {
    isInitialization: false,
    globalError: null
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state, isInitialization: true
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state, globalError: action.messageError
            }
        default:
            return state
    }
}

export const setInitialization = () => ({type: SET_INITIALIZATION})
export const setGlobalError = (messageError) => ({type: SET_GLOBAL_ERROR, messageError})

export const initialization = () => (dispatch) => {
    const promiseAuth = dispatch(getAuthUserData())
    // const promiseExample = dispatch(getExample())
    // const promiseExample = dispatch(getExample())

    // Promise.all - когда все промисы выполнятся, возвращает свой промис
    Promise.all([promiseAuth/*, promiseExample*/]).then(() =>
        dispatch(setInitialization())
    )
}
export const globalError = () => (dispatch) => {
    dispatch(setGlobalError('Some error'))
    return new Promise(resolve => setTimeout(() => {
            dispatch(setGlobalError(null))
        }, 3000)
    )
}

export default appReducer