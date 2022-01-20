import React from 'react'
import Banner from './Banner/Banner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from "./Profile.module.css"
import Avatar from './Avatar/Avatar';
import PostArea from './Post/PostArea/PostArea';
import Post from './Post/Post';


const Profile = (props) => {

  const makePost = props.posts.map(
    post => <Post 
              getPostIndex={ props.getPostIndex } 
              deletePost={ props.deletePost } 
              message={ post.message } 
              post={ post }
              /> 
    )   
    
  
    return (
      <div className={css.body}>
        <Banner />
        <div className={css.content}>
          <Avatar />
          <ProfileInfo />
        </div >
          <PostArea newPost={ props.newPost } showPostInput={ props.showPostInput } addPost={ props.addPost } />
          <div className={ css.singlePost }>
            { makePost }
          </div>
      </div>
    )
}
export default Profile;

