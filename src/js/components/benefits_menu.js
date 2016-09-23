import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addChicken } from '../actions/benefitsActions';

@connect((store) => {
  return {
    money: store.money,
    benefits: store.benefits
  };
})

export default class BenefitsMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { benefits, money } = this.props;

    const style = {
      benefits: {
        width: '100%',
        padding: 0,
        margin: 0,
        item: {
          boxSizing: 'border-box',
          padding: '15px 50px',
          color: 'white',
          listStyleType: 'none',
          borderBottom: '1px dashed orange'
        }
      },
    }

    return(
      <ul style={ style.benefits }>
        <li style={ style.benefits.item }>
          <h2>Chicken </h2>
          <div>{benefits.chicken.price}</div>
        </li>
      </ul>
    );
  }
}
