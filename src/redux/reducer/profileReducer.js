import {ProfileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'sn/profile/ADD_POST';
const SET_PROFILE = 'sn/profile/SET_PROFILE'
const SET_USERS_COUNT = 'sn/profile/SET_USERS_COUNT'
const SET_STATUS = 'sn/profile/SET_STATUS'
const DELETE_POST = 'sn/profile/DELETE_POST'
const SET_PHOTO = 'sn/profile/SET_PHOTO'
const SET_INFO = 'sn/users/SET_INFO'
const SET_SOME_ERROR = 'sn/users/SET_SOME_ERROR'


let initState = {
    postData: [
        {
            id: 1, name: 'Jhon Bewen',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorem dolores ducimus enim, et facilis fugit iure laboriosam, minima molestias odio perferendis possimus quae quas qui quiarecusandae sapiente voluptas.',
            like: 3,
        },
        {
            id: 2, name: 'Jhon Bewen',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorem dolores ducimus enim, et facilis fugit iure laboriosam, minima molestias odio perferendis possimus quae quas qui quiarecusandae sapiente voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            like: 8,
        },
        {
            id: 3, name: 'Jhon Bewen',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorem dolores ducimus enim, et facilis fugit iure laboriosam, minima molestias odio perferendis possimus quae quas qui quiarecusandae sapiente voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            like: 15,
        },
    ],
    profile: null,
    status: '',
    photos: {
        small: null,
        large: null
    },
    userId: null,
    profileEditStatus: false
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, name: 'Jhon Bewen',
                text: action.text,
                like: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        }
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }

        case SET_USERS_COUNT: {
            return {
                ...state, count: action.count
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SET_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        case SET_INFO: {
            return {
                ...state, profileEditStatus: action.profileEditStatus
            }
        }
        case DELETE_POST: {
            return {
                ...state, postData: state.postData.filter(p => p.id !== action.id)
            }
        }

        case SET_SOME_ERROR: {
            return {
                ...state, someError: action.someError
            }
        }
        default:
            return state;
    }
}
export const setInfo = (profileEditStatus) => ({type: SET_INFO, profileEditStatus})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const addPost = (text) => ({type: ADD_POST, text});
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhoto = (photos) => ({type: SET_PHOTO, photos})
export const setSomeError = (someError) => ({type: SET_SOME_ERROR, someError})

export const getUserProfile = (userID) => async (dispatch) => {
    let profile = await ProfileAPI.getProfile(userID)
    dispatch(setProfile(profile))
}

export const getUserStatus = (userID) => async (dispatch) => {
    let status = await ProfileAPI.getStatus(userID)
    dispatch(setStatus(status))
}

export const updateUserStatus = (status) => async (dispatch) => {
    try {
        let statusResponse = await ProfileAPI.updateStatus(status)
        if (statusResponse.resultCode === 0) {
            dispatch(setStatus(statusResponse))
        }
    } catch (e) {
        const status = e.response.status
        if (status >= 400 && status <= 450) {
            //
        }
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    let photoResponse = await ProfileAPI.updatePhoto(photo)
    if (photoResponse.resultCode === 0) {
        dispatch(setPhoto(photoResponse.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let profileResponse = await ProfileAPI.saveProfile(profile)
    if (profileResponse.resultCode === 0) {
        dispatch(getUserProfile(userId))
        dispatch(setInfo(true))
    } else {
        dispatch(stopSubmit('settings', {_error: profileResponse.messages[0]}))
        dispatch(setInfo(false))
    }
}


export default profileReducer;

