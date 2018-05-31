import PostService from '../service/PostService';
import ReceivePosts from './ReceivePostsAction';

/** 
 */
export default function ListPosts(uri) {
    const LIST_POSTS = "LIST_POSTS";
    
    const actionCreator = () => {
        return {
            type: LIST_POSTS,
        }        
    };

    const loadPosts = dispatch => {
        (new PostService()).fetchPosts(posts => {
            ReceivePosts().dispatchAction(dispatch, posts);
        });
    };

    return {
        type: LIST_POSTS,

        middleware() {
            return store => dispatch => action => {
                dispatch(action);
                if(action.type===LIST_POSTS) {
                    loadPosts(dispatch);
                }
            }
        },

        dispatchAction(dispatch) {
            dispatch(actionCreator());
        },
    }
}