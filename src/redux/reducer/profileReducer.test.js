import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
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
    ]
}

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPost('Add new post');

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect (newState.postData.length).toBe(4)
})

it('message in post should be correct', () => {
    // 1. test data
    let action = addPost('Add new post');

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect (newState.postData[3].text).toBe('Add new post')
})

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect (newState.postData.length).toBe(2)
})

it ('after deleting length shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(999);

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect (newState.postData.length).toBe(3)
})