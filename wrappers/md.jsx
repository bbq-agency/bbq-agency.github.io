import React from 'react'
import DocumentTitle from 'react-document-title'
import Page from '../components/Page'
import HomePage from '../components/HomePage'
import Header from '../components/Header'

import './style.scss'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout === 'Page') {
            template = <Page {...this.props}/>
        } else if (layout === 'Home') {
            template = <HomePage {...this.props}/>
        }

        return (
            <DocumentTitle title={ `${post.title}` }>
                <div className='flex-sticky'>
                    <div className='flex-sticky__content'>
                        <Header {...this.props}/>
                        { template }
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
