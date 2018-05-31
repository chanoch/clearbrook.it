import React from 'react';
import PropTypes from 'prop-types';

import {Provider, connect } from 'react-redux';

import {Layout, Divider} from '@chanoch/clearsite-components';
import {PostSummary} from '@chanoch/clearblog-components';

import config from '../config';

class ListPostsPage extends React.Component {
    static propTypes = {
        posts: PropTypes.arrayOf(PropTypes.object).isRequired,
        store: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.history = props.history;
        this.viewPost = this.viewPost.bind(this);
    }

    viewPost(postKey, postTitle) {
        const base = this.props.viewPostBase;
        this.history.push(ViewPostAction().uri(base, postKey, postTitle));
    }

    render() {
        const {store, posts} = this.props;
        return (
            <Provider store={store}>
                <Layout title="Simple react blog." active={"home"} config={config}>
                    <div className="col-12">
                        <h1 className="section__heading">Posts</h1>
                        {posts && posts.map &&
                            posts.map((post) => {
                                return <PostSummary key={post.key} post={post} handleClick={this.viewPost} />
                            })
                        }
                    </div>
                </Layout>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        viewPostBase: state.routes.ViewPost
    }
};

import ViewPostAction from './posts/action/ViewPostAction';

const mapDispatchToProps = (dispatch) => ({

});

const ConnectedListPostsPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(ListPostsPage);

export default ConnectedListPostsPage;