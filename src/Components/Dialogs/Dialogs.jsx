import React from 'react'
import { BrowserRouter, Link, Routes, Route, Outlet, NavLink } from 'react-router-dom'
import css from './Dialogs.module.css'

const DialogItem = (props) => {
    const path = props.id;
    return (
        <div>
            <NavLink className={css.dialogItem} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <Routes> 
            <Route path={ props.id }>{ props.message }</Route>
        </Routes >
    )
}

const Dialogs = () => {
    return (

        <div className={css.body}>
            <div className={css.dialogs}>
                <DialogItem name='Dasha' id='1' />
                <DialogItem name='Damir' id='2' />
                <DialogItem name='Dimych' id='3' />
                    <div className={css.dialogWindow}>
                        <Message is='/' message='sup' />
                    </div>
                </div>
     
        </div>
    )
}

export default Dialogs;