import React, {useEffect} from 'react'
import Settings from "./Settings";
import {connect} from "react-redux";
import {getUserProfile, saveProfile, setInfo} from "../../redux/reducer/profileReducer";
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching} from "../../redux/selectors/userSelector";
import {compose} from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";

const SettingsContainer = ({getUserProfile, ...props}) => {
    useEffect(() => {
            getUserProfile(props.authId)
    }, [])

    if (props.profile === null) {
        return <Preloader/>
    } else if (props.profile.userId !== props.authId) {
        return <Preloader/>
    }

    return <Settings saveProfile={props.saveProfile} profileEditStatus={props.profileEditStatus}
                     setInfo={props.setInfo} profile={props.profile}/>
}

let mapStateToProps = (state) => {
    return {
        profileEditStatus: state.profilePage.profileEditStatus,
        authId: state.auth.id,
        profile: state.profilePage.profile,
        isFetching: getIsFetching(state),
    }
}

export default compose(connect(mapStateToProps, {getUserProfile, saveProfile, setInfo}), withAuthRedirect)(SettingsContainer)