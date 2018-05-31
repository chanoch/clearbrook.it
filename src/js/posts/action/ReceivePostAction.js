    
export default function ReceivePostAction() {
    const RECEIVE_POST = 'RECEIVE_POST';

    const receivePostActionCreator = function(post) {
        return {
            type: RECEIVE_POST,
            post,
            receivedAt: Date.now()
        }
    };

    return {
        type: RECEIVE_POST,
        
        dispatchAction(dispatch, params) {
            const {post} = params;
            dispatch(receivePostActionCreator(post));
        },

        reducer(state, action) {
            return {
                ...state,
                action: RECEIVE_POST,
                post: action.post,
            }
        }    
    }
}