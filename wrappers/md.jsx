import React from 'react'
import DocumentTitle from 'react-document-title'
import HomePage from '../components/HomePage'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout === 'home') {
            template = <HomePage {...this.props}/>
        }

        return (
            <DocumentTitle title={ `${post.title}` }>
                <div>
                    { template }
                </div>
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
