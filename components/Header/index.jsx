import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'
import BbqLogo from '../../static/img/svg-icons/bbq-agency-logo.svg'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>

                <Link to={ prefixLink('/')} className='header__link header__link--logo' activeClassName='is-selected' onlyActiveOnIndex>
                    {/*<img src={ prefixLink(BbqLogo) } alt='BBQ Agency Logo SVG' />*/}
                    <span>BBQ Agency</span>
                    <Ink />
                </Link>

                <Link to={ prefixLink('/contacts/')} className='header__link' activeClassName='is-selected'>
                    <span>Contacts</span>
                    <Ink />
                </Link>

            </div>
        );
    }
}

export default Header
