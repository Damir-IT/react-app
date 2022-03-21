import React from 'react'
import { Menu } from './Menu'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/thunks/userPageThunks'

const MenuContainer = (props) => {
  alert(props.userID)
  return <Menu {...props} />
}
const mapStateToProps = (state) => {
  return {
    userID: state.auth.userID,
  }
}

export default connect(mapStateToProps, { getUserProfile })(MenuContainer)
