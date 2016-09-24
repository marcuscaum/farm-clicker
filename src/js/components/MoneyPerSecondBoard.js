import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMoneyTotal } from '../actions/moneyActions';

@connect((store) => {
  return {
    money_per_second: store.money.money_per_second,
  };
})

export default class MoneyPerSecondBoard extends Component {

  constructor(props, worker) {
    super(props);

    this.incrementMoneyPerSecondWorker();
  }

  incrementMoneyPerSecondWorker() {
    setInterval(() => {
      if (this.props.money_per_second > 0) {
        this.props.dispatch(addMoneyTotal(this.props.money_per_second));
      }
    }, 1000)
  }


  render() {
    const { money_per_second } = this.props;

    const style = {
      per_second: {
        margin:0,
        padding: '20px 0',
        backgroundColor: 'rgba(228, 5, 5, 0.45)',
        color: 'white',
        textAlign: 'center',
        fontWeight: 100,
        fontSize: 25
      }
    }

    return <h2 style={style.per_second}>
      <strong> $ {money_per_second}/s (money per second)</strong>
    </h2>
  }
}
