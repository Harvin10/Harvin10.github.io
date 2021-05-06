import React, { useState } from 'react';
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';
import styles from './PathFindingController.module.css';

function PathFindingController(props) {
    const [algorithm, setAlgorithm] = useState("breadthFirstSearch");

    return (
        <div>
            {/* <div className={ styles.Controller }>
                <Button redirect={ "/pathFinding" } effect={ props.breadthFirstSearch } name="Breadth First Search"/>
                <Input type="range" value={ props.timeValue } label="Time" />
                <Input type="range" value={ props.barValue } label="Bar" />
            </div> */}
            {props.width > 1080 ?
                <div className={ styles.Controller }>
                    <Button redirect={ "/pathFinding" } effect={ props.breadthFirstSearch } name="Breadth First Search"/>
                    <Input type="range" value={ props.timeValue } label="Time" />
                    <Input type="range" value={ props.barValue } label="Bar" />
                </div> 
            :
                <div className={ styles.Controller }>
                    <select onChange={ event => setAlgorithm(event.target.value) }>
                        <option value="breathFirstSearch" >Breath First Search</option>
                    </select>
                    <Button redirect={ "/pathFinding" } effect={ 
                        algorithm === "breadthFirstSearch" ?
                        props.breadthFirstSearch : ""
                        } name="Start" 
                    />
                    <Input type="range" value={ props.timeValue } label="Time" />
                    <Input type="range" value={ props.barValue } label="Bar" />
                </div>
            }
        </div>
    )
}

export default PathFindingController;