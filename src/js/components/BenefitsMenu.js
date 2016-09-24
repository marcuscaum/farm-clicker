import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addChicken, addPig } from '../actions/benefitsActions';
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
    const { benefits } = this.props;
    this.buyAction(benefits.chicken, "CHICKEN", 1, quantity);
  }

  buyPig(quantity) {
    const { benefits } = this.props;
    this.buyAction(benefits.pig, "PIG", 10, quantity);
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
    }

    this.props.dispatch(reduceMoneyTotal(item.price))
    this.props.dispatch(addMoneyPerSecond(money_per_second));
  }

  itemImages(type, item, image_style) {
    let style;
    let items = [];

    for (var i = 0; i < item.quantity; i++) {
      items.push(<div key={i} style={image_style}> </div>)
    }

    return items;
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
          display: 'flex',
          justifyContent: 'space-between',
          transition: '0.6s ease all',
          chicken: {
            backgroundSize: '100%',
            width: 50,
            height: 50,
            float: 'left',
            backgroundImage: 'url("../../img/chicken.gif")',
            backgroundRepeat: 'no-repeat'
          },
          pig: {
            backgroundSize: '100%',
            width: 30,
            height: 30,
            float: 'left',
            backgroundImage: 'url("../../img/pig.gif")',
            marginRight: 15
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

    return(
      <ul style={style.benefits}>
        <li style={style.benefits.item}>
          <div>
            <h2> Chicken (${benefits.chicken.price}) </h2>
            <div>{this.itemImages("chicken", benefits.chicken, style.benefits.item.chicken)}</div>
          </div>
          <button className="buy-button" style={style.benefits.buy_button} onClick={ this.buyChicken.bind(this, 1) }> Comprar </button>
        </li>
        <li className={(benefits.chicken.quantity >= 5) ? 'show' : 'hide'} style={style.benefits.item}>
          <div>
            <h2> Pig (${benefits.pig.price}) </h2>
            <div>{this.itemImages("pig", benefits.pig, style.benefits.item.pig)}</div>
          </div>
          <button className="buy-button" style={style.benefits.buy_button} onClick={ this.buyPig.bind(this, 1) }> Comprar </button>
        </li>
      </ul>
    );
  }
}
