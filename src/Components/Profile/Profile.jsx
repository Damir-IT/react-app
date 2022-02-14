import React from 'react'
import Banner from './Banner/Banner'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import css from './Profile.module.css'
import Avatar from './Avatar/Avatar'
import PostInputArea from './Post/PostInputArea/PostInputArea'
import Post from './Post/Post'
import Preloader from '../../layouts/Preloader/Preloader'
const Profile = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }
  const postList = props.posts.map((p) => (
    <Post deletePost={props.deletePost} post={p} />
  ))

  return (
    <div className={css.body}>
      <Banner />
      <div className={css.content}>
        <Avatar profilePhoto={props.userProfile.photos.large} />
        <ProfileInfo profileStatus={props.userProfile.aboutMe} />
      </div>
      {props.userProfile.fullName}
      <PostInputArea
        showPostInput={props.showPostInput}
        newPost={props.newPost}
        addPost={props.addPost}
      />
      <div className={css.singlePost}>{postList}</div>
    </div>
  )
}
export default Profile
