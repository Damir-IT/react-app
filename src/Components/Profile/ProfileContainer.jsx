import React from 'react'
import { connect } from 'react-redux'
import {
  addPost,
  deletePost,
  showPostInput,
} from '../../redux/actions/profile_page/profilePageACs'
import Profile from './Profile'

class ProfilePageContainer extends React.Component {
  render = () => (
    <Profile
      posts={this.props.posts}
      addPost={this.props.addPost}
      deletePost={this.props.deletePost}
      showPostInput={this.props.showPostInput}
      newPost={this.props.newPost}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost,
  }
}

export default connect(mapStateToProps, {
  addPost,
  deletePost,
  showPostInput,
})(ProfilePageContainer)
