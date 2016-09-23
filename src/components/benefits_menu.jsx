import React, { Component } from 'react';

class BenefitsMenu extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {

    const style = {
      benefits: {
        width: '100%',
        item: {
          boxSizing: 'border-box',
          padding: 15,
          color: 'white',
          listStyleType: 'none'
        }
      },
    }

    return(
      <ul style={ style.benefits }>
        <li style={ style.benefits.item }>
          <h2>Nome de benefício </h2>

        </li>
      </ul>
    );
  }
}

export default BenefitsMenu;
