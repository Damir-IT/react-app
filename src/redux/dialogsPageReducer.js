
const MESSAGE_INPUT = 'SHOW-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
}

const dialogsPageReducer = (state = initialState, action) => {
    const newState = {}; 
    switch (action.type) {
        case MESSAGE_INPUT:
            newState = {
                ...state,
                newMessage: action.input,
            };
            return newState;
        
        case SEND_MESSAGE: 
            const newMessage = { message: state.newMessage };
            newState = {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage: '',
            }
        
            return newState;
        
        default:
            return state;
    }
}


//ACTION-CREATORS

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
    dialogsPageReducer,

    // variables
    MESSAGE_INPUT,
    SEND_MESSAGE,

    //actionCreators
    messageInputActionCreator,
    sendMessageActionCreator,
};

