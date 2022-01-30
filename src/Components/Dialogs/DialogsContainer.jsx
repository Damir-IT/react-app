import  React  from 'react'
import { 
    messageInputActionCreator, 
    sendMessageActionCreator
} from '../../redux/dialogsPageReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    
    // FUNCTIONALITY
    const showMessage = (input) => {
        props.dispatch(
                messageInputActionCreator(input)
            )
    }
    const sendMessage = () => {
        props.dispatch(
            sendMessageActionCreator()
            )
    }
    return (
        <Dialogs 
            dialogs={ props.dialogPage.dialogs } 
            messages={ props.dialogPage.messages }
            showMessage={ showMessage }
            sendMessage={ sendMessage }
            newMessage={ props.dialogPage.newMessage}
        />
    )
   
}
export default DialogsContainer;