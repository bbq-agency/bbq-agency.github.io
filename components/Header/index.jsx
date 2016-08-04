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

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AnimalUnicorn: false,
            AnimalRhino: true,
            AnimalBull: false
        };
    }
    toggleAnimal() {
        this.setState({AnimalRhino: !this.state.AnimalRhino});
    }

    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div>
                <div className='homepage' onClick={this.toggleAnimal.bind(this)}>
                    <MorphReplace className='homepage__svg' rotation={'none'}>
                        {this.state.AnimalRhino ? <AnimalRhino key='AnimalRhino' /> :  <AnimalUnicorn key='AnimalUnicorn' /> }
                    </MorphReplace>
                    <Ink />
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    page: React.PropTypes.object,
}

export default Header
