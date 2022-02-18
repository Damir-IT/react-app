import React from 'react'
import { connect } from 'react-redux'

import { authenticateMe } from '../../redux/thunks/authThunk'
import Header from './Header'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authenticateMe()
  }
  render = () => <Header {...this.props} />
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
export default connect(mapStateToProps, { authenticateMe })(HeaderContainer)
