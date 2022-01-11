import React from 'react'
import Banner from './Banner/Banner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import css from "./Profile.module.css"
import Avatar from './Avatar/Avatar';
import PostArea from './Post/PostArea/PostArea';
const Profile = () => {
    return (
      <div className={css.body}>
        <Banner />
        <div className={css.content}>
          <Avatar />
          <ProfileInfo />
        </div >
        <div className={css.posts}></div>
          <PostArea />
        {/*
        <Comment /> */}
    </div>
    )
}
export default Profile;

