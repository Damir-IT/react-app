import React from 'react'
import Banner from './Banner/Banner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from "./Profile.module.css"
import Avatar from './Avatar/Avatar';
import PostAreaContainer from './Post/PostArea/PostAreaContainer';
import PostContainer from './Post/PostContainer';


const Profile = (props) => { 
  const postList = props.posts
    .map(
        post => <PostContainer
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
          <PostAreaContainer />
          <div 
            className={ css.singlePost }>
            { postList }
          </div>
      </div>
    )
}
export default Profile;

