import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss';

class Page extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='page'>
                <h1>{ page.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: page.body}} />
            </div>
        );
    }
}

Page.propTypes = {
    page: React.PropTypes.object,
}

export default Page
