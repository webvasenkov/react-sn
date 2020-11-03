import React from "react";
import style from './Login.module.css'
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {Authentication} from "../../redux/reducer/authReducer";
import Redirect from "react-router-dom/es/Redirect";

const Login = ({Authentication, isAuth}) => {
    const onSubmit = (formData) => {
        Authentication(formData)
    }

    if (isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <section className={style.login}>
            <div className="container">
                <div className={style.inner}>
                    <h2 className={style.title}>LogIn</h2>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </section>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {Authentication})(Login)