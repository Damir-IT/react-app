import  React  from 'react'
import DialogItem from './DialogItem/DialogItem'
import css from './Dialogs.module.css'
import { Message } from './Message/Message'
import { Outlet } from 'react-router-dom'
import { 
    messageInputActionCreator, 
    MESSAGE_INPUT, 
    sendMessageActionCreator
} from '../../redux/state'
import Button from '../Button/Button'


const Dialogs = (props) => {
    //DISPLAY

    const dialogList = props.dialogPage.dialogs
        .map(
                dialog => <DialogItem 
                    name={ dialog.name } 
                    id={ dialog.id } />
            )

    const messageList = props.dialogPage.messages
        .map(
                m => <Message 
                    id={ m.id } 
                    message={ m.message } /> 

            )
    // FUNCTIONALITY
    const showMessage = (e) => {
        const input = e.target.value;
        props.dispatch(
                messageInputActionCreator(input)
            )
    }
    const sendMessage = () => {
        props.dispatch(
            sendMessageActionCreator()
            )
    }
    
    //JSX MARKUP
    return (
        <div 
            className={css.body}>
            <div 
                className={css.dialogs}>
                { dialogList }
             </div>
            <div 
                className={css.dialogWindow}>
                <p className={ css.message }>{ messageList }</p>
                <textarea
                     value={ props.dialogPage.newMessage }
                     className={ css.input } 
                     onChange={ showMessage }/>
                <div className={ css.button }>
                    <Button onClick={ sendMessage } name='send'/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;