import React from 'react'
import css from './PostAvatar.module.css'

const Post = (props) => {
    return (
        <div className={css.body}>
            <img 
            className={css.postAvatar}
            src='https://i.pinimg.com/originals/5e/fe/46/5efe46a674da7d77cc8a02c858b77d0b.jpg'
            alt='avatar'
            />
        </div>
    )
}

export default Post;
