import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import css from './DialogsPage.module.css'
import { Message } from './Message/Message'
import Button from '../Button/Button'

const DialogsPage = (props) => {
  //DISPLAY

  const dialogList = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ))

  const messageList = props.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ))
  // FUNCTIONALITY
  const showMessageInput = (e) => {
    const input = e.target.value
    props.showMessageInput(input)
  }
  const sendMessage = () => {
    props.sendMessage()
  }

  //JSX MARKUP
  return (
    <div className={css.body}>
      <div className={css.dialogs}>{dialogList}</div>
      <div className={css.dialogWindow}>
        <p className={css.message}>{messageList}</p>
        <textarea
          value={props.newMessage}
          className={css.input}
          onChange={showMessageInput}
        />
        <div className={css.button}>
          <Button onClick={sendMessage} name="send" />
        </div>
      </div>
    </div>
  )
}

export default DialogsPage
