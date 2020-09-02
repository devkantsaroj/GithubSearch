import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static defaultProps = {
        title : 'Github Explorer',
        icon : 'fa fa-github',
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="Navbar">
                <i className={this.props.icon}></i> {'\u00A0'} {this.props.title}
                {this.props.children || null}
            </div>
        )
    }
}

export default Navbar
