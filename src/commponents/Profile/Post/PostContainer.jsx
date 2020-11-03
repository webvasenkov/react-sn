import {addPost} from '../../../redux/reducer/profileReducer';
import Post from "./Post";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

export default compose(connect(mapStateToProps, {addPost}))(Post)


