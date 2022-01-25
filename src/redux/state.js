const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const POST_INPUT = 'SHOW-POST-INPUT';
const MESSAGE_INPUT = 'SHOW-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
    //DATA
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
            newPost : '',
        },
        dialogsPage : {
            dialogs : [
                { id : 1, name : 'Dasha' },
                { id : 2, name : 'Damir' },
                { id : 3, name : 'Artur' },
                { id : 4, name : 'Kriss' },
                ],
            messages : [
                { message : 'Hey there' },
                { message : 'Sup, bro' },
                { message : 'How are you doin\'??' },
            ],
            newMessage : '',

        },
    },

    //METHODS

    getState () {
        return this._state;
    },
    reRenderPage () {},
    assign (observer) {
        this.reRenderPage = observer;
    },
    _showPostInput(input) {
        this._state.profilePage.newPost = input;
        this.reRenderPage(); 
    },
    _addPost() {
        const newPost = { message : this._state.profilePage.newPost };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPost = '' ;
        this.reRenderPage(); 
    },
    _deletePost(post) {
        this._state.profilePage.posts.splice(post, 1);
        this.reRenderPage();
    },
    _showMessageInput (input) {
        this._state.dialogsPage.newMessage = input;
        this.reRenderPage()
    },
    _sendMessage() {
        const newMessage = { message: this._state.dialogsPage.newMessage };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = '';
        this.reRenderPage();
        
    },

    // DISPATCHER

    dispatch (action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost()
                break;

            case DELETE_POST:
                this._deletePost(action.post)
                break;

            case POST_INPUT:
                this._showPostInput(action.input)
                break;
                
            case MESSAGE_INPUT:
                this._showMessageInput(action.input);
                break;
            case SEND_MESSAGE:
                this._sendMessage();
                break;
                
        }
            
    }
}

//ACTION-CREATORS
const postInputActionCreator = (input) => ({
    type: POST_INPUT,
    input: input,
})
const addPostActionCreator = () => ({ type: ADD_POST })

const deletePostActionCreator = (post) => (
    { type: DELETE_POST, 
        post: post 
    }
)

const messageInputActionCreator = (input) => (
    {
        type: MESSAGE_INPUT, 
        input: input
    }
)

const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE,
})
export  { 
    store,
    postInputActionCreator,
    addPostActionCreator,
    deletePostActionCreator,
    messageInputActionCreator,
    sendMessageActionCreator,
    // variables
    ADD_POST,
    DELETE_POST,
    MESSAGE_INPUT,
    POST_INPUT,
    SEND_MESSAGE,
};

