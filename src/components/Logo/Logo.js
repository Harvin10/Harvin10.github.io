import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Logo() {
    return (
        <Router>
            <Link to='/'>
                <img src="" alt="Harvin Pratama Putra"/>
            </Link>
        </Router>
    );
}

export default Logo;