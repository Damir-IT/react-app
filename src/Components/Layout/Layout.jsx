import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import css from './Layout.module.css'

const Layout = (props) => {
    return (
  
        <div>
            <Header/>
            <div className={ css.menu }>
                <Menu />
            </div>
            <Outlet />
        </div>
    
    )
}

export default Layout;