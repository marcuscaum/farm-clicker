import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addChicken } from '../actions/benefitsActions';
import { addMoneyPerSecond, reduceMoneyTotal } from '../actions/moneyActions';

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

  buyChicken(quantity) {
    const { benefits, money } = this.props;

    if (money.money_total < benefits.chicken.price) { return alert("Dinheiro insuficiente!") }

    this.props.dispatch(addChicken(quantity));
    this.props.dispatch(reduceMoneyTotal(benefits.chicken.price))
    this.props.dispatch(addMoneyPerSecond(0.50));
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
          borderBottom: '1px dashed orange',
          display: 'flex',
          justifyContent: 'space-between',
          chicken: {
            backgroundImage: 'url("../../img/chicken.gif")',
            backgroundSize: 'cover',
            width: 60,
            height: 35,
            float: 'left'
          }
        },
        buy_button: {
          backgroundColor: 'lime',
          border: 'none',
          width: 100,
          hover: {
            cursor: 'pointer'
          }
        }
      },
    }

    let chickens = [];

    for (var i = 0; i < benefits.chicken.quantity; i++) {
      chickens.push(<div style={style.benefits.item.chicken}> </div>)
    }

    return(
      <ul style={style.benefits}>
        <li style={style.benefits.item}>
          <div>
            <h2>Chicken (${benefits.chicken.price}) </h2>
            <div>{chickens}</div>
          </div>
          <button className="buy-button" style={style.benefits.buy_button} onClick={ this.buyChicken.bind(this, 1) }> Comprar </button>
        </li>
      </ul>
    );
  }
}
