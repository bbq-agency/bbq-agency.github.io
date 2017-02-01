import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Ink from 'react-ink'
import { config } from 'config'

import './style.scss'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer__copyright'>2016 - 2017 © { config.siteTitle }</div>
                <div className='footer__powered'>
                    <span>Powered by </span>
                    <a href={ config.poweredUrl } className='footer__powered-link'>
                        { config.poweredTitle }
                        <Ink/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer
