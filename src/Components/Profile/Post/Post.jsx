import React from 'react'
import css from './Post.module.css'
import PostAvatar from './PostAvatar/PostAvatar'

const Post = (props) => {

    return (
        <div className={css.body}>
            <div>
               <PostAvatar />
            </div>
            <div className={css.postText}>

                { props.message }

            </div>
        </div>
    )
}

export default Post;
