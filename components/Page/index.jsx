import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Ink from 'react-ink'

import './style.scss';
import BbqLogo from '../../static/img/svg-icons/bbq-agency-logo.svg'

class Page extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='page'>
                <div className='page__content'>

                    <div>
                        <img src={ (BbqLogo) } className='page__logo' alt='BBQ Agency Logo' />
                    </div>

                    <div>
                        <a className='page__mailto' href='mailto:info@bbq.com?subject=Hello BBQ Agency'>
                            <span>info@bbq.com</span>
                            <Ink />
                        </a>
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
