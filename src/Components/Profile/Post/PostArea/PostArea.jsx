import React from 'react'
import Button from '../../../Button/Button';
import css from './PostArea.module.css'


const PostArea = (props) => {
   
    const postRef = React.createRef();
    
    const addPosts = () => {
      props.addPost()
      props.showPostInput(' ');
    }  

    const postInput = () => {
        const input = postRef.current.value;
        props.showPostInput(input)
    }
    return (
        <div  className={css.body}> 
            <textarea value={ props.newPost } onChange={ postInput } ref={ postRef } className={css.input} />
            <div className={css.button}>
                <Button onClick={ addPosts } name='Post' />
            </div>
        </div>
    )
}

export default PostArea;
