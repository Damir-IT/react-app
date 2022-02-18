import React from 'react'
import { Link } from 'react-router-dom'
import css from '../../../pages/dialogs_page/DialogsPage.module.css'

const DialogItem = (props) => {
  const path = `${props.id}`
  return (
    <div>
      <Link className={css.dialogItem} to={path}>
        {props.name}
      </Link>
    </div>
  )
}

export default DialogItem
