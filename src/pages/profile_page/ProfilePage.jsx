import React from 'react'
import Banner from '../../components/Profile/Banner/Banner'
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo'
import css from './ProfilePage.module.css'
import Avatar from '../../components/Profile/Avatar/Avatar'
import PostInputArea from '../../components/Profile/Post/PostInputArea/PostInputArea'
import Post from '../../components/Profile/Post/Post'
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
