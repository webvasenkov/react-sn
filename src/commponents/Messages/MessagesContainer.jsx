import {
    onSendMessage,
} from '../../redux/reducer/messageReducer';
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

export default compose(connect(mapStateToProps, {onSendMessage}), withAuthRedirect)(Messages);