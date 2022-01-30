import React from 'react'
import { StoreContext } from '../../../../redux/context';
import { 
    addPostActionCreator, 
    postInputActionCreator 
} from '../../../../redux/profilePageReducer';
import PostArea from './PostArea';




const PostAreaContainer = () => {
    return (
        <StoreContext.Consumer>
            {store =>{

                const addPost = () => store
                    .dispatch( addPostActionCreator() );
        
    
                const changePostInput = (input) => {
                    store.dispatch(
                    postInputActionCreator(input)
                    )
                }     
                return (  
                    <PostArea 
                        changePostInput={ changePostInput } 
                        addPost={ addPost } 
                        newPost={ store.getState().profilePage.newPost }
                    />
                )
            }
            }
    </StoreContext.Consumer>
    )
}

export default PostAreaContainer;
