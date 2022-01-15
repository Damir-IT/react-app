import React from 'react'
import Banner from './Banner/Banner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from "./Profile.module.css"
import Avatar from './Avatar/Avatar';
import PostArea from './Post/PostArea/PostArea';
import Post from './Post/Post';


const Profile = (props) => {
    

    const posted = props.posts.map(post => <Post message={ post.message } /> )

    return (
      <div className={css.body}>
        <Banner />
        <div className={css.content}>
          <Avatar />
          <ProfileInfo />
        </div >
          <PostArea />
          <div className={ css.singlePost }>
            { posted }
          </div>
    </div>
    )
}
export default Profile;

