import React, { Component } from 'react';
import SortingController from '../SortingController/SortingController.js';
import styles from './SortingVisualizer.module.css';
import Bar from '../Bar/Bar.js'
import * as sortingAlgorithm from '../../Algorithm/sortingAlgorithm.js';

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            bars: [],
            time: 500, 
            bar: 500, 
            sorting: false
        };
    }

    //create array when first screen load
    componentDidMount() {
        this.resetArray();
        this.setState({bars: document.getElementsByClassName("Bars")});
    }

    //create new array when button click
    effect = () => {
        this.resetArray();
        sortingAlgorithm.state.break = true;
    }

    //return new array
    resetArray = () => {
        const array = [];
        for(let i = 0; i < this.state.bar; i++) {
            array.push(getRandomInt(5, 500));
        }
        this.setState({array: array});
    }

    //get time count when slider changes
    timeValue = (value) => {
        value *= 10;
        this.setState({time: value})
        sortingAlgorithm.state.break = true;
    }

    //get bar count when slider changes
    barValue = (value) => {
        value = value + 1;
        this.setState({bar: value})
        this.resetArray();
    }
    
    //call bubbleSort in sortingAlgorithm
    bubbleSort = () => {
        this.setState({sorting: true});
        sortingAlgorithm.state.break = false;
        let array = sortingAlgorithm.BubbleSort(this.state.array, this.state.bars, this.state.time);
        array
            .then(res => {
                // this.setState({array: res});
                this.setState({sorting: false});
            })
    }

    //call selectionSort in sortingAlgorithm
    selectionSort = () => {
        this.setState({sorting: true});
        sortingAlgorithm.state.break = false;
        let array = sortingAlgorithm.SelectionSort(this.state.array, this.state.bars, this.state.time);
        array
            .then(res => {
                // this.setState({array: res});
                this.setState({sorting: false});
            })
    }

    //call mergeSort in sortingAlgorithm
    mergeSort = () => {
        this.setState({sorting: true});
        let bars = [...this.state.bars];
        let array = sortingAlgorithm.MergeSort(this.state.array, bars, this.state.time);
        array
            .then(res => {
                this.setState({array: res});
                this.setState({sorting: false});
            })
    }

    //call quickSort in sortingAlgorithm
    quickSort = () => {
        this.setState({sorting: true});
        let bars = [...this.state.bars];
        let array = sortingAlgorithm.QuickSort(this.state.array, bars, this.state.time);
        array
            .then(res => {
                this.setState({array: res});
                this.setState({sorting: false});
            })
    }

    render() {
        return (
            <div className={ styles.Visualizer }>
                <div className={ styles.Bars }>
                    {this.state.array.map((value, key) => {
                        return <Bar height={ value } key={ key }/>
                    })}
                </div>
                <div className={ `${styles.Controller} ${(this.state.sorting) ? styles.hidden : ""}` }>
                    <SortingController 
                            effect={ this.effect } 
                            bubbleSort={ this.bubbleSort } 
                            selectionSort={ this.selectionSort }
                            mergeSort={ this.mergeSort } 
                            quickSort={ this.quickSort }
                            timeValue={ this.timeValue }   
                            barValue={ this.barValue }
                        />
                </div>
            </div>
        )
    }
}

export default SortingVisualizer;

//get rendom integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};