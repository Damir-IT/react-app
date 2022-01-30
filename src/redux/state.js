import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";



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
    // DISPATCHER

    dispatch (action) {
        this.getState().profilePage = profilePageReducer(
            action,
            this.getState().profilePage
        )

        this.getState().dialogsPage = dialogsPageReducer(
            action,
            this.getState().dialogsPage
        )

        this.reRenderPage()
            
    }
}


export  { 
    store,
};

