import React from 'react'
import Button from '../../Button/Button'
import css from './Post.module.css'
import PostAvatar from './PostAvatar/PostAvatar'

const Post = (props) => {

    const postIndex = props.getPostIndex(props.message);

    const deletePost = () => {
        
        props.deletePost(postIndex)
    }

    return (
        <div className={css.body}>
            <div>
               <PostAvatar />
            </div>
            <div className={css.postText}>

                { props.message }
                { postIndex }

            </div>
            <div className={ css.button }>
                <Button name='Delete' onClick={ deletePost } />
            </div>
        </div>
    )
}

export default Post;
