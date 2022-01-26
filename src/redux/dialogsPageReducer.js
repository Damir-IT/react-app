
const MESSAGE_INPUT = 'SHOW-MESSAGE-INPUT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsPageReducer = (action, state) => {
    switch (action.type) {
        case MESSAGE_INPUT:
            state.newMessage = action.input;
            return state;
        case SEND_MESSAGE:
            const newMessage = { message: state.newMessage };
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
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

