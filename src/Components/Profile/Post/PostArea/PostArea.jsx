import React from 'react'
import { 
    addPostActionCreator, 
    postInputActionCreator 
} from '../../../../redux/profilePageReducer';
import Button from '../../../Button/Button';
import css from './PostArea.module.css'


const PostArea = (props) => {
   
    debugger;
    const addPost = () => props.dispatch( addPostActionCreator() );
    

    const postInput = (e) => {
        const input = e.target.value;
        props.dispatch(postInputActionCreator(input))
    }
   
    return (
        <div  
            className={css.body}> 
            <textarea 
                value={ props.newPost } 
                onChange={ postInput } 
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
