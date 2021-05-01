import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import NavBar from '../NavBar/NavBar.js';
import PopUpMenuButton from '../PopUpMenuButton/PopUpMenuButton.js';
import styles from './Header.module.css';


class Header extends Component {
    render() {
        return (
            <div className={ styles.header }>
                <Logo />
                { this.props.isMobile ? <PopUpMenuButton viewMenu={ this.props.viewMenu } isClick={ this.props.isClick } /> : <NavBar viewMenu={ this.props.viewMenu } route={ this.props.route } />}
            </div>
        );
    }
}

export default Header;