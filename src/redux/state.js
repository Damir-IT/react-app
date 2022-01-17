import renderPage from "../renderPage";

const state = {
    profilePage : {
        posts : [],
        newPost : ' ',
    },
    dialogsPage : {
        dialogs : [
            { id : 1, name : 'Dasha' },
            { id : 2, name : 'Damir' },
            { id : 3, name : 'Artur' },
            { id : 4, name : 'Kriss' },
            ],
        messages : [
            { id : 1, message : 'Hey there' },
            { id : 2, message : 'Sup, bro' },
            { id : 3, message : 'How are you doin\'??' },
        ],
    },
    

}

export const showPostInput = (input) => {
    state.profilePage.newPost = input;
    renderPage(state);
}

export const addPost = () => {
    const newPost = { message : state.profilePage.newPost };
    state.profilePage.posts.push(newPost)
    renderPage(state);
}

export const getPostIndex = (post) => {
    return state.profilePage.posts.indexOf(post);
}

export const deletePost = (postIndex) => {
    state.profilePage.posts.splice(postIndex, 1);
    renderPage(state);
}

export default state;