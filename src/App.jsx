import './App.css'
import NotFound from './layouts/NotFound/NotFound'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout/Layout'
import { Message } from './components/Dialogs/Message/Message'
import DialogsPageContainer from './components/Dialogs/DialogsPageContainer'
import ProfilePageContainer from './components/Profile/ProfileContainer'
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
            <Route path="dialogs/*" element={<DialogsPageContainer />}>
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
            <Route path="profile/:userID" element={<ProfilePageContainer />} />
            <Route path="users" element={<UsersPageContainer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export { App }
