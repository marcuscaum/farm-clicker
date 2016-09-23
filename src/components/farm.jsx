import React, { Component } from 'react';

class Farm extends Component {


  constructor() {
    super();
    this.state = {
      farm: {
        money_total: 0,
        money_per_second: 5,
        benefits: {
          chickens: 0,
          pigs: 0,
          cows: 0,
          corn_fields: 0
        }
      }
    }

    this.incrementMoneyPerSecond();
  }

  incrementMoneyTotal = (quantity) => {
    this.setState({
      farm: {
        money_total: this.state.farm.money_total + quantity,
        money_per_second: this.state.farm.money_per_second,
        benefits: {
          chickens: this.state.farm.benefits.chickens,
          pigs: this.state.farm.benefits.pigs,
          cows: this.state.farm.benefits.cows,
          corn_fields: this.state.farm.benefits.corn_fields
        }
      }
    })
  }

  incrementMoneyPerSecond() {
    if (this.state.farm.money_per_second > 0) {
      setTimeout(() => {
        this.incrementMoneyTotal(this.state.farm.money_per_second);
        this.incrementMoneyPerSecond();
      }, 1000);
    }
  }

  addChicken() {

  }

  render() {

    const style = {
      farm: {
        width: 430,
        height: '100%',
        money_board: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
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

    return(
      <div style={style.farm}>
        <div style={style.farm.money_board}>
          <h1 style={style.farm.money_board.total}> ${this.state.farm.money_total}</h1>
          <h2 style={style.farm.money_board.per_second}>MONEY PER SECOND <strong>{this.state.farm.money_per_second}/s</strong></h2>
          <button style={style.farm.money_board.work_button} onClick={() => this.incrementMoneyTotal(1) }> WORK!</button>
        </div>
      </div>
    )
  }

}

export default Farm;
