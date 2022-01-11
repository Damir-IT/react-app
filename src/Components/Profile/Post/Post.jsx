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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ipsa!
            </div>
        </div>
    )
}

export default Post;
