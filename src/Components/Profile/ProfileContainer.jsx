import React from 'react'
import { connect } from 'react-redux'
import {
  addPost,
  deletePost,
  showPostInput,
  setUserProfile,
} from '../../redux/actions/profile_page/profilePageACs'
import Profile from './Profile'

import { useParams } from 'react-router'
import { usersAPI } from '../../api/api'

const withRouter = (Component) => {
  //since withRouter is no longer there in react-router v6
  //this is an alternative to allow HOC using within
  // a class component
  return (props) => {
    const userID = useParams().userID
    return <Component userID={userID} {...props} />
  }
}

class ProfilePageContainer extends React.Component {
  componentDidMount = () => {
    usersAPI.getUserProfile(this.props.userID).then((data) => {
      debugger
      this.props.setUserProfile(data)
    })
  }
  render = () => (
    <Profile {...this.props} userProfile={this.props.userProfile} />
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPost,
    userProfile: state.profilePage.userProfile,
  }
}
const URLMatchedProfilePageContainer = withRouter(ProfilePageContainer)
export default connect(mapStateToProps, {
  addPost,
  deletePost,
  showPostInput,
  setUserProfile,
})(URLMatchedProfilePageContainer)
