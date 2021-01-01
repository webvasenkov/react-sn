import {createSelector} from "reselect";

const getUsersSelectorPrimitive = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelectorHard = createSelector([getUsersSelectorPrimitive],(users) => {
    return users.filter(u => true)
})

export const getItemsCountTotal = (state) => {
    return state.usersPage.itemsCountTotal
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}