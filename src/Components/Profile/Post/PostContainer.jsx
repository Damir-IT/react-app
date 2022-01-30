import React from 'react'
import { StoreContext } from '../../../redux/context'
import { deletePostActionCreator } from '../../../redux/profilePageReducer'
import Post  from './Post'

const PostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                const deletePost = () => {
                    store.dispatch( 
                        deletePostActionCreator(props.post)
                        );
                }
                return(
                    <Post 
                        deletePost={ deletePost } 
                        messages={ props.message }
                        />
                )

                }
                
            }
        </StoreContext.Consumer>
    )
}

export default PostContainer;
