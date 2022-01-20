
const store = {
    _state : {
        profilePage : {
            posts : [
                {message: 'hi there'},
                {message: 'hello, world'},
                {message: 'barabashka'},
                {message: 'pater noster'},
                {message: 'qui es in celis'},
                {message: 'Ragnar Logbrock'},
                {message: 'You misspelled that one'},
            ],
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
    },
    showPostInput(input) {
        this._state.profilePage.newPost = input;
        this.reRenderPage(); },
    addPost() {
        const newPost = { message : this._state.profilePage.newPost };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPost = '' ;
        this.reRenderPage(); },
    deletePost(post) {
        this._state.profilePage.posts.splice(post, 1);
        this.reRenderPage();},
    reRenderPage () {},
    assign (observer) {
        this.reRenderPage = observer;
    }
}


export default store;