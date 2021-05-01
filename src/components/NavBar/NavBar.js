import React from 'react';
import Hyperlink from '../Hyperlink/Hyperlink.js';
import styles from './NavBar.module.css';

function NavBar(props) {
    return (
        <div className={ styles.nav_bar }>
            { props.route.map((route) => {
                    return <Hyperlink route={ route } viewMenu={ props.viewMenu } />
                })
            }
        </div>
    );
}

export default NavBar;