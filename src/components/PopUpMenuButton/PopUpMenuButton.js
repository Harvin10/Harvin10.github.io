import React from 'react';
import styles from './PopUpMenuButton.module.css';

function PopUpMenu(props) {
    return (
        <div className={styles.button} onClick={() => {
            if(props.isClick === true) {
                props.viewMenu(false);
            } else {
                props.viewMenu(true);
            }
            }}>
            {props.isClick ? <img src="" alt="cross"/> : <img src="" alt="three stripe"/>}
        </div>
    );
}

export default PopUpMenu;