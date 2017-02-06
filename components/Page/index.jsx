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
                <div className='page__text'>
                    <span>Ukraine, Kyiv</span>
                    <span>+ 380 66 665 65 65</span>
                    <span>+ 380 66 665 65 65</span>
                    <span>info@bbq.com</span>
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    page: React.PropTypes.object,
}

export default Page
