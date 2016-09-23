import React, { Component } from 'react';
import { connect } from 'react-redux';

import BenefitsMenu from './benefits_menu';
import { addMoneyPerSecond, addMoneyTotal } from '../actions/moneyActions';

@connect((store) => {
  return {
    money_total: store.money.money_total,
    money_per_second: store.money.money_per_second
  };
})

export default class App extends Component {

  constructor(props) {
    super(props);
    this.moneyPerSecondWorker();
  }

  incrementMoneyTotal(quantity) {
    this.props.dispatch(addMoneyTotal(quantity));
  }

  incrementeMoneyPerSecond(quantity) {
    this.props.dispatch(addMoneyPerSecond(quantity))
  }

  moneyPerSecondWorker() {
    const { money_total, money_per_second } = this.props;

    if (this.props.money_per_second > 0) {
      setTimeout(() => {
        this.incrementMoneyTotal(money_per_second)
        this.moneyPerSecondWorker();
      }, 1000);
    }
  }


  render() {
    const { money_per_second, money_total } = this.props;

    const style = {
      farm: {
        money_board: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: 430,
          total: {
            fontSize: '4em',
            backgroundColor: 'orange',
            fontWeight: 'inherit',
            textAlign: 'center',
            padding: '45px 0',
            margin: 0,
            borderBottom: '10px dashed #00ff53'
          },
          per_second: {
            margin:0,
            padding: '20px 0',
            backgroundColor: '#00ff53',
            textAlign: 'center',
            fontWeight: 100,
            fontSize: 15
          },
          work_button: {
            height: '100%'
          }
        }
      }
    }

    return <div style={style.farm}>
      <div style={style.farm.money_board}>
        <h1 style={style.farm.money_board.total}> ${money_total}</h1>
        <h2 style={style.farm.money_board.per_second}>MONEY PER SECOND <strong>{money_per_second}/s</strong></h2>
        <button style={style.farm.money_board.work_button} onClick={ this.incrementMoneyTotal.bind(this, 1) }> WORK!</button>
      </div>
      <BenefitsMenu />
    </div>

  }
}
