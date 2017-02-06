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

                    <div className='page__text'>
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
