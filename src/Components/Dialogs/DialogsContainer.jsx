import  React  from 'react'
import { StoreContext } from '../../redux/context'
import { 
    messageInputActionCreator, 
    sendMessageActionCreator
} from '../../redux/dialogsPageReducer'
import Dialogs from './Dialogs'


const DialogsContainer = () => {
    debugger;
    return (
        <StoreContext.Consumer>
            { store => {
                const showMessage = (input) => {
                    store.dispatch(
                            messageInputActionCreator(input)
                        )
                }
                const sendMessage = () => {
                    store.dispatch(
                        sendMessageActionCreator()
                    )
                }
                const state = store.getState();
                return (
                    <Dialogs 
                        dialogs ={ state.dialogsPage.dialogs } 
                        messages={ state.dialogsPage.messages }
                        showMessage={ showMessage }
                        sendMessage={ sendMessage }
                        newMessage={ state.dialogsPage.newMessage}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
    
   
}
export default DialogsContainer;