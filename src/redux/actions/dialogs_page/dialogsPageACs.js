import { SHOW_MESSAGE_INPUT, SEND_MESSAGE } from './dialogsPageActionTypes'

export const showMessageInput = (input) => ({
  type: SHOW_MESSAGE_INPUT,
  input: input,
})

export const sendMessage = () => ({
  type: SEND_MESSAGE,
})
