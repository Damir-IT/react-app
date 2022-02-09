import React from 'react'
import Button from '../../../Button/Button'
import css from './PostInputArea.module.css'

const PostInputArea = (props) => {
  const changePostInput = (e) => {
    // e is event
    // event is passed automatically
    // event is passed every time onChange launches

    const input = e.target.value
    props.showPostInput(input)
  }

  return (
    <div className={css.body}>
      <textarea
        value={props.newPost}
        onChange={changePostInput}
        className={css.input}
      />

      <div className={css.button}>
        <Button onClick={props.addPost} name="Post" />
      </div>
    </div>
  )
}

export default PostInputArea
