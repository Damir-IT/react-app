import React from 'react'
import { connect } from 'react-redux'
import { authAPI } from '../../api/api'
import { authenticateCurrentUser } from '../../redux/actions/auth/authAC'
import Header from './Header'

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.authenticateUser().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data
        this.props.authenticateCurrentUser(id, email, login)
      }
    })
  }
  render = () => <Header {...this.props} />
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
export default connect(mapStateToProps, { authenticateCurrentUser })(
  HeaderContainer
)
