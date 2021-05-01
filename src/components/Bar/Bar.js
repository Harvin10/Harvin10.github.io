import React from 'react';
import styles from './Bar.module.css';

function Bar(props) {
    return (
        <div style={{ height:props.height }} className= {` ${styles.Bar} Bars `} ></div>
    )
}

export default Bar;