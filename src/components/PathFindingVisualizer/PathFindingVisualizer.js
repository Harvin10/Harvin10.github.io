import React, { Component } from 'react';
import Node from '../Node/Node.js';
import PathFindingController from '../PathFindingController/PathFindingController.js';
import styles from './PathFindingVisualizer.module.css';

class PathFindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            node: [],
            marginBottom: 0
        };
    }

    componentDidMount() {
        this.resetGrid();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
            this.resetGrid();
        }
    }

    resetGrid() {
        let node = [];
        let nodeSize = 50;
        let column = 0;
        let height = (this.props.height - (this.props.height * 20 / 100) - 100) / nodeSize;
        for(let i = 0; i < Math.floor(height); i++) {
            for(let j = 0; j < Math.floor((this.props.width - 100) / nodeSize); j++) {
                node.push(this.nodeState(i, j, Math.floor(height), Math.floor((this.props.width - 100) / nodeSize)));
            }
            column++;
        }
        var margin_bottom = height * nodeSize - (column * nodeSize);
        this.setState({
            node: node,  
            marginBottom: margin_bottom
        });
    }

    nodeState(x, y, height, width) {
        const object = {
            x: x,
            y: y,
            isVisited: false,
            isStart: x === Math.round(height / 2)  && y === Math.floor((width / 6) - 1),
            isEnd: x === Math.round(height / 2) && y === Math.floor(width - (width / 6))
        }
        return object;
    }

    render() {
        const nodes = this.state.node;
        const marginBottom = this.state.marginBottom;
        return (
            <div className={ styles.Visualizer }>
                <div className={ styles.Nodes } style={{ marginBottom: `${marginBottom}px` }} >
                    {nodes.map((node) => {
                        return <Node node={ node } />
                    })}
                </div>
                <div className="Controller">
                    <PathFindingController bubbleSort={ this.state } />
                </div>
            </div>
        )
    }
}

export default PathFindingVisualizer;