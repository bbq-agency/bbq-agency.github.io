import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss';
import BbqLogo from '../../static/img/svg-icons/bbq-agency-logo.svg'

class Page extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='page'>
                <div className='page__content'>

                    <img src={ (BbqLogo) } className='page__img' alt='BBQ Agency Logo SVG' />

                    <h1>BBQ Agency</h1>

                    <div className='page__text'>
                        <span>Ukraine, Kyiv</span>
                        <span>+ 380 66 665 65 65</span>
                        <span>+ 380 66 665 65 65</span>
                        <span>info@bbq.com</span>
                    </div>

                </div>
            </div>
        );
    }
}

Page.propTypes = {
    page: React.PropTypes.object,
}

export default Page
