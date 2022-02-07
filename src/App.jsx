import './App.css'
import NotFound from './components/NotFound/NotFound'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Message } from './components/Dialogs/Message/Message'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersPageContainer from './components/Users/UsersPageContainer'

function App() {
  return (
    <div className="app">
      <div className="app__main">
        <Routes>
          {/* 
          Routes wraps the components 
          that may access routing features
           */}
          <Route path="/" element={<Layout />}>
            {/* 
            Each <Route> has a path(address) 
            and an element (component that should be called
            when the user is in path) attributes
          */}
            <Route path="dialogs/*" element={<DialogsContainer />}>
              {/*
               ContainerComponent is there to provide all the required BL
               for the dumb component, that is there only to 
               display the passed via props content.
               */}
              <Route path="dialogs/:id" element={<Message />} />
            </Route>
            {/* 
              Usually <Route/> is closed right away.
              If it wraps other <Routes> with </Route>
              one can use <Outlet/> to fit all the called components there.
              NB! Check <Layout/>
             */}
            <Route index element={<ProfileContainer />} />
            <Route path="users" element={<UsersPageContainer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export { App }
