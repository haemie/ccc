import React, { Component } from 'react';
import { render } from 'react-dom';
import Allparts from './Allparts.jsx';
import Myparts from './Myparts.jsx';
import Visualize from './Visualize.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //code
    return (
        <div id="appDiv">
          <div id="partsSelector"><Allparts/></div>
          <div id="selectedParts">
            <Myparts/>
            <Visualize/>
          </div>
        </div>
    );
  }
}


export default App;