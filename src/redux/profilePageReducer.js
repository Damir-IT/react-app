const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const POST_INPUT = 'SHOW-POST-INPUT';

const initialState = {
    posts : [
        {message: 'hi there'},
        {message: 'hello, world'},
        {message: 'barabashka'},
        {message: 'pater noster'},
        {message: 'qui es in celis'},
        {message: 'Ragnar Logbrock'},
        {message: 'You misspelled that one'},
    ],
    newPost : '',
}


const profilePageReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_POST: {

            const newPost = { message : state.newPost };
            const newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            newState.newPost = '' ;
            return newState;
        }

        case DELETE_POST: {
            const index = state.posts.indexOf(action.post)
            state.posts.splice(index, 1);

            const newState = {...state};
            newState.posts = [...state.posts];
            return newState;
        }

        case POST_INPUT: {
            const newState = {...state}
            newState.newPost = action.input
            return newState;

        }
        default:
            return state;
    }

}

//ACTION-CREATORS
const postInputActionCreator = (input) => ({
    type: POST_INPUT,
    input: input,
});
const deletePostActionCreator = (post) => (
    {type: DELETE_POST, post: post }
)

const addPostActionCreator = () => ({ type: ADD_POST });



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

