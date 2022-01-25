import React from 'react'
import { 
    addPostActionCreator, 
    postInputActionCreator 
} from '../../../../redux/state';
import Button from '../../../Button/Button';
import css from './PostArea.module.css'


const PostArea = (props) => {
   
    const postRef = React.createRef();
    
    const addPost = () => props.dispatch( addPostActionCreator() )
    

    const postInput = () => {
        const input = postRef.current.value;
        props.dispatch(postInputActionCreator(input))
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
