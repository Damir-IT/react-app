const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const POST_INPUT = 'SHOW-POST-INPUT';

const profilePageReducer = (action, state) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = { message : state.newPost };
            state.posts.push(newPost)
            state.newPost = '' ;
            return state;

        case DELETE_POST:
            state.posts.splice(action.post, 1);
            return state;

        case POST_INPUT:
            state.newPost = action.input;
            return state;
        default:
            return state;
    }

}

//ACTION-CREATORS
const postInputActionCreator = (input) => ({
    type: POST_INPUT,
    input: input,
})
const addPostActionCreator = () => ({ type: ADD_POST })

const deletePostActionCreator = (post) => (
    { type: DELETE_POST, 
        post: post 
    }
)


export  { 
    profilePageReducer,

    //variables
    ADD_POST,
    DELETE_POST,
    POST_INPUT,

    //actionCreators
    addPostActionCreator,
    postInputActionCreator,
    deletePostActionCreator,
    };

