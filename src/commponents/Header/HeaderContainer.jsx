import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {Exit, getUserData} from "../../redux/reducer/authReducer";
import {AuthAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {Exit})(HeaderContainer)
