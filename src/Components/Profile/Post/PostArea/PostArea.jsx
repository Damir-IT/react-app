import React from 'react'
import Button from '../../../Button/Button';
import css from './PostArea.module.css'


const PostArea = (props) => {
   
    const postRef = React.createRef();
    
    const addPosts = () => {
      const post = postRef.current.value;
      props.addPost(post)
      postRef.current.value = '';
    }  

    return (
        <div  className={css.body}> 
            <textarea ref={ postRef } className={css.input}></textarea>
            <div className={css.button}>
                <Button onClick={ addPosts } name='Post' />
            </div>
        </div>
    )
}

export default PostArea;
