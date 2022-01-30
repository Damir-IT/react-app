import React from 'react'
import Button from '../../../Button/Button';
import css from './PostArea.module.css'


const PostArea = (props) => {

    const changePostInput = (e) => {
        const input = e.target.value;
        props.changePostInput(input)
    }
   
    return (
        <div  
            className={css.body}> 
            <textarea 
                value={ props.newPost } 
                onChange={ changePostInput } 
                className={ css.input } />

            <div 
                className={css.button}>
                <Button 
                    onClick={ props.addPost } 
                    name='Post' />
            </div>
        </div>
    )
}

export default PostArea;
