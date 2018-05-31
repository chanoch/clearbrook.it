import PostService from '../service/PostService';
import ReceivePostAction from './ReceivePostAction';
    
export default function ViewPostAction() {
    const VIEW_POST = "VIEW_POST";

    const actionCreator = function(postKey) {
        return {
            type: VIEW_POST,
            postKey,
        }
    };
    
    return {
        type: VIEW_POST,

        middleware() {
            return store => dispatch => action => {
                dispatch(action);
                if(action.type===VIEW_POST) {
                    PostService().fetchPost(
                        action.postKey, 
                        post => ReceivePostAction().dispatchAction(dispatch, {post})
                    );
                }
            }    
        },

        dispatchAction(dispatch, params) {
            const postKey = params.post_key;
            dispatch(actionCreator(postKey));
        },

        uri(base, postKey, postTitle) {
            return base
                .replace(':post_key', postKey)
                .replace(':post_title', postTitle);
        }
    }
}