import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addChicken, addPig, addCow } from '../actions/benefitsActions';
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
    window.props = this.props;
  }

  buyChicken(quantity) {
    this.buyAction(this.props.benefits.chicken, "CHICKEN", 1, quantity);
  }

  buyPig(quantity) {
    this.buyAction(this.props.benefits.pig, "PIG", 10, quantity);
  }

  buyCow(quantity) {
    this.buyAction(this.props.benefits.cow, "COW", 50, quantity);
  }

  buyAction(item, type, money_per_second, item_quantity) {
    const { money } = this.props;

    if (money.money_total < item.price) { return alert("Dinheiro insuficiente!") }

    switch (type) {
      case "CHICKEN": {
        this.props.dispatch(addChicken(item_quantity));
        break;
      }
      case "PIG": {
        this.props.dispatch(addPig(item_quantity));
        break;
      }
      case "COW": {
        this.props.dispatch(addCow(item_quantity));
        break;
      }
    }

    this.props.dispatch(reduceMoneyTotal(item.price))
    this.props.dispatch(addMoneyPerSecond(money_per_second));
  }

  render() {
    const { benefits, money } = this.props;

    return(
      <ul className="benefits">
        <li className="add_button" onClick={ this.buyChicken.bind(this, 1) }>
            Chicken (${benefits.chicken.price})
        </li>
        <li className={(money.money_per_second >= 5) ? 'add_button show' : 'add_button hide'} onClick={ this.buyPig.bind(this, 1) }>
            Pig (${benefits.pig.price})
        </li>
        <li className={(money.money_per_second >= 50) ? 'add_button show' : 'add_button hide'} onClick={ this.buyCow.bind(this, 1) }>
            Cow (${benefits.cow.price})
        </li>
      </ul>
    );
  }
}
