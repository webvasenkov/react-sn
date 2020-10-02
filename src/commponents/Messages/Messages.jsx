import React from "react";
import style from './Messages.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {

    let dialogElements = props.messagesState.dialogData.map(dialog => <DialogItem img={dialog.img} id={dialog.id} name={dialog.name}/>)
    let messageElements = props.messagesState.messageData.map(message => <MessageItem id={message.id} avatar={message.avatar} message={message.message}/>)
    let newMessage = React.createRef();
    let sendMessage = () => {
        let messageText = newMessage.current.value;
        alert(messageText);
    }

    return (
        <section className="messages">
            <div className="container">
                <div className={style.inner}>
                    <div className={style.dialogs}>
                        <div className={style.dialogsItems}>
                            {dialogElements}
                        </div>
                    </div>
                    <div className={style.message}>
                        <div className={style.messageItems}>
                            {messageElements}
                        </div>
                        <form className={style.messageForm}>
                            <textarea className={style.messageSend} ref={newMessage}></textarea>
                            <button className={style.messageBtn} onClick={sendMessage} type='button'></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Messages;