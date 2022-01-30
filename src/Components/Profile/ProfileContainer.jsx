import React from 'react'
import { StoreContext } from '../../redux/context';
import Profile from './Profile';


const ProfileContainer = () => {
    return (
      <StoreContext.Consumer> 
        { store => 
          {const state = store.getState();
           return (
              <Profile
              posts={ state.profilePage.posts } 
              newPost={ state.profilePage.newPost}/>
           )
          }
        }
      </StoreContext.Consumer>
    )
}
export default ProfileContainer;
