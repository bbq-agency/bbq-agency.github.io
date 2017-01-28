import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';
import AnimalBull from '../SVG/AnimalBull';
import AnimalDog from '../SVG/AnimalDog';
import AnimalRabbit from '../SVG/AnimalRabbit';
import AnimalRhino from '../SVG/AnimalRhino';
import AnimalRooster from '../SVG/AnimalRooster';
import AnimalUnicorn from '../SVG/AnimalUnicorn';
import Ink from 'react-ink'

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
            icon = <AnimalBull key='AnimalBull' />
        } else if (this.increment % 6 === 2) {
            icon = <AnimalDog key='AnimalDog' />
        } else if (this.increment % 6 === 3) {
            icon = <AnimalRabbit key='AnimalRabbit' />
        } else if (this.increment % 6 === 4) {
            icon = <AnimalRhino key='AnimalRhino' />
        } else if (this.increment % 6 === 5) {
            icon = <AnimalRooster key='AnimalRooster' />
        } else {
            icon = <AnimalUnicorn key='AnimalUnicorn' />
        }

        return (
            <div className='homepage2'>
                <h1 className='title'>BBQ Agency</h1>
                <div className='homepage__bbqlogo'>
                    <img src='./bbq-agency-logo.svg' alt='BBQ Agency Logo SVG'/>
                </div>
                <div className='homepage__contacts'>Contacts</div>
                <div className='homepage'>
                    <MorphReplaceResize className='homepage__svg' width={300} height={300} rotation={'none'}>
                        {icon}
                    </MorphReplaceResize>
                </div>
                <h2 className='slogan'>We Makes Websites</h2>
                <div dangerouslySetInnerHTML={{ __html: page.body}} />
            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
