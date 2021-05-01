import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js';
import PopUpMenu from './components/PopUpMenu/PopUpMenu.js';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import PathFindingVisualizer from './components/PathFindingVisualizer/PathFindingVisualizer.js';
import './App.css';

const links = [
  {
    id: 1,
    link:"home",
    name:"home" 
  }, 
  {
    id: 2,
    link:"sorting",
    name:"sorting visualizer"
  }, 
  {
    id: 3,
    link:"pathFinding",
    name:"path finding visualizer"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isClick: false,
      isMobile: (window.innerWidth < 768) ? true : false 
    }
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth, 
      windowHeight: window.innerHeight
    });
    if(this.state.windowWidth < 768) {
      this.setState({isMobile:true});
    } else {
      this.setState({
        isClick: false,
        isMobile: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  viewMenu = (e) => {
    if(e) {
      this.setState({isClick:true})
    } else {
      this.setState({isClick:false}) 
    }
  }

  render() {
    return (
      <div className="App">
        <Header route={ links } viewMenu={ this.viewMenu } isClick={ this.state.isClick } isMobile={ this.state.isMobile }/>
        {!this.state.isMobile ? "" : 
          <div className={ `menu ${this.state.isClick ? '' : 'hidden'}` } >
            <PopUpMenu route={ links } viewMenu={ this.viewMenu } />
        </div>
        }
          <Switch>
            <Route exact path='/' />
            <Route path='/sorting' component={SortingVisualizer} />
            <Route path='/pathFinding' render={(props) =>  (<PathFindingVisualizer {...props} height={ this.state.windowHeight } width={ this.state.windowWidth } />)} />
          </Switch>
      </div>
    );
  }
}

export default App;
