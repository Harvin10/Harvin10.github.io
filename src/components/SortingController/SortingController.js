import React, { useState } from 'react';
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';
import styles from './SortingController.module.css';

function SortingController(props) {
    const [algorithm, setAlgorithm] = useState("bubbleSort");

    return (
        <div>             
            {props.width > 1080 ?
                <div className={ styles.Controller }>
                    <Button redirect={ "/sorting" } effect={ props.effect } name="Create New Array" />
                    <Button redirect={ "/sorting" } effect={ props.bubbleSort } name="Bubble Sort" />
                    <Button redirect={ "/sorting" } effect={ props.selectionSort } name="Selection Sort" />
                    <Button redirect={ "/sorting" } effect={ props.mergeSort } name="Merge Sort" />
                    <Button redirect={ "/sorting" } effect={ props.quickSort } name="Quick Sort" />
                    <Input type="range" value={ props.timeValue } label="Time" />
                    <Input type="range" value={ props.barValue } label="Bar" />
                </div> 
            :
                <div className={ styles.Controller }>
                    <Button redirect={ "/sorting" } effect={ props.effect } name="Create New Array" />
                    <select onChange={ event => setAlgorithm(event.target.value) }>
                        <option value="bubbleSort" >Bubble Sort</option>
                        <option value="selectionSort" >Selection Sort</option>
                        <option value="mergeSort" >Merge Sort</option>
                        <option value="quickSort" >Quick Sort</option>
                    </select>
                    <Button redirect={ "/sorting" } effect={ 
                        algorithm === "bubbleSort" ?
                        props.bubbleSort :
                        algorithm === "selectionSort" ?
                        props.selectionSort : 
                        algorithm === "mergeSort" ?
                        props.mergeSort : props.quickSort
                        } name="Start" 
                    />
                    <Input type="range" value={ props.timeValue } label="Time" />
                    <Input type="range" value={ props.barValue } label="Bar" />
                </div>
            }
        </div>
    )
}

export default SortingController;