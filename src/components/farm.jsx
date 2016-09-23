import React, { Component } from 'react';

class Farm extends Component {


  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      farm: {
        money_total: 0,
        money_per_second: 0,
        benefits: {
          chickens: 0,
          pigs: 0,
          cows: 0,
          corn_field: 0
        }
      }
    }
  }

  render() {

    const style = {
      farm: {
        width: 430,
        height: '100%',
        money: {
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
            textAlign: 'center'
          }
        }
      }
    }

    return(
      <div style={ style.farm }>
        <div style={ style.farm.board }>
          <h1 style={ style.farm.money.total }> $12</h1>
          <h2 style={ style.farm.money.per_second }>MONEY PER SECOND 2/s</h2>
        </div>
      </div>
    )
  }

}

export default Farm;
