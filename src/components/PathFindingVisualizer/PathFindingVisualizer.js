import React, { Component } from 'react';
import Node from '../Node/Node.js';
import PathFindingController from '../PathFindingController/PathFindingController.js';
import * as pathFindingAlgorithm from '../../Algorithm/pathFindingAlgorithm';
import styles from './PathFindingVisualizer.module.css';

class PathFindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            grid: [], //nodes object
            nodes: [], //nodes visualized
            Y: 0,
            StartX: 0,
            EndX: 0,
            marginBottom: 0,
            time: 10
        };
    }

    componentDidMount() {
        this.resetGrid();
        // let Nodes_Row = document.querySelectorAll(".Nodes_row");
        // Nodes_row.forEach(() => {
        //     Nodes_row.push
        // })
        this.setState({ nodes: document.getElementsByClassName("Nodes") });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
            this.resetGrid();
        }
    }

    resetGrid = () => {
        let grid = [];
        let nodeSize = 50;
        let height = (this.props.height - (this.props.height * 20 / 100) - 100) / nodeSize;
        let width = ((this.props.width - 100) / nodeSize);
        for(let i = 0; i < Math.floor(height); i++) {
            let row = [];
            for(let j = 0; j < Math.floor(width); j++) {
                row.push(this.nodeState(i, j, Math.floor(height), Math.floor(width)));
            }
            grid.push(row);
        }
        var margin_bottom = height * nodeSize - (grid.length * nodeSize);
        this.setState({
            grid: grid,  
            Y: Math.round(height / 2),
            StartX: Math.floor((width / 6) - 1), 
            EndX: Math.floor(width - (width / 6) + 1),
            marginBottom: margin_bottom
        });
    }

    nodeState = (x, y, height, width) => {
        const object = {
            x: x,
            y: y,
            position: Infinity,
            isVisited: false,
            isStart: x === Math.round(height / 2)  && y === Math.floor((width / 6) - 1),
            isEnd: x === Math.round(height / 2) && y === Math.floor(width - (width / 6) + 1)
        }
        return object;
    }

    breadthFirstSearch = () => {
        let Y = this.state.Y;
        let StartX = this.state.StartX;
        this.state.grid[Y][StartX].isVisited = true;
        let current = [
            {
                y: Y, 
                x: StartX
            }
        ]
        let answer = pathFindingAlgorithm.BFSalgo(this.state.grid, this.state.nodes, Y, this.state.EndX, current, this.state.time);
        console.log(answer);
        answer
            .then(res => {
                console.log(res);
            })        
    }

    render() {
        const marginBottom = this.state.marginBottom;
        return (
            <div className={ styles.Visualizer }>
                <div className={ styles.Grid } style={{ marginBottom: `${marginBottom}px` }} >
                    {this.state.grid.map((row, key1) => {
                        return (
                            <div className={ `Nodes_row ${styles.GridRow}` } key={ key1 } >
                                {row.map((node, key2) =>  {
                                    return <Node node={ node } key={ key2 } />
                                })}
                            </div>
                        );
                    })}
                </div>
                <div className="Controller">
                    <PathFindingController 
                        breadthFirstSearch={ this.breadthFirstSearch } 
                        width={ this.props.width }
                        height={ this.props.height }
                    />
                </div>
            </div>
        )
    }
}

export default PathFindingVisualizer;