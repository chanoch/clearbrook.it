import React from 'react';
import PropTypes from 'prop-types';

import {Provider, connect } from 'react-redux';

import {Layout} from '@chanoch/chanoch-com-components';
import {Post} from '@chanoch/clearblog-components';

import config from '../config';

class ViewPostPage extends React.Component {
    static propTypes = {
        post: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {post, store} = this.props;
        return (
            <Provider store={store}>
                <Layout title="Simple react blog." active={"Blog"} config={config}>
                    <div className="col-12">
                    {post && 
                        <Post postKey={post.key} post={post}/>
                    }
                    </div>
                </Layout>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        post: state.post 
    }
};

const mapDispatchToProps = (dispatch) => ({});

const ConnectedViewPostPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(ViewPostPage);

export default ConnectedViewPostPage;