import React from 'react';
import styles from './PopUpMenuButton.module.css';
import menu from '../../image/menu.svg';
import cross from '../../image/cross.svg';

function PopUpMenu(props) {
    return (
        <div className={ styles.button } onClick={() => {
            if(props.isClick === true) {
                props.viewMenu(false);
            } else {
                props.viewMenu(true);
            }
            }}>
            { props.isClick ? <img src={ cross } alt="cross"/> : <img src={ menu } alt="three stripe"/> }
        </div>
    );
}

export default PopUpMenu;