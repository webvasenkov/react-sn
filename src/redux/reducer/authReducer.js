import {AuthAPI, SecurityApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'sn/auth/SET_USER_DATA'
const SET_CAPTCHA_URL = 'sn/auth/SET_CAPTCHA_URL'

const initState = {
    id: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL:
            return {
                ...state, captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})

export const getAuthUserData = () => async (dispatch) => {
    let auth = await AuthAPI.getAuth()
    if (auth.resultCode === 0) {
        let {id, login, email} = auth.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const Authentication = (data) => async (dispatch) => {
    let {inputLogin: email, inputPassword: password, checkboxRemember: rememberMe, inputCaptcha: captcha} = data
    let auth = await AuthAPI.auth(email, password, rememberMe, captcha)
    if (auth.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (auth.resultCode === 10) {
            dispatch(getCaptcha())
        }
        let message = auth.messages.length > 0 ? auth.messages[0] : 'Invalid password or email'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const Exit = () => async (dispatch) => {
    let exit = await AuthAPI.exit()
    if (exit.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptcha = () => async (dispatch) => {
    const response = await SecurityApi.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

export default authReducer
