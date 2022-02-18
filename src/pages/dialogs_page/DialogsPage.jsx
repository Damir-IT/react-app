import React from 'react'
import DialogItem from '../../components/Dialogs/DialogItem/DialogItem'
import css from './DialogsPage.module.css'
import { Message } from '../../components/Dialogs/Message/Message'
import Button from '../../components/Button/Button'

const DialogsPage = (props) => {
  //DISPLAY
  const dialogList = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ))

  const messageList = props.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ))

  //JSX MARKUP
  return (
    <div className={css.body}>
      <div className={css.dialogs}>{dialogList}</div>
      <div className={css.dialogWindow}>
        <p className={css.message}>{messageList}</p>
        <textarea
          value={props.newMessage} //displayes the BLL newMessage to make textarea a Controlled component
          className={css.input}
          onChange={(e) => {
            props.showMessageInput(e.target.value) //passes what the typed text to BLL
          }}
        />
        <div className={css.button}>
          <Button onClick={props.sendMessage} name="send" />
        </div>
      </div>
    </div>
  )
}

export default DialogsPage
