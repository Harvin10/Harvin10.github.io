import React from 'react';
import styles from './Node.module.css';

function Node(props) {
    return (
        <div className= { `${styles.Node} ${props.node.isStart ? styles.isStart : ""} ${props.node.isEnd ? styles.isEnd : ""}` } ></div>
    )
}

export default Node;