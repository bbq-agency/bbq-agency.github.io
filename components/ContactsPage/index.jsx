import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Ink from 'react-ink'

import './style.scss';
import BbqLogo from '../../static/img/svg-icons/bbq-logo.svg'

class Page extends React.Component {
    render() {

        return (
            <div className='contacts-page'>
                <div className='contacts-page__content'>

                    <div className='contacts-page__row'>
                        <img src={ (BbqLogo) } className='contacts-page__logo' alt='BBQ Logo' />
                    </div>

                    <div className='contacts-page__row'>
                        <a className='contacts-page__mailto-btn' href='mailto:info@bbq.com?subject=Hello, BBQ Agency'>
                            <span>info@bbq.com</span>
                            <Ink />
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Page
