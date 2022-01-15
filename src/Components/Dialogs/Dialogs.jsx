import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import css from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    const dialogList = props.dialogs
        .map(dialog => <DialogItem name={ dialog.name } id={ dialog.id } />)
    
    const messageList = props.messages
        .map(m => <Message id={ m.id } message={ m.message } /> )

    return (

        <div className={css.body}>
         
            <div className={css.dialogs}>
                
                { dialogList }

             </div>
            <div className={css.dialogWindow}>

                { messageList }

            </div>
     
        </div>

    )
}

export default Dialogs;