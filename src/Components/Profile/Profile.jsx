import React from 'react'
import Banner from './Banner/Banner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from "./Profile.module.css"
import Avatar from './Avatar/Avatar';
import PostAreaContainer from './Post/PostArea/PostAreaContainer';
import PostContainer from './Post/PostContainer';


const Profile = (props) => {
  debugger;
  const makePost = props.profilePage.posts
    .map(
        post => <PostContainer
                  dispatch={ props.dispatch } 
                  message={ post.message } 
                  post={ post }/> 
    )   
    
  
    return (
      <div 
        className={ css.body }>
        <Banner />
        <div 
          className={ css.content }>
          <Avatar />
          <ProfileInfo />
        </div >
          <PostAreaContainer 
            dispatch={ props.dispatch }
            newPost={ props.profilePage.newPost} />
          <div 
            className={ css.singlePost }>
            { makePost }
          </div>
      </div>
    )
}
export default Profile;

