
import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = (state) =>{
  // state is passed automatically
  return {
    //returns an object with state atrrs 
    //that will be passed to props 
    //during the second call 
    posts: state.profilePage.posts,
  }
}
const mapDispatchToProps = (dispatch) => {
  //dispatch passed automatically
  return {
    //returns an object with dispatch atrrs 
    //that will be passed to props
    //during the second call
    
  }
}

const ProfileContainer = connect(
  //1st function call
  mapStateToProps, 
  //sets all the state related props attrs
  mapDispatchToProps, 
  //sets all the dispatch related props attrs
  )(
    Profile
      // 2nd function call
      //calls the component 
      //with the props set by 
      //mapStateToProps || mapeDispatchToProps
    );

export default ProfileContainer;
