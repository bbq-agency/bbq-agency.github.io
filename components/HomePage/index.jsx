import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';

import * as ImageModule from '../SVG';

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
        const {route} = this.props;
        const page = route.page.data;
        const imageName = Object.keys(ImageModule)[(this.increment % 14) ];
        const ImageComponent = ImageModule[imageName];

        return (
            <div className='homepage'>
                <img src={ (BbqLogo) } className='homepage__img' alt='BBQ Agency Logo SVG' />
                <MorphReplaceResize className='homepage__morph' rotation={'none'}>
                    <ImageComponent key={imageName} />
                </MorphReplaceResize>
                <div className='homepage__slogan'>We makes websites!</div>
                <div dangerouslySetInnerHTML={{ __html: page.body}} />
            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
