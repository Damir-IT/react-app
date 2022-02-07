import { connect } from 'react-redux'
import {
  messageInputActionCreator,
  sendMessageActionCreator,
} from '../../redux/dialogsPageReducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
  // state is passed automatically
  return {
    //returns an object with state atrrs
    //that will be passed to props
    //during the second call

    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  //dispatch passed automatically
  return {
    //returns an object with dispatch atrrs
    //that will be passed to props
    //during the second call

    showMessage: (input) => {
      dispatch(messageInputActionCreator(input))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
  }
}

const DialogsContainer = connect(
  //1st function call
  mapStateToProps,
  //sets all the state related props attrs
  mapDispatchToProps
  //sets all the dispatch related props attrs
)(
  Dialogs
  // 2nd function call
  //calls the component
  //with the props set by
  //mapStateToProps || mapeDispatchToProps
)

export default DialogsContainer
