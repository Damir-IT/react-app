import React from 'react'
import { deletePostActionCreator } from '../../../redux/profilePageReducer'
import Button from '../../Button/Button'
import css from './Post.module.css'
import PostAvatar from './PostAvatar/PostAvatar'

const Post = (props) => {

    

    const deletePost = () => {
        props.dispatch( 
            deletePostActionCreator(props.post));
    }

    return (
        <div 
            className={css.body}>
            <div>
               <PostAvatar />
            </div>
            <div 
                className={css.postText}>
                { props.message }
            </div>
            <div 
                className={ css.button }>
                <Button name='Delete' onClick={ deletePost } />
            </div>
        </div>
    )
}

export default Post;
