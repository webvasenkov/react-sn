import {ProfileAPI} from "../../api/api";

const ADD_POST = 'sn/profile/ADD_POST';
const SET_PROFILE = 'sn/profile/SET_PROFILE'
const SET_USERS_COUNT = 'sn/profile/SET_USERS_COUNT'
const SET_STATUS = 'sn/profile/SET_STATUS'
const DELETE_POST = 'sn/profile/DELETE_POST'

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
        case DELETE_POST: {
            return {
                ...state, postData: state.postData.filter(p => p.id !== action.id)
            }
        }
        default:
            return state;
    }
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const addPost = (text) => ({type: ADD_POST, text});
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userID) => async (dispatch) => {
    let profile = await ProfileAPI.getProfile(userID)
    dispatch(setProfile(profile))
}

export const getUserStatus = (userID) => async (dispatch) => {
    let status = await ProfileAPI.getStatus(userID)
    dispatch(setStatus(status))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let statusRequest = await ProfileAPI.updateStatus(status)
    if (status.resultCode === 0) {
        dispatch(setStatus(statusRequest))
    }
}

export default profileReducer;

