import React from 'react'
import { Outlet } from 'react-router'
import HeaderContainer from '../Header/HeaderContainer'
import { Menu } from '../Menu/Menu'
import css from './Layout.module.css'

const Layout = (props) => {
  return (
    <div>
      <HeaderContainer />
      <div className={css.menu}>
        <Menu />
      </div>
      <Outlet />
      {/* 
                <Outlet/> is a place holder that tells Router
                where to put all the rendered content, once
                the user is in path.
                Meanwhile the Layout will remain the same
             */}
    </div>
  )
}

export { Layout }
