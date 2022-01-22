import React from 'react'
import Button from '../../../Button/Button';
import css from './PostArea.module.css'


const PostArea = (props) => {
   
    const postRef = React.createRef();
    
    const addPost = () => props.dispatch( { type: 'ADD-POST' } )
    

    const postInput = () => {
        const input = postRef.current.value;
        props.dispatch(
            {
                type: 'SHOW-POST-INPUT', 
                input: input
            }
        )
    }
   
    return (
        <div  
            className={css.body}> 
            <textarea 
                value={ props.newPost } 
                onChange={ postInput } 
                ref={ postRef } 
                className={ css.input } />

            <div 
                className={css.button}>
                <Button 
                    onClick={ addPost } 
                    name='Post' />
            </div>
        </div>
    )
}

export default PostArea;
