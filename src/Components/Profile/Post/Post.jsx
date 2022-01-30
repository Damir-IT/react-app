import React from 'react'
import Button from '../../Button/Button'
import css from './Post.module.css'
import PostAvatar from './PostAvatar/PostAvatar'

const Post = (props) => {
    debugger;
    const deletePost = () => {
        props.deletePost()
    }

    return (
        <div 
            className={css.body}>
            <div>
               <PostAvatar />
            </div>
            <div 
                className={css.postText}>
                { props.messages }
            </div>
            <div 
                className={ css.button }>
                <Button name='Delete' 
                    onClick={ deletePost } />
            </div>
        </div>
    )
}

export default Post;
