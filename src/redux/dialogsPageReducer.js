
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
    
    switch (action.type) {
        case MESSAGE_INPUT:
            return {
                ...state,
                newMessage: action.input,
            }
        
        case SEND_MESSAGE: 
            return {
                ...state,
                messages: [
                    ...state.messages, 
                    { message: state.newMessage }
                ],
                newMessage: '',
            }
            
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

