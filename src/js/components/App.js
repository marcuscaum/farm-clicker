import React, { Component } from 'react';
import { connect } from 'react-redux';

import Barn from './Barn';
import BenefitsMenu from './BenefitsMenu';
import MoneyPerSecondBoard from './MoneyPerSecondBoard';
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
  }

  incrementMoneyTotal(quantity) {
    this.props.dispatch(addMoneyTotal(quantity));
  }

  incrementeMoneyPerSecond(quantity) {
    this.props.dispatch(addMoneyPerSecond(quantity))
  }

  render() {
    const { money_per_second, money_total } = this.props;

    const style = {
      farm: {
        money_board: {
          total: {
            fontSize: '4em',
            fontFamily: 'serif',
            color: 'orange',
            textAlign: 'center',
            padding: '45px 0',
            margin: 0,
            borderBottom: '10px dashed rgba(255, 255, 255, 0.5)'
          },
          per_second: {
            margin:0,
            padding: '20px 0',
            backgroundColor: '#00ff53',
            textAlign: 'center',
            fontWeight: 100,
            fontSize: 15
          }
        }
      }
    }

    return <div style={style.farm}>
      <div className="money">
        <div className="money-board">
          <h1 style={style.farm.money_board.total}> $ <span>{money_total}</span></h1>
          <MoneyPerSecondBoard />
          <button style={style.farm.money_board.work_button} onClick={ this.incrementMoneyTotal.bind(this, 1) }> WORK!</button>
        </div>
      </div>
      <div className="board">
        <BenefitsMenu />
        <Barn/>
      </div>
    </div>

  }
}
