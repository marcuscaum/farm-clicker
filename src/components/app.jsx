import React, { Component } from 'react';
import Farm from './farm';
import BenefitsMenu from './benefits_menu';

class App extends Component {
  render() {
    return (
      <div>
        <Farm />
        <BenefitsMenu />
      </div>
    )
  }
}

export default App;
