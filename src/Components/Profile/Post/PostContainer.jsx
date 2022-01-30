import React from 'react'
import { deletePostActionCreator } from '../../../redux/profilePageReducer'
import Post  from './Post'

const PostContainer = (props) => {
    debugger;
    const deletePost = () => {
        props.dispatch( 
            deletePostActionCreator(props.post)
            );
    }

    return (
    <Post 
        deletePost={ deletePost } 
        messages={ props.message }
        />
    )
}

export default PostContainer;
