import React from "react"
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

const withAuthRedirect = (WrapperComponent) => {
    class HOC extends React.Component {
        render() {
            if (!this.props.auth) {
                return <Redirect to={'/login'}/>
            }
            return <WrapperComponent {...this.props}/>
        }
    }

    let mapStateToProps = (state) => {
        return {
            auth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps, {})(HOC)
}
export default withAuthRedirect