import {
  SHOW_MESSAGE_INPUT,
  SEND_MESSAGE,
} from '../actions/dialogs_page/dialogsPageActionTypes'

const initialState = {
  dialogs: [
    { id: 1, name: 'Dasha' },
    { id: 2, name: 'Damir' },
    { id: 3, name: 'Artur' },
    { id: 4, name: 'Kriss' },
  ],
  messages: [
    { message: 'Hey there' },
    { message: 'Sup, bro' },
    { message: "How are you doin'??" },
  ],
  newMessage: '',
}

export const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE_INPUT:
      return {
        ...state,
        newMessage: action.input,
      }

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { message: state.newMessage }],
        newMessage: '',
      }

    default:
      return state
  }
}
