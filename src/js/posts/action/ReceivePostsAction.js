/** 
 */
export default function ReceivePostsAction() {
    const RECEIVE_POSTS = 'RECEIVE_POSTS';
    
    const actionCreator = function(posts) {
        return {
            type: RECEIVE_POSTS,
            posts,
            receivedAt: Date.now()
        }
    };

    return {
        type: RECEIVE_POSTS,
        
        dispatchAction(dispatch, posts) {
            dispatch(actionCreator(posts));
        },

        reducer(state, action) {
            return {
                ...state,
                action: RECEIVE_POSTS,
                posts: action.posts,
            }
        }
    }
}