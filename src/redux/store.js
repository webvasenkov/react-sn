import profileReducer from './reducer/profileReducer';
import messageReducer from './reducer/messageReducer';

export let store = {
    _subscriber() {
    },
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1, name: 'Jhon Bewen',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorem dolores ducimus enim, et facilis fugit iure laboriosam, minima molestias odio perferendis possimus quae quas qui quiarecusandae sapiente voluptas.',
                    like: 3,
                },
                {
                    id: 2, name: 'Jhon Bewen',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorem dolores ducimus enim, et facilis fugit iure laboriosam, minima molestias odio perferendis possimus quae quas qui quiarecusandae sapiente voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                    like: 8,
                },
                {
                    id: 3, name: 'Jhon Bewen',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolorem dolores ducimus enim, et facilis fugit iure laboriosam, minima molestias odio perferendis possimus quae quas qui quiarecusandae sapiente voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                    like: 15,
                },
            ],
            statsData: [
                {
                    src: '/friends',
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDM4LjA5LDI3My4zMmgtMzkuNTk2YzQuMDM2LDExLjA1LDYuMjQxLDIyLjk3NSw2LjI0MSwzNS40MDR2MTQ5LjY1YzAsNS4xODItMC45MDIsMTAuMTU2LTIuNTQzLDE0Ljc4Mmg2NS40NjEgICAgYzI0LjQ1MywwLDQ0LjM0Ni0xOS44OTQsNDQuMzQ2LTQ0LjM0NnYtODEuNTgxQzUxMiwzMDYuNDc2LDQ3OC44NDQsMjczLjMyLDQzOC4wOSwyNzMuMzJ6IiBmaWxsPSIjMjJjOTkzIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xMDcuMjY1LDMwOC43MjVjMC0xMi40MywyLjIwNS0yNC4zNTQsNi4yNDEtMzUuNDA0SDczLjkxYy00MC43NTQsMC03My45MSwzMy4xNTYtNzMuOTEsNzMuOTF2ODEuNTgxICAgIGMwLDI0LjQ1MiwxOS44OTMsNDQuMzQ2LDQ0LjM0Niw0NC4zNDZoNjUuNDYyYy0xLjY0MS00LjYyOC0yLjU0My05LjYwMS0yLjU0My0xNC43ODNWMzA4LjcyNXoiIGZpbGw9IiMyMmM5OTMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwMS4yNjEsMjM0LjgxNWgtOTAuNTIyYy00MC43NTQsMC03My45MSwzMy4xNTYtNzMuOTEsNzMuOTF2MTQ5LjY1YzAsOC4xNjMsNi42MTgsMTQuNzgyLDE0Ljc4MiwxNC43ODJoMjA4Ljc3OCAgICBjOC4xNjQsMCwxNC43ODItNi42MTgsMTQuNzgyLTE0Ljc4MnYtMTQ5LjY1QzM3NS4xNzEsMjY3Ljk3MSwzNDIuMDE1LDIzNC44MTUsMzAxLjI2MSwyMzQuODE1eiIgZmlsbD0iIzIyYzk5MyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDM4Ljg0Yy00OS4wMTIsMC04OC44ODYsMzkuODc0LTg4Ljg4Niw4OC44ODdjMCwzMy4yNDUsMTguMzQ5LDYyLjI4LDQ1LjQ0Nyw3Ny41MjQgICAgYzEyLjg1Myw3LjIzLDI3LjY3MSwxMS4zNjIsNDMuNDM5LDExLjM2MmMxNS43NjgsMCwzMC41ODYtNC4xMzIsNDMuNDM5LTExLjM2MmMyNy4wOTktMTUuMjQ0LDQ1LjQ0Ny00NC4yOCw0NS40NDctNzcuNTI0ICAgIEMzNDQuODg2LDc4LjcxNSwzMDUuMDEyLDM4Ljg0LDI1NiwzOC44NHoiIGZpbGw9IiMyMmM5OTMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTk5LjkxOCwxMjEuNjg5Yy0zNi42NTUsMC02Ni40NzUsMjkuODItNjYuNDc1LDY2LjQ3NWMwLDM2LjY1NSwyOS44Miw2Ni40NzUsNjYuNDc1LDY2LjQ3NSAgICBjOS4yOTgsMCwxOC4xNTItMS45MjYsMjYuMTk1LTUuMzg4YzEzLjkwNi01Ljk4NywyNS4zNzItMTYuNTg1LDMyLjQ2Ny0yOS44NmM0Ljk4LTkuMzE3LDcuODEzLTE5Ljk0Niw3LjgxMy0zMS4yMjcgICAgQzE2Ni4zOTMsMTUxLjUxLDEzNi41NzMsMTIxLjY4OSw5OS45MTgsMTIxLjY4OXoiIGZpbGw9IiMyMmM5OTMiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQxMi4wODIsMTIxLjY4OWMtMzYuNjU1LDAtNjYuNDc1LDI5LjgyLTY2LjQ3NSw2Ni40NzVjMCwxMS4yODIsMi44MzMsMjEuOTExLDcuODEzLDMxLjIyNyAgICBjNy4wOTUsMTMuMjc2LDE4LjU2MSwyMy44NzQsMzIuNDY3LDI5Ljg2YzguMDQzLDMuNDYyLDE2Ljg5Nyw1LjM4OCwyNi4xOTUsNS4zODhjMzYuNjU1LDAsNjYuNDc1LTI5LjgyLDY2LjQ3NS02Ni40NzUgICAgQzQ3OC41NTcsMTUxLjUwOSw0NDguNzM3LDEyMS42ODksNDEyLjA4MiwxMjEuNjg5eiIgZmlsbD0iIzIyYzk5MyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=",
                    name: 'Friends',
                    count: 25,
                },
                {
                    src: '/messages',
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ2Nyw2MUg0NUMyMC4yMTgsNjEsMCw4MS4xOTYsMCwxMDZ2MzAwYzAsMjQuNzIsMjAuMTI4LDQ1LDQ1LDQ1aDQyMmMyNC43MiwwLDQ1LTIwLjEyOCw0NS00NVYxMDYgICAgQzUxMiw4MS4yOCw0OTEuODcyLDYxLDQ2Nyw2MXogTTQ2MC43ODYsOTFMMjU2Ljk1NCwyOTQuODMzTDUxLjM1OSw5MUg0NjAuNzg2eiBNMzAsMzk5Ljc4OFYxMTIuMDY5bDE0NC40NzksMTQzLjI0TDMwLDM5OS43ODh6ICAgICBNNTEuMjEzLDQyMWwxNDQuNTctMTQ0LjU3bDUwLjY1Nyw1MC4yMjJjNS44NjQsNS44MTQsMTUuMzI3LDUuNzk1LDIxLjE2Ny0wLjA0NkwzMTcsMjc3LjIxM0w0NjAuNzg3LDQyMUg1MS4yMTN6IE00ODIsMzk5Ljc4NyAgICBMMzM4LjIxMywyNTZMNDgyLDExMi4yMTJWMzk5Ljc4N3oiIGZpbGw9IiM4MWI4ZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+",
                    name: 'Messages',
                    count: 4,
                },
                {
                    src: '/music',
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OCA0NDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00NDIuMDE2LDMuNWMtMy43NDQtMy4wNC04LjY3Mi00LjA5Ni0xMy40NzItMy4xMzZsLTI4OCw2NEMxMzMuMjE2LDY1Ljk5NiwxMjgsNzIuNDkyLDEyOCw3OS45OFYzMzMuMSAgYy0xMy40MDgtOC4xMjgtMjkuOTItMTMuMTItNDgtMTMuMTJjLTQ0LjA5NiwwLTgwLDI4LjcwNC04MCw2NHMzNS45MDQsNjQsODAsNjRzODAtMjguNzA0LDgwLTY0VjE4OC44MTJsMjU2LTU2Ljg5NlYyNjkuMSAgYy0xMy40MDgtOC4xMjgtMjkuOTItMTMuMTItNDgtMTMuMTJjLTQ0LjEyOCwwLTgwLDI4LjcwNC04MCw2NHMzNS44NzIsNjQsODAsNjRzODAtMjguNzA0LDgwLTY0di0zMDQgIEM0NDgsMTEuMTE2LDQ0NS44MjQsNi41NCw0NDIuMDE2LDMuNXoiIGZpbGw9IiNmZjYyNjIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==",
                    name: 'Music',
                    count: 58,
                },
            ],
            newPostText: '',
        },
        messagesPage: {
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
            newMessageText: '',
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._subscriber(this._state);
    },
}

export default store;