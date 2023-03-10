import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 2, message: 'It\'s my second post', likesCount: 2},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Etienne Mandel Tristan'},
            {id: 2, name: 'John Barnes'},
            {id: 3, name: 'Jenelle Lacey Jasmyn'},
            {id: 4, name: 'Toya Avery Rahel'},
            {id: 5, name: 'Arnold Fraser'},
            {id: 6, name: 'Lillian Gilson'}
        ],
        messages: [
            {id: 1, message: 'Keep Your Shirt On'},
            {id: 2, message: 'How is your it-study?'},
            {id: 3, message: 'Jaws of Death'},
            {id: 4, message: 'Hi!'},
            {id: 5, message: 'Yo'}
        ]
    },
    sideBar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state;
