import React from 'react';

import {Layout, Declaration} from '@chanoch/clearsite-components';

import config from '../config';

export default class Http404Page extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout title="Page Not Found" active="home" config={config}>
                <Declaration title="We couldn't find that page."
                    text={`That link didn't work. Please try again or contact me on ${config.email} if you continue having problems.`} />
            </Layout>
        )
    }
}