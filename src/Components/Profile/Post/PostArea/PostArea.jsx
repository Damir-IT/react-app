import React from 'react'
import Button from '../../../Button/Button';
import css from './PostArea.module.css'


const PostArea = (props) => {
    return (
        <form className={css.body}> 
            <input className={css.input} type='text'></input>
            <div className={css.button}>
                <Button name='Post' />
            </div>
        </form>
    )
}

export default PostArea;
