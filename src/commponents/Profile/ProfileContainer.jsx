import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, setProfile, updateUserStatus} from "../../redux/reducer/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.AuthId
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        AuthId: state.auth.id
    }
}

export default  compose(connect(mapStateToProps, {setProfile, getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect) (ProfileContainer)

