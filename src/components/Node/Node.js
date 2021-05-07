import React, { useState } from 'react';
import styles from './Node.module.css';

function Node(props) {
    const [isWall, setWall] = useState(false);
    return (
        <div className= { `Nodes 
                           ${styles.Node} 
                           ${props.node.isStart ? styles.isStart : ""} 
                           ${props.node.isEnd ? styles.isEnd : ""}
                           ${props.node.isWall || isWall ? styles.isWall : ""}` 
                        } 
             onClick={ () => { 
                setWall(!isWall);
                props.node.isWall = !isWall;
             } }
        ></div>
    )
}

export default Node;