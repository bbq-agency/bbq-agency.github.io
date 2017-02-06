import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';

import LogoCore from '../SVG/LogoCore';
import LogoDesign from '../SVG/LogoDesign';
import LogoDevops from '../SVG/LogoDevops';
import LogoFront from '../SVG/LogoFront';
import LogoInegration from '../SVG/LogoInegration';
import LogoMarketing from '../SVG/LogoMarketing';
import LogoOperation from '../SVG/LogoOperation';
import LogoPm from '../SVG/LogoPm';
import LogoProduct from '../SVG/LogoProduct';
import LogoPromo from '../SVG/LogoPromo';
import LogoQa from '../SVG/LogoQa';
import LogoRamon from '../SVG/LogoRamon';
import LogoSmm from '../SVG/LogoSmm';
import LogoTimur from '../SVG/LogoTimur';

import './style.scss'
import BbqLogo from '../../static/img/svg-icons/bbq-agency-logo.svg'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.increment = 0;
        this.swap();

    }
    swap() {
        this.counter = setInterval(() => {
            this.increment++
            this.forceUpdate();
        }, 1400)
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }
    
    render() {
        const {route} = this.props
        const page = route.page.data

        let icon

        if (this.increment % 14 === 1) {
            icon = <LogoTimur key='LogoTimur' />
        } else if (this.increment % 14 === 2) {
            icon = <LogoDesign key='LogoDesign' />
        } else if (this.increment % 14 === 3) {
            icon = <LogoPm key='LogoPm' />
        } else if (this.increment % 14 === 4) {
            icon = <LogoFront key='LogoFront' />
        } else if (this.increment % 14 === 5) {
            icon = <LogoCore key='LogoCore' />
        } else if (this.increment % 14 === 6) {
            icon = <LogoInegration key='LogoInegration' />
        } else if (this.increment % 14 === 7) {
            icon = <LogoQa key='LogoQa' />
        } else if (this.increment % 14 === 8) {
            icon = <LogoDevops key='LogoDevops' />
        } else if (this.increment % 14 === 9) {
            icon = <LogoPromo key='LogoPromo' />
        } else if (this.increment % 14 === 10) {
            icon = <LogoMarketing key='LogoMarketing' />
        } else if (this.increment % 14 === 11) {
            icon = <LogoOperation key='LogoOperation' />
        } else if (this.increment % 14 === 12) {
            icon = <LogoProduct key='LogoProduct' />
        } else if (this.increment % 14 === 13) {
            icon = <LogoSmm key='LogoSmm' />
        } else {
            icon = <LogoRamon key='LogoRamon' />
        }

        return (
            <div className='homepage'>
                <img src={ (BbqLogo) } className='homepage__img' alt='BBQ Agency Logo SVG' />
                <MorphReplaceResize className='homepage__morph' rotation={'none'}>
                    {icon}
                </MorphReplaceResize>
                <h2 className='homepage__slogan'>We makes websites!</h2>
                <div dangerouslySetInnerHTML={{ __html: page.body}} />
            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
