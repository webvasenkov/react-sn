import React from "react";
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Redirect from "react-router-dom/es/Redirect";
import MessagesForm from "./MessagesForm";


const Messages = (props) => {
    let dialogElements = props.dialogData.map(dialog => <DialogItem img={dialog.img} id={dialog.id}
                                                                    name={dialog.name}/>)
    let messageElements = props.messageData.map(message => <MessageItem id={message.id} avatar={message.avatar}
                                                                        message={message.message}/>)

    const onSubmit = (data) => {
        let {textareaMessage: text} = data
        props.onSendMessage(text)
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
                        <MessagesForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Messages;