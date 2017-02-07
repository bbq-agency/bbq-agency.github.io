import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

import favicon32 from './static/img/favicons/favicon-32.png'
import favicon144 from './static/img/favicons/favicon-144.png'
import ogImage from './static/img/og-images/bbq-agency.jpg'


const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    displayName: 'HTML',
    propTypes: {
        body: React.PropTypes.string,
    },
    render() {
        const {body, route} = this.props
        const title = DocumentTitle.rewind()

        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={ {    __html: require('!raw!postcss!./public/styles.css')} } />
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
                    <title>{ title }</title>
                    <meta name='description' content='BBQ Agency - We Make Sites' />
                    { css }
                    <link rel="shortcut icon" href={ prefixLink(favicon32) } />
                    <link rel="apple-touch-icon" href={ prefixLink(favicon144) } />
                    <meta property="og:image" content={ prefixLink(ogImage) } />
                </head>
                <body>
                    <span id="react-mount" dangerouslySetInnerHTML={ {    __html: this.props.body} } />
                    <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
                </body>
            </html>
        )
    },
})
