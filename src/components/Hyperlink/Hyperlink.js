import React from 'react';
import styles from './Hyperlink.module.css';
import { Link } from 'react-router-dom';

function Hyperlink(props) {
    return (
        <Link to={ props.route.link } className={ styles.hyperlink } key={ props.route.id.toString() } onClick={ () => {
            props.viewMenu(false);
        }
        }>
            { props.route.name }</Link>
    );
}

export default Hyperlink;