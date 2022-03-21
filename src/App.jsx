import './App.css'
import NotFound from './layouts/NotFound/NotFound'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout/Layout'
import { Message } from './components/Dialogs/Message/Message'

import ProfilePageContainer from './pages/profile_page/ProfilePageContainer'
import UsersPageContainer from './pages/users_page/UsersPageContainer'
import DialogsPageContainer from './pages/dialogs_page/DialogsPageContainer'
import LoginPage from './pages/login_page/LoginPage'

function App() {
  return (
    <div className="app">
      <div className="app__main">
        <Routes>
          <Route indext element={<Navigate to="/profile" />} />
          {/* 
          Routes wraps around the Route options.
          When url path is matched the appropriate
          component is displayed 
           */}
          <Route path="/" element={<Layout />}>
            {/* 
            Each <Route> has a path(address) 
            and an element (component that should be called
            when the user is in path) attributes
          */}
            <Route path="dialogs/*" element={<DialogsPageContainer />}>
              {/*
               ContainerComponent is there to provide all the required BLL
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

            <Route path=":userID" element={<ProfilePageContainer />} />
            {/* 
            :variable allows react router to understand, what should be loaded if something follows
            */}
            <Route path="users" element={<UsersPageContainer />} />
            <Route path="*" element={<NotFound />} />

            {/* 
            Any other path, that is not listed above will result in a 'Not Found' page being loaded 
            */}
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export { App }
