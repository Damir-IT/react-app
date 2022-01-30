
import { connect } from 'react-redux'
import { deletePostActionCreator } from '../../../redux/profilePageReducer'
import Post  from './Post'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (post) => {
            dispatch(deletePostActionCreator(post));
        },

    }
}

const PostContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Post);

export default PostContainer;
