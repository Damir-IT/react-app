
import { connect } from 'react-redux';
import { 
    addPostActionCreator, 
    postInputActionCreator 
} from '../../../../redux/profilePageReducer';
import PostArea from './PostArea';


const mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changePostInput: (input) => {
            dispatch(postInputActionCreator(input))
        },
        addPost: () =>{ 
            dispatch(addPostActionCreator()) }
    }
}
const PostAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostArea);
export default PostAreaContainer;
