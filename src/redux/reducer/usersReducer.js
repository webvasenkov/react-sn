import {UsersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/helper";

const FOLLOW = 'sn/users/FOLLOW'
const UNFOLLOW = 'sn/users/UNFOLLOW'
const SET_USERS = 'sn/users/SET_USERS'
const SET_CURRENT_PAGE = 'sn/users/SET_CURRENT_PAGE'
const PRELOADER = 'sn/users/PRELOADER'
const FOLLOWING_PROGRESS = 'sn/users/FOLLOWING_PROGRESS'
const SET_TOTAL_COUNT = 'sn/users/SET_TOTAL_COUNT'


let initState = {
    users: [],
    itemsCountTotal: 0,
    pageSize: 24,
    portionSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state, users: action.users,
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, itemsCountTotal: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            }
        case PRELOADER:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : [state.followingInProgress.filter(id => id != action.userID)]
            }
        default:
            return state;
    }
};

// === Action Creators ===
export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const preloader = (isFetching) => ({type: PRELOADER, isFetching})
export const followingProgress = (isFetching, userID) => ({type: FOLLOWING_PROGRESS, isFetching, userID})

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(followingProgress(true, userId))
    let follows = await apiMethod(userId)
    if (follows.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(followingProgress(false, userId))
}

// === Thunk Creators ===
export const getUsersTC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(preloader(true))
    let users = await UsersAPI.getUsers(currentPage, pageSize)
    dispatch(setTotalCount(users.totalCount))
    dispatch(setUsers(users.items))
    dispatch(preloader(false))
    dispatch(setCurrentPage(currentPage))
}

export const followTC = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.followUsers.bind(UsersAPI), follow)
}

export const unFollowTC = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.unFollowUsers.bind(UsersAPI), unfollow)
}


export default usersReducer;