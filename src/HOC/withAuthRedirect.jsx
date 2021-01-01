import React, {Fragment} from "react"
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

// const withAuthRedirect = (WrapperComponent) => {
//     class HOC extends React.Component {
//         render() {
//             if (!this.props.auth) {
//                 return <Redirect to={'/login'}/>
//             }
//             return <WrapperComponent {...this.props}/>
//         }
//     }
//
//     let mapStateToProps = (state) => {
//         return {
//             auth: state.auth.isAuth
//         }
//     }
//
//     return connect(mapStateToProps, {})(HOC)
// }
// export default withAuthRedirect

const withAuthRedirect = (WrapperComponent) => (props) => {
    const {isAuth} = useSelector(({auth}) => ({isAuth: auth.isAuth}))
    if (!isAuth) return <Redirect to='/login'/>
    return <WrapperComponent {...props}/>
}

export default withAuthRedirect

