import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button(props) {
    const [isClick, setClick] = useState(false);
    let style = [styles.button];

    if(isClick) {
        style.push(styles.button_click);
    }

    return (
        <Router>
            <Link to={ props.redirect } className={ style.join(' ') } onClick={() => {
                props.effect();
                setClick(true);
                setTimeout(() => {
                    setClick(false);
                }, 200) ;
            }}>
                { props.name }
            </Link>
        </Router>
    )
}
export default Button;