import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './../Dialogs.module.css'

const DialogItem = (props) => {

    const path =`${props.id}`;

    return (
        <div>
            <NavLink 
                className={ css.dialogItem } 
                to={ path }
                >{ props.name }
            </NavLink>
        </div>
    )
}


export default DialogItem;