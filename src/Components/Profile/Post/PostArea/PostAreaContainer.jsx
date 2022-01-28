import React from 'react'
import { 
    addPostActionCreator, 
    postInputActionCreator 
} from '../../../../redux/profilePageReducer';
import PostArea from './PostArea';




const PostAreaContainer = (props) => {

    const addPost = () => props
        .dispatch( addPostActionCreator() );
    

    const changePostInput = (input) => {
        props.dispatch(
            postInputActionCreator(input)
            )
    }
   
    return <PostArea 
        changePostInput={ changePostInput } 
        addPost={ addPost } 
        newPost={ props.newPost }
    />
}

export default PostAreaContainer;
