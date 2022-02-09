import React from 'react'
import { connect } from 'react-redux'
import {
  sendMessage,
  showMessageInput,
} from '../../redux/actions/dialogs_page/dialogsPageACs'

import DialogsPage from './DialogsPage'

class DialogsPageContainer extends React.Component {
  render = () => {
    return <DialogsPage {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage,
  }
}

export default connect(mapStateToProps, {
  sendMessage,
  showMessageInput,
})(DialogsPageContainer)
