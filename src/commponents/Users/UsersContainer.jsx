import {connect} from "react-redux";
import {followTC, getUsersTC, unFollowTC} from "../../redux/reducer/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getItemsCountTotal, getPageSize, getPortionSize,
    getUsersSuperSelectorHard
} from "../../redux/selectors/userSelector";


class UsersContainer extends React.Component {
    componentDidMount() { // В этом методе описываются все Side Effects (работа с DOM, AJAX - запросы)
        let {currentPage, pageSize} = this.props
        this.props.getUsersTC(currentPage, pageSize)
    }

    onPageChange = (currentPage) => {
        let {pageSize} = this.props
        this.props.getUsersTC(currentPage, pageSize)
    }

    onFollow = (userId) => {
        this.props.followTC(userId)
    }

    onUnFollow = (userId) => {
        this.props.unFollowTC(userId)
    }

    render = () => {
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users users={this.props.users}
                   itemsCountTotal={this.props.itemsCountTotal}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
                   onPageChange={this.onPageChange}
                   onFollow={this.onFollow}
                   onUnFollow={this.onUnFollow}
                   portionSize={this.props.portionSize}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelectorHard(state),
        itemsCountTotal: getItemsCountTotal(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state)
    }
}

export default compose(connect(mapStateToProps, {getUsersTC, followTC, unFollowTC}), withAuthRedirect)(UsersContainer)

