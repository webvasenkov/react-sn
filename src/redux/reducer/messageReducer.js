const SEND_MESSAGE = 'SEND_MESSAGE';

let initState = {
    dialogData: [
        {
            img: 'https://sun9-33.userapi.com/c857428/v857428970/1bd82f/AzY7LOqPuU4.jpg',
            id: 1, name: 'Yan Sivakov'
        },
        {
            img: 'https://sun9-7.userapi.com/OazjvpUiGfGfF4G86LTde33BeXoVsrrwfI33Og/6mIiUmoPZHA.jpg',
            id: 2, name: 'Sasha Kurash'
        },
        {
            img: 'https://sun9-10.userapi.com/impg/c857724/v857724249/1fea20/1FFUtFbnNAA.jpg?size=200x0&quality=90&crop=0,28,2093,2096&sign=1a257169eaec8a72c0b30edae956c664&ava=1',
            id: 3, name: 'Lera Dvachevskaya'
        },
        {
            img: 'https://sun9-13.userapi.com/impg/sHBP1VBR4070u6JCc8NJ55cS2TmLvPC5QHc6fA/BHrvqm6Wjww.jpg?size=200x0&quality=90&crop=0,455,1607,1607&sign=175ff46d493547a32e72f24e26d5354f&ava=1',
            id: 4, name: 'Natalya Borisova'
        },
    ],
    messageData: [
        {
            id: 1,
            avatar: 'https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png',
            message: 'Hi'
        },
        {
            id: 2,
            avatar: 'https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png',
            message: 'Hello'
        },
    ],
}

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 3,
                avatar: 'https://www.pngkit.com/png/full/639-6399637_henry-circle-gentleman.png',
                message: action.text
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            };
        }
        default:
            return state;
    }
}

export const onSendMessage = (text) => ({type: SEND_MESSAGE, text});
export default messageReducer;