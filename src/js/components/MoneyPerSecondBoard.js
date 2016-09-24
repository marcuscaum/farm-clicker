import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMoneyTotal } from '../actions/moneyActions';

@connect((store) => {
  return {
    money_per_second: store.money.money_per_second,
  };
})

export default class MoneyPerSecondBoard extends Component {

  moneyPerSecondWorker() {
    const { money_per_second } = this.props;

    if (money_per_second > 0) {
      setTimeout(() => {
        this.props.dispatch(addMoneyTotal(money_per_second));
        this.moneyPerSecondWorker();
      }, 1000);
    }
  }

  componentDidUpdate() {
    this.moneyPerSecondWorker();
  }

  render() {
    const { money_per_second } = this.props;

    const style = {
      per_second: {
        margin:0,
        padding: '20px 0',
        backgroundColor: '#00ff53',
        textAlign: 'center',
        fontWeight: 100,
        fontSize: 15
      }
    }

    return <h2 style={style.per_second}>
      <strong> $ {money_per_second}/s (money per second)</strong>
    </h2>
  }
}
