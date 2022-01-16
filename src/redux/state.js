import renderPage from "../renderPage";

const state = {
    profilePage : {
        posts : [    
        ],
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

export const addPost = (postText) => {
    const newPost = { message : postText };
    state.profilePage.posts.push(newPost)
    renderPage(state);
}

export default state;