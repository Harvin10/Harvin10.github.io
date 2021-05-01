import React from 'react';
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';
import styles from './PathFindingController.module.css';

function PathFindingController(props) {
    return (
        <div>
            <div className={ styles.Controller }>
                <Button redirect={ "." } effect={ props.bubbleSort } name="Bubble Sort" />
                <Button redirect={ "." } effect={ props.selectionSort } name="Selection Sort" />
                <Button redirect={ "." } effect={ props.mergeSort } name="Merge Sort" />
                <Button redirect={ "." } effect={ props.quickSort } name="Quick Sort" />
                <Input type="range" value={ props.timeValue } label="Time" />
                <Input type="range" value={ props.barValue } label="Bar" />
            </div>
        </div>
    )
}

export default PathFindingController;