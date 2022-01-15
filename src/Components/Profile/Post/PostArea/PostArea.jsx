import React from 'react'
import Button from '../../../Button/Button';
import Profile from '../../Profile';
import Post from '../Post';
import css from './PostArea.module.css'


const PostArea = (props) => {
    return (
        <form onSubmit={<Profile />} enctype="text/plain" className={css.body}> 
            <input className={css.input} type='text'></input>
            <div className={css.button}>
                <Button name='Post' />
            </div>
        </form>
    )
}

export default PostArea;
