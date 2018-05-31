import React from 'react';

import {Layout, Declaration} from '@chanoch/chanoch-com-components';

export default class Http404Page extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {config} = this.props;
        return (
            <Layout title="Page Not Found" active="home" config={config}>
                <Declaration title="We couldn't find that page."
                    text={`That link didn't work. Please try again or contact me on ${config.email} if you continue having problems.`} />
            </Layout>
        )
    }
}