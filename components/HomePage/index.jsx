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

import './style.scss'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.increment = 0;
        this.swap();
    }
    swap() {
        setInterval(() => {
            this.increment++
            this.forceUpdate();
        }, 1400)
    }
    render() {
        const {route} = this.props
        const page = route.page.data

        let icon

        if (this.increment % 6 === 1) {
            icon = <LogoCore key='LogoCore' />
        } else if (this.increment % 6 === 2) {
            icon = <LogoDesign key='LogoDesign' />
        } else if (this.increment % 6 === 3) {
            icon = <LogoDevops key='LogoDevops' />
        } else if (this.increment % 6 === 4) {
            icon = <LogoFront key='LogoFront' />
        } else if (this.increment % 6 === 5) {
            icon = <LogoInegration key='LogoInegration' />
        } else {
            icon = <LogoMarketing key='LogoMarketing' />
        }

        return (
            <div className='homepage'>
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
